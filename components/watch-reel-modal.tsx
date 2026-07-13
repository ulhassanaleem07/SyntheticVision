"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

import { cn } from "@/lib/utils";

const VIMEO_ID = "76979871";

type WatchReelModalProps = {
  className?: string;
};

export function WatchReelModal({ className }: WatchReelModalProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const frame = requestAnimationFrame(() => setVisible(true));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      setVisible(false);
    };
  }, [open]);

  const closeModal = () => {
    setVisible(false);
    window.setTimeout(() => setOpen(false), 220);
  };

  const modal =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            aria-hidden={!visible}
            className={cn(
              "fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4 py-8 opacity-0 backdrop-blur-md transition duration-300",
              visible
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            )}
            onClick={closeModal}
          >
            <button
              type="button"
              aria-label="Close showreel"
              className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-md border border-[#c8ff2e]/45 bg-white/[0.04] text-white"
              onClick={(event) => {
                event.stopPropagation();
                closeModal();
              }}
            >
              <X className="size-5" />
            </button>

            <div
              role="dialog"
              aria-modal="true"
              aria-label="Watch showreel"
              className={cn(
                "w-full max-w-[900px] origin-center scale-95 transition duration-300",
                visible && "scale-100",
              )}
              onClick={(event) => event.stopPropagation()}
            >
              <p className="mb-4 font-display text-5xl leading-none text-white">
                Watch Reel
              </p>
              <div className="overflow-hidden rounded-lg border border-[#c8ff2e]/45 bg-black shadow-[0_0_90px_rgba(200,255,46,0.18)]">
                <div className="aspect-video">
                  <iframe
                    title="Synthetic Vision showreel"
                    src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&muted=0&title=0&byline=0&portrait=0`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md border border-[#c8ff2e]/55 bg-transparent px-4 py-2 text-sm font-semibold text-white/85 transition",
          className,
        )}
      >
        <Play className="size-4 fill-current" />
        Watch Reel
      </button>
      {modal}
    </>
  );
}
