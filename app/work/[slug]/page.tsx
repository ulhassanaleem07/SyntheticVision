import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { VideoLightboxGrid } from "@/components/video-lightbox-grid";
import { getWorkCategory, workCategories } from "@/lib/work";

type WorkCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return workCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: WorkCategoryPageProps) {
  const { slug } = await params;
  const category = getWorkCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} | SYNTHETIC VISUALS by Aleem`,
    description: category.description,
  };
}

export default async function WorkCategoryPage({
  params,
}: WorkCategoryPageProps) {
  const { slug } = await params;
  const category = getWorkCategory(slug);

  if (!category) {
    notFound();
  }

  const galleryVideos = category.videos.map((video) => ({
    ...video,
    categoryLabel: category.label,
    categorySlug: category.slug,
    categoryTitle: category.title,
    thumbnailUrl: video.thumbnailUrl,
  }));

  return (
    <main className="min-h-screen bg-[#03070a] p-2 text-[#f7f9f0] sm:p-3">
      <div className="edge-lines" />
      <div className="scroll-glow" />

      <section className="mx-auto min-h-screen overflow-hidden rounded-lg bg-[#03070a] shadow-2xl">
        <div className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,255,46,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0))]" />
          <div className="relative z-10">
            <header className="flex items-center justify-between">
              <BrandLogo href="/#work" />

              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-md border border-[#c8ff2e]/45 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80"
              >
                <ArrowLeft className="size-4" />
                Back to Work
              </Link>
            </header>

            <div className="mx-auto max-w-6xl py-16 sm:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c8ff2e]">
                Work gallery
              </p>
              <h1 className="mt-4 font-display text-7xl leading-none text-white sm:text-8xl">
                {category.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                {category.description}
              </p>

              <div className="mt-10">
                <VideoLightboxGrid videos={galleryVideos} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
