"use client";

import { useMemo, useState } from "react";

import { VideoLightboxGrid } from "@/components/video-lightbox-grid";
import { workCategories } from "@/lib/work";

const tabLabels: Record<string, string> = {
  "ai-generated-trailers": "Trailers",
  "ai-ugc-ads": "UGC Ads",
  "corporate-dvcs": "Corporate",
  "real-estate-dvcs": "Real Estate",
};

export function WorkVideoShowcase() {
  const [activeSlug, setActiveSlug] = useState(workCategories[0]?.slug ?? "all");

  const activeVideos = useMemo(() => {
    if (activeSlug === "all") {
      return workCategories.flatMap((category) =>
        category.videos.map((video) => ({
          ...video,
          categoryLabel: category.label,
          categorySlug: category.slug,
          categoryTitle: category.title,
          thumbnailUrl: video.thumbnailUrl,
        })),
      );
    }

    const category = workCategories.find((item) => item.slug === activeSlug);

    if (!category) {
      return [];
    }

    return category.videos.map((video) => ({
      ...video,
      categoryLabel: category.label,
      categorySlug: category.slug,
      categoryTitle: category.title,
      thumbnailUrl: video.thumbnailUrl,
    }));
  }, [activeSlug]);

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-[#c8ff2e]">
            Quick browse
          </p>
          <h2 className="mt-2 font-display text-6xl leading-none text-white sm:text-7xl">
            Pick a lane. Press play.
          </h2>
        </div>
      </div>

      <div className="sticky top-3 z-20 mb-5 overflow-x-auto rounded-lg border border-white/10 bg-[#03070a]/90 p-1 backdrop-blur md:top-4">
        <div className="flex min-w-max gap-1">
          <button
            type="button"
            onClick={() => setActiveSlug("all")}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              activeSlug === "all"
                ? "bg-[#c8ff2e] text-black"
                : "bg-white/[0.04] text-white/70"
            }`}
          >
            All
          </button>
          {workCategories.map((category) => (
            <button
              type="button"
              key={category.slug}
              onClick={() => setActiveSlug(category.slug)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                activeSlug === category.slug
                  ? "bg-[#c8ff2e] text-black"
                  : "bg-white/[0.04] text-white/70"
              }`}
            >
              {tabLabels[category.slug] ?? category.title}
            </button>
          ))}
        </div>
      </div>

      <VideoLightboxGrid videos={activeVideos} />
    </div>
  );
}
