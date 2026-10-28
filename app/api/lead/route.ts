import { NextResponse } from "next/server";

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

    // Send directly to Google Apps Script Web App
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
    } else {
      console.warn("GOOGLE_SCRIPT_URL is not configured in environment variables.");
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
