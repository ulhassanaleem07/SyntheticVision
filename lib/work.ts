export type WorkVideo = {
  title: string;
  provider: "vimeo" | "youtube";
  id: string;
  thumbnailUrl: string;
};

export type WorkCategory = {
  slug: string;
  title: string;
  label: string;
  description: string;
  accent: string;
  thumbnailUrl: string;
  videos: WorkVideo[];
};

export const workCategories: WorkCategory[] = [
  {
    slug: "ai-ugc-ads",
    title: "AI UGC Ads",
    label: "Creator-style ads",
    description:
      "Fast, believable UGC-style content with consistent faces, voices, products, logos, and brand cues across every variation.",
    accent:
      "bg-[radial-gradient(circle_at_42%_24%,rgba(200,255,46,0.34),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03))]",
    thumbnailUrl: "/work/ai-ugc-ads.png",
    videos: [
      {
        title: "AI UGC Ad 01",
        provider: "youtube",
        id: "nBDIU-l0Yxs",
        thumbnailUrl: "/videos/ai-ugc-ad-01.png",
      },
      {
        title: "AI UGC Ad 02",
        provider: "youtube",
        id: "KktRIH58Dzg",
        thumbnailUrl: "/videos/ai-ugc-ad-02.png",
      },
    ],
  },
  {
    slug: "real-estate-dvcs",
    title: "Real Estate DVCs",
    label: "Property films",
    description:
      "Cinematic property-led DVCs with consistent hosts, architectural mood, location storytelling, and polished edit pacing.",
    accent:
      "bg-[radial-gradient(circle_at_68%_28%,rgba(200,255,46,0.30),transparent_30%),linear-gradient(155deg,rgba(255,255,255,0.13),rgba(255,255,255,0.025))]",
    thumbnailUrl: "/work/real-estate-dvcs.png",
    videos: [
      {
        title: "Ishbiliya",
        provider: "youtube",
        id: "yOcuzXTmZ-I",
        thumbnailUrl: "/videos/ishbiliya.png",
      },
      {
        title: "HS Villas",
        provider: "youtube",
        id: "NIifdcu1UKc",
        thumbnailUrl: "/videos/hs-villas.png",
      },
    ],
  },
  {
    slug: "corporate-dvcs",
    title: "Corporate DVCs",
    label: "Brand films",
    description:
      "Sharp corporate stories where AI characters, company colors, logo placement, and campaign tone stay aligned.",
    accent:
      "bg-[radial-gradient(circle_at_34%_34%,rgba(200,255,46,0.28),transparent_28%),linear-gradient(165deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]",
    thumbnailUrl: "/work/corporate-dvcs.png",
    videos: [
      {
        title: "MG Car",
        provider: "youtube",
        id: "XvnJotVfwQE",
        thumbnailUrl: "/videos/mg-car.png",
      },
    ],
  },
  {
    slug: "ai-generated-trailers",
    title: "AI Generated Trailers",
    label: "Launch teasers",
    description:
      "Trailer-style launch films for products, events, and campaigns, built around memorable characters and cinematic momentum.",
    accent:
      "bg-[radial-gradient(circle_at_58%_20%,rgba(200,255,46,0.36),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.025))]",
    thumbnailUrl: "/work/ai-generated-trailers.png",
    videos: [
      {
        title: "AI Generated Trailer 01",
        provider: "youtube",
        id: "LG-FwSRtTG0",
        thumbnailUrl: "/videos/ai-trailer-01.png",
      },
      {
        title: "AI Generated Trailer 02",
        provider: "youtube",
        id: "JT0gzTu_bf0",
        thumbnailUrl: "/videos/ai-trailer-02.png",
      },
      {
        title: "AI Generated Trailer 03",
        provider: "youtube",
        id: "WARzMv95X8A",
        thumbnailUrl: "/videos/ai-trailer-03.png",
      },
    ],
  },
];

export function getWorkCategory(slug: string) {
  return workCategories.find((category) => category.slug === slug);
}

export function getVideoEmbedUrl(video: Pick<WorkVideo, "id" | "provider">) {
  if (video.provider === "youtube") {
    return `https://www.youtube.com/embed/${video.id}`;
  }

  return `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`;
}
