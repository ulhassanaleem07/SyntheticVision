import type { Metadata } from "next";

import { MasterclassExperience } from "@/components/masterclass-experience";

export const metadata: Metadata = {
  title: "AI Content Masterclass | SYNTHETIC VISUALS by Aleem",
  description:
    "Join the Synthetic Visuals AI Content Masterclass for UGC ads, consistent AI characters, cinematic DVCs, prompt direction, and post-production workflows.",
};

export default function MasterclassPage() {
  return <MasterclassExperience />;
}
