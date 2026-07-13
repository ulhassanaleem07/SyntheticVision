import {
  ArrowUpRight,
  Clapperboard,
  Layers3,
  Mail,
  Play,
  Wand2,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WatchReelModal } from "@/components/watch-reel-modal";
import { workCategories } from "@/lib/work";

const aiToolGroups = [
  {
    title: "Generation Tools",
    tools: ["Seedance", "Kling", "Veo", "Nano Banana", "Omni"],
  },
  {
    title: "Direction & Prompting",
    tools: ["ChatGPT", "Claude AI"],
  },
  {
    title: "Platforms",
    tools: ["Google Flow", "Higgsfield AI"],
  },
];

const postProductionToolGroups = [
  {
    title: "Video Editing",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
  },
  {
    title: "Motion Graphics",
    tools: ["Adobe After Effects"],
  },
  {
    title: "Image Editing",
    tools: ["Adobe Photoshop"],
  },
];

const process = [
  ["01", "Brief", "You share the vision and references."],
  ["02", "Generate", "AI produces the first cut from the brief."],
  ["03", "Edit", "Refined, graded, and synced for pace."],
  ["04", "Deliver", "Final content, ready to publish."],
];

const HERO_REEL_ID = "QFi9zrdAXIY";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070a] p-2 text-[#f7f9f0] sm:p-3">
      <div className="edge-lines" />
      <div className="scroll-glow" />
      <section className="mx-auto min-h-screen overflow-hidden rounded-lg bg-[#03070a] shadow-2xl">
        <div className="relative min-h-[calc(100vh-3rem)] overflow-hidden">
          <iframe
            title="Synthetic Vision showreel background"
            src={`https://www.youtube-nocookie.com/embed/${HERO_REEL_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_REEL_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0 opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(191,255,44,0.24),transparent_35%),radial-gradient(circle_at_12%_24%,rgba(191,255,44,0.10),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(191,255,44,0.05)_1px,transparent_1px),linear-gradient(rgba(191,255,44,0.04)_1px,transparent_1px)] bg-[size:84px_84px]" />

          <div className="relative z-10">
            <header className="relative flex items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
              <a href="#" className="flex items-center gap-3">
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
              </a>
              <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm text-white/65 md:flex">
                <a className="hover:text-white" href="#work">
                  Work
                </a>
                <a className="hover:text-white" href="#tools">
                  Tools
                </a>
                <a className="hover:text-white" href="#process">
                  Process
                </a>
                <a
                  className="rounded-md bg-[#c8ff2e] px-4 py-2 font-semibold text-black transition hover:bg-[#d8ff63]"
                  href="#contact"
                >
                  Let&apos;s Create
                </a>
              </nav>
              <Button asChild size="sm" className="bg-[#c8ff2e] text-black hover:bg-[#d8ff63] md:hidden">
                <a href="#contact">
                  Let&apos;s Create
                  <ArrowUpRight />
                </a>
              </Button>
            </header>

            <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-14 pt-20 text-center sm:px-8 lg:pt-28">
              <h1 className="mt-24 text-balance font-display text-6xl leading-none text-white sm:text-8xl lg:mt-32 lg:text-[8.5rem]">
                I cut, I generate,
                <br />
                I keep it{" "}
                <span className="sr-only">
                  sharp, on-brand, cinematic, and consistent.
                </span>
                <span className="hero-word-rotator" aria-hidden="true">
                  <span>Sharp.</span>
                  <span>On-brand.</span>
                  <span>Cinematic.</span>
                  <span>Consistent.</span>
                </span>
              </h1>

              <p className="mt-8 text-xl font-medium text-[#c8ff2e] sm:text-2xl">
                Vision, powered by AI.
              </p>

              <WatchReelModal className="mt-8 border-[#c8ff2e]/70 px-5 py-3 text-white" />
            </div>
          </div>
        </div>

        <section id="work" className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-[#c8ff2e]">
                  Work system
                </p>
                <h2 className="mt-2 font-display text-6xl leading-none text-white sm:text-7xl">
                  Consistency first.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {workCategories.map((item) => (
                <Link
                  href={`/work/${item.slug}`}
                  key={item.slug}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:scale-[1.018] hover:border-[#c8ff2e]/70 hover:shadow-[0_0_34px_rgba(200,255,46,0.20)]"
                >
                  <div className={`relative aspect-[4/5] overflow-hidden p-4 ${item.accent}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                      style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,10,0.18),rgba(3,7,10,0.74)),radial-gradient(circle_at_50%_20%,rgba(200,255,46,0.18),transparent_34%)]" />
                    <div className="relative flex h-full flex-col justify-between rounded-md border border-white/10 bg-black/30 p-4 backdrop-blur-[2px]">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-[#c8ff2e]/40 px-3 py-1 text-xs font-semibold uppercase text-[#c8ff2e]">
                          {item.label}
                        </span>
                        <span className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/70 transition group-hover:border-[#c8ff2e]/60 group-hover:text-[#c8ff2e]">
                          <Play className="size-4 fill-current" />
                        </span>
                      </div>
                      <h3 className="font-display text-5xl leading-none text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-white/55">
                      Open gallery
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
            <Card className="border-white/10 bg-[#c8ff2e] text-black">
              <CardHeader>
                <Wand2 className="mb-6 size-8" />
                <CardTitle className="font-display text-6xl leading-none">
                  AI TOOLS
                </CardTitle>
                <CardDescription className="text-black/65">
                  A curated stack of the industry&apos;s leading AI generation
                  and prompting tools used to turn ideas into cinematic,
                  on-brand content.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                {aiToolGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-sm font-bold uppercase text-black/70">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-black/10 bg-black/10 px-3 py-2 text-sm font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/[0.04] text-white">
              <CardHeader>
                <Layers3 className="mb-6 size-8 text-[#c8ff2e]" />
                <CardTitle className="font-display text-6xl leading-none">
                  POST PRODUCTION TOOLS
                </CardTitle>
                <CardDescription className="text-white/60">
                  Refined with industry-standard post-production tools to bring
                  polish, pacing, and precision to every frame.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                {postProductionToolGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-sm font-bold uppercase text-white/55">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-white/80 transition duration-200 hover:border-[#c8ff2e]/60 hover:bg-[#c8ff2e]/10 hover:text-[#c8ff2e] hover:shadow-[0_0_20px_rgba(200,255,46,0.14)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="process"
          className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-6xl leading-none text-white sm:text-7xl">
              Prompt to polish.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {process.map(([number, title, description]) => (
                <Card key={number} className="border-white/10 bg-white/[0.04]">
                  <CardHeader>
                    <span className="text-sm font-semibold text-[#c8ff2e]">
                      {number}
                    </span>
                    <CardTitle className="font-display text-4xl leading-none">
                      {title}
                    </CardTitle>
                    <p className="mt-2 text-sm font-normal leading-5 text-white/50">
                      {description}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#c8ff2e]">
                Contact
              </p>
              <h2 className="mt-2 font-display text-6xl leading-none text-white sm:text-7xl">
                Bring the idea. I build the vision.
              </h2>
            </div>
            <Card className="border-white/10 bg-white/[0.04]">
              <CardHeader>
                <CardTitle className="font-display text-4xl leading-none">
                  Start a project
                </CardTitle>
                <CardDescription>
                  UGC, DVC, trailer, or branded AI content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input aria-label="Name" placeholder="Name" />
                    <Input aria-label="Email" placeholder="Email" type="email" />
                  </div>
                  <Input aria-label="Project type" placeholder="Project type" />
                  <Textarea
                    aria-label="Project brief"
                    placeholder="Goal, references, brand assets, timeline."
                  />
                  <Button type="button" className="w-full bg-[#c8ff2e] text-black hover:bg-[#d8ff63] sm:w-fit">
                    Send inquiry
                    <Mail />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="border-t border-[#c8ff2e]/25 px-5 py-8 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-3xl leading-none text-white">
              SYNTHETIC VISION
            </p>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="border-[#c8ff2e]/35 bg-white/[0.03]">
                <a href="https://www.linkedin.com/in/aleem-ul-hassan/" target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-[#c8ff2e]/35 bg-white/[0.03]">
                <a href="https://www.instagram.com/storiesbyaleem" target="_blank" rel="noreferrer">
                  Instagram
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
