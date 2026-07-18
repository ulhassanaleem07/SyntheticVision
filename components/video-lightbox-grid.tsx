"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

import { Card } from "@/components/ui/card";
import { getVideoEmbedUrl, type WorkVideo } from "@/lib/work";

export type LightboxVideo = WorkVideo & {
  categoryLabel: string;
  categorySlug: string;
  categoryTitle: string;
  thumbnailUrl: string;
};

type VideoLightboxGridProps = {
  videos: LightboxVideo[];
};

function getAutoplayUrl(video: LightboxVideo) {
  const separator = getVideoEmbedUrl(video).includes("?") ? "&" : "?";

  return `${getVideoEmbedUrl(video)}${separator}autoplay=1&rel=0&modestbranding=1`;
}

export function VideoLightboxGrid({ videos }: VideoLightboxGridProps) {
  const [activeVideo, setActiveVideo] = useState<LightboxVideo | null>(null);

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-2">
        {videos.map((video) => (
          <Card
            key={`${video.categorySlug}-${video.id}`}
            className="overflow-hidden border-white/10 bg-white/[0.04]"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group relative block aspect-video w-full overflow-hidden bg-black text-left"
              aria-label={`Play ${video.title}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,10,0.06),rgba(3,7,10,0.72)),radial-gradient(circle_at_50%_48%,rgba(200,255,46,0.20),transparent_34%)]" />
              <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c8ff2e]/65 bg-black/50 text-[#c8ff2e] shadow-[0_0_42px_rgba(200,255,46,0.22)] transition duration-300 group-hover:scale-110 group-hover:bg-[#c8ff2e] group-hover:text-black">
                <Play className="size-8 fill-current" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-xs font-semibold uppercase text-[#c8ff2e]">
                  {video.categoryTitle}
                </p>
                <h3 className="mt-1 font-display text-4xl leading-none text-white">
                  {video.title}
                </h3>
              </div>
            </button>
          </Card>
        ))}
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-md border border-[#c8ff2e]/45 bg-white/[0.04] text-white"
            onClick={(event) => {
              event.stopPropagation();
              setActiveVideo(null);
            }}
          >
            <X className="size-5" />
          </button>

          <div
            className="w-full max-w-[980px]"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-4 text-sm font-semibold uppercase text-[#c8ff2e]">
              {activeVideo.categoryTitle}
            </p>
            <div className="overflow-hidden rounded-lg border border-[#c8ff2e]/45 bg-black shadow-[0_0_90px_rgba(200,255,46,0.18)]">
              <div className="aspect-video">
                <iframe
                  title={activeVideo.title}
                  src={getAutoplayUrl(activeVideo)}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
