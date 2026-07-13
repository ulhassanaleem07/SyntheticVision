import { ArrowLeft, Clapperboard } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/ui/card";
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
    title: `${category.title} | SYNTHETIC VISION by Aleem`,
    description: category.description,
  };
}

function getEmbedUrl(video: { provider: "vimeo" | "youtube"; id: string }) {
  if (video.provider === "youtube") {
    return `https://www.youtube.com/embed/${video.id}`;
  }

  return `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`;
}

export default async function WorkCategoryPage({
  params,
}: WorkCategoryPageProps) {
  const { slug } = await params;
  const category = getWorkCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#03070a] p-2 text-[#f7f9f0] sm:p-3">
      <div className="edge-lines" />
      <div className="scroll-glow" />

      <section className="mx-auto min-h-screen overflow-hidden rounded-lg bg-[#03070a] shadow-2xl">
        <div className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,255,46,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0))]" />
          <div className="relative z-10">
            <header className="flex items-center justify-between">
              <Link href="/#work" className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-[#c8ff2e] text-black">
                  <Clapperboard className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-3xl leading-none text-white">
                    SYNTHETIC VISION
                  </span>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                    by Aleem
                  </span>
                </span>
              </Link>

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

              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {category.videos.map((video) => (
                  <Card
                    key={video.title}
                    className="overflow-hidden border-white/10 bg-white/[0.04]"
                  >
                    <div className="aspect-video bg-black">
                      <iframe
                        title={video.title}
                        src={getEmbedUrl(video)}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="border-t border-white/10 p-4">
                      <h2 className="font-display text-3xl leading-none text-white">
                        {video.title}
                      </h2>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
