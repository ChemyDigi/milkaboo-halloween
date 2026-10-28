import type { Metadata, Viewport } from "next";
import { Creepster, Lato, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
  display: "swap",
});

const bherisi = localFont({
  src: "../public/fonts/Bherisi-Regular.ttf",
  variable: "--font-bherisi",
  display: "swap",
});

const jamoaScript = localFont({
  src: "../public/fonts/JamoaScript.ttf",
  variable: "--font-jamoa",
  display: "swap",
});

const mainstay = localFont({
  src: "../public/fonts/Mainstay.ttf",
  variable: "--font-mainstay",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milkaboo - Free the Cup | Halloween",
  description:
    "The ghosts have taken over! Free the Milkaboo cup, win the challenge, and claim a FREE drink!",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0514",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bherisi.variable} ${jamoaScript.variable} ${lato.variable} ${mainstay.variable} ${creepster.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
