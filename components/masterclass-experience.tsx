"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  CalendarDays,
  Check,
  Crown,
  Lock,
  MessageSquare,
  Play,
  Trophy,
  Users,
} from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Member = {
  email: string;
  name: string;
  plan: string;
};

const plans = [
  {
    name: "Starter",
    price: "$49",
    note: "monthly",
    description: "Community, weekly prompts, and replay access.",
    features: ["Private community", "Weekly prompt drops", "Replay library"],
  },
  {
    name: "Masterclass",
    price: "$297",
    note: "one time",
    description: "Full classroom, critiques, templates, and live sessions.",
    features: ["Full curriculum", "Live critique rooms", "Prompt vault"],
    featured: true,
  },
  {
    name: "Studio",
    price: "$799",
    note: "cohort",
    description: "Hands-on brand film buildout and portfolio polish.",
    features: ["Portfolio review", "Brand asset system", "Launch plan"],
  },
];

const lessons = [
  ["01", "AI UGC Fundamentals", "Hooks, angles, and realistic creator framing."],
  ["02", "Character Consistency", "Keep faces, outfits, logos, and tone locked."],
  ["03", "Prompt Direction", "Build cinematic prompts that survive iteration."],
  ["04", "Post Workflow", "Edit, grade, pace, and polish for publishing."],
];

const leaderboard = [
  ["Maya", "18 wins"],
  ["Hassan", "14 wins"],
  ["Noor", "11 wins"],
];

export function MasterclassExperience() {
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [selectedPlan, setSelectedPlan] = useState("Masterclass");
  const [member, setMember] = useState<Member | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const saved = window.localStorage.getItem("synthetic-visuals-member");

    return saved ? JSON.parse(saved) : null;
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([
    "Dropped a 12-shot UGC sequence today. Need feedback on consistency.",
    "Prompt win: product logo stayed locked across three edits.",
  ]);
  const [completedLessons, setCompletedLessons] = useState<string[]>(["01"]);

  const selectedPlanData = useMemo(
    () => plans.find((plan) => plan.name === selectedPlan) ?? plans[1],
    [selectedPlan],
  );

  const handleAuth = () => {
    const nextMember = {
      email,
      name: name || email.split("@")[0] || "Member",
      plan: selectedPlan,
    };

    setMember(nextMember);
    window.localStorage.setItem(
      "synthetic-visuals-member",
      JSON.stringify(nextMember),
    );
  };

  const addPost = () => {
    if (!post.trim()) {
      return;
    }

    setPosts([post.trim(), ...posts]);
    setPost("");
  };

  const toggleLesson = (lessonNumber: string) => {
    setCompletedLessons((current) =>
      current.includes(lessonNumber)
        ? current.filter((item) => item !== lessonNumber)
        : [...current, lessonNumber],
    );
  };

  return (
    <main className="min-h-screen bg-[#03070a] p-2 text-[#f7f9f0] sm:p-3">
      <div className="edge-lines" />
      <div className="scroll-glow" />
      <section className="mx-auto min-h-screen overflow-hidden rounded-lg bg-[#03070a] shadow-2xl">
        <div className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_10%,rgba(200,255,46,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
          <div className="relative z-10">
            <header className="flex items-center justify-between">
              <BrandLogo />
              {member ? (
                <div className="rounded-md border border-[#c8ff2e]/35 bg-[#c8ff2e]/10 px-4 py-2 text-sm font-semibold text-[#c8ff2e]">
                  {member.name}
                </div>
              ) : (
                <Button
                  size="sm"
                  className="bg-[#c8ff2e] text-black hover:bg-[#d8ff63]"
                  onClick={() => setMode("signup")}
                >
                  Join Now
                </Button>
              )}
            </header>

            <div className="mx-auto grid max-w-6xl gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
              <div>
                <p className="text-sm font-semibold uppercase text-[#c8ff2e]">
                  AI Content Masterclass
                </p>
                <h1 className="mt-4 font-display text-7xl leading-none text-white sm:text-8xl">
                  Build AI videos that look locked, branded, and cinematic.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
                  Learn the Synthetic Visuals workflow for UGC ads, consistent
                  AI characters, brand-safe DVCs, and post-production polish.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#pricing"
                    className="rounded-md bg-[#c8ff2e] px-5 py-3 text-sm font-bold text-black"
                  >
                    View Pricing
                  </a>
                  <a
                    href="#classroom"
                    className="rounded-md border border-[#c8ff2e]/45 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white"
                  >
                    See Curriculum
                  </a>
                </div>
              </div>

              <Card className="border-white/10 bg-white/[0.04]">
                <CardHeader>
                  <CardTitle className="font-display text-5xl leading-none">
                    {member ? "Member dashboard" : "Create your account"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {!member ? (
                    <>
                      <div className="flex rounded-md border border-white/10 bg-black/25 p-1">
                        {(["signup", "signin"] as const).map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setMode(item)}
                            className={`flex-1 rounded px-3 py-2 text-sm font-semibold capitalize ${
                              mode === item
                                ? "bg-[#c8ff2e] text-black"
                                : "text-white/65"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      {mode === "signup" ? (
                        <Input
                          aria-label="Name"
                          placeholder="Name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      ) : null}
                      <Input
                        aria-label="Email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <Button
                        type="button"
                        onClick={handleAuth}
                        disabled={!email}
                        className="bg-[#c8ff2e] text-black hover:bg-[#d8ff63]"
                      >
                        {mode === "signup" ? "Join Masterclass" : "Sign In"}
                      </Button>
                    </>
                  ) : (
                    <>
                      <p className="text-white/60">
                        You are on the{" "}
                        <span className="font-semibold text-[#c8ff2e]">
                          {member.plan}
                        </span>{" "}
                        plan.
                      </p>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {["Classroom", "Community", "Calendar"].map((item) => (
                          <div
                            key={item}
                            className="rounded-md border border-white/10 bg-black/25 p-3 text-sm font-semibold"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <section
          id="pricing"
          className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase text-[#c8ff2e]">
              Pricing
            </p>
            <h2 className="mt-2 font-display text-6xl leading-none text-white sm:text-7xl">
              Choose your access.
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`rounded-lg border p-5 text-left transition ${
                    selectedPlan === plan.name
                      ? "border-[#c8ff2e] bg-[#c8ff2e] text-black"
                      : "border-white/10 bg-white/[0.04] text-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-4xl leading-none">
                      {plan.name}
                    </h3>
                    {plan.featured ? <Crown className="size-5" /> : null}
                  </div>
                  <p className="mt-5 text-5xl font-bold">
                    {plan.price}
                    <span className="ml-2 text-sm font-semibold opacity-65">
                      {plan.note}
                    </span>
                  </p>
                  <p className="mt-4 text-sm opacity-70">{plan.description}</p>
                  <div className="mt-5 grid gap-2">
                    {plan.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-sm font-semibold"
                      >
                        <Check className="size-4" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/45">
              Selected: {selectedPlanData.name}. Payments are ready for gateway
              integration when you choose your checkout provider.
            </p>
          </div>
        </section>

        <section
          id="classroom"
          className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-white/10 bg-white/[0.04]">
              <CardHeader>
                <CardTitle className="font-display text-6xl leading-none">
                  Classroom
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {lessons.map(([number, title, description]) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => toggleLesson(number)}
                    className="flex items-center gap-4 rounded-md border border-white/10 bg-black/25 p-4 text-left"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full border border-[#c8ff2e]/45 text-[#c8ff2e]">
                      {completedLessons.includes(number) ? (
                        <Check className="size-5" />
                      ) : (
                        <Play className="size-4 fill-current" />
                      )}
                    </span>
                    <span>
                      <span className="font-display text-3xl leading-none text-white">
                        {title}
                      </span>
                      <span className="mt-1 block text-sm text-white/50">
                        {description}
                      </span>
                    </span>
                  </button>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Card className="border-white/10 bg-[#c8ff2e] text-black">
                <CardHeader>
                  <Users className="mb-4 size-7" />
                  <CardTitle className="font-display text-5xl leading-none">
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Textarea
                    aria-label="Community post"
                    placeholder="Share a prompt win, question, or WIP..."
                    value={post}
                    onChange={(event) => setPost(event.target.value)}
                    className="border-black/10 bg-black/10 text-black placeholder:text-black/45"
                  />
                  <Button
                    type="button"
                    onClick={addPost}
                    className="bg-black text-[#c8ff2e] hover:bg-black/80"
                  >
                    Post to community
                    <MessageSquare />
                  </Button>
                  {posts.map((item) => (
                    <p
                      key={item}
                      className="rounded-md border border-black/10 bg-black/10 p-3 text-sm font-medium"
                    >
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-[#c8ff2e]/25 px-5 py-14 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/[0.04]">
              <CardHeader>
                <CalendarDays className="mb-4 size-7 text-[#c8ff2e]" />
                <CardTitle className="font-display text-4xl leading-none">
                  Live Calendar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/55">
                Weekly live critique, prompt labs, and replay drops.
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/[0.04]">
              <CardHeader>
                <Trophy className="mb-4 size-7 text-[#c8ff2e]" />
                <CardTitle className="font-display text-4xl leading-none">
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                {leaderboard.map(([person, wins]) => (
                  <p
                    key={person}
                    className="flex justify-between rounded-md bg-white/[0.04] px-3 py-2 text-sm"
                  >
                    <span>{person}</span>
                    <span className="text-[#c8ff2e]">{wins}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/[0.04]">
              <CardHeader>
                <Lock className="mb-4 size-7 text-[#c8ff2e]" />
                <CardTitle className="font-display text-4xl leading-none">
                  Resource Vault
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-white/55">
                <p className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-[#c8ff2e]" />
                  Prompt packs
                </p>
                <p className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-[#c8ff2e]" />
                  Shot lists
                </p>
                <p className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-[#c8ff2e]" />
                  Brand consistency checklists
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </main>
  );
}
