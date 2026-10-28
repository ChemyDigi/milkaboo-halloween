import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Milkaboo",
  robots: { index: false, follow: false },
};

/** Served by the proxy in place of any page until this device has entered the site password. */
export default function UnlockPage() {
  return <PasswordGate />;
}
