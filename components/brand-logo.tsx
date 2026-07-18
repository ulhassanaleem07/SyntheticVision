"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md";
};

export function BrandLogo({ className, href = "/", size = "md" }: BrandLogoProps) {
  const content = (
    <>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#c8ff2e]/25 bg-black shadow-[0_0_22px_rgba(200,255,46,0.16)]",
          size === "sm" ? "size-9" : "size-11",
        )}
      >
        <Image
          src="/synthetic-visuals-logo.png"
          alt=""
          width={640}
          height={640}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display leading-none text-white",
            size === "sm" ? "text-2xl" : "text-3xl",
          )}
        >
          SYNTHETIC VISUALS
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/55">
          by Aleem
        </span>
      </span>
    </>
  );

  if (!href) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className={cn("flex items-center gap-3", className)}>
      {content}
    </Link>
  );
}
