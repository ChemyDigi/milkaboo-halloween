import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, mobile, flavor, consent, timestamp } = body;

    if (!email || !mobile) {
      return NextResponse.json(
        { error: "Email and mobile number are required" },
        { status: 400 }
      );
    }

    const leadData = {
      email: String(email).trim(),
      mobile: String(mobile).trim(),
      flavor: flavor ? String(flavor).trim() : "Unknown",
      consent: Boolean(consent),
      timestamp: timestamp || new Date().toISOString(),
    };

    // 1. Send to Google Apps Script Web App if configured
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    let sentToGoogle = false;

    if (scriptUrl) {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
          // Google Apps Script redirect handling
          redirect: "follow",
        });

        if (response.ok) {
          sentToGoogle = true;
        } else {
          console.warn("Google Script returned non-200 status:", response.status);
        }
      } catch (err) {
        console.error("Failed to forward lead to Google Apps Script:", err);
      }
    }

    // 2. Local fallback storage to ensure no leads are ever lost
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "leads.json");
      let existingLeads = [];
      if (fs.existsSync(leadsFile)) {
        const fileContent = fs.readFileSync(leadsFile, "utf-8");
        existingLeads = JSON.parse(fileContent || "[]");
      }
      existingLeads.push({
        ...leadData,
        sentToGoogle,
        savedAt: new Date().toISOString(),
      });
      fs.writeFileSync(leadsFile, JSON.stringify(existingLeads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Failed to write to local fallback leads file:", fsErr);
    }

    return NextResponse.json({
      success: true,
      sentToGoogle,
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
