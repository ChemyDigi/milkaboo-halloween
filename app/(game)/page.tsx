import type { Metadata, Viewport } from "next";
import HalloweenExperience from "@/components/HalloweenExperience";

export const metadata: Metadata = {
  title: "Halloween - Free the Milkaboo Cup | Milkaboo",
  description:
    "The ghosts have taken over! Our delicious Milkaboo flavours have been conquered by mischievous ghosts! Play the challenges, defeat the ghosts, and free the cups!",
};

export const viewport: Viewport = {
  themeColor: "#0b0514",
  viewportFit: "cover",
};

export default function HalloweenPage() {
  return <HalloweenExperience />;
}
