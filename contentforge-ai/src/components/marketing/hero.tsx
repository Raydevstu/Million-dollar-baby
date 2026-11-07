import { ArrowRight, Play, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "50+", label: "Shorts per video" },
  { value: "4 min", label: "Average render time" },
  { value: "12k+", label: "Creators shipping daily" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_-10%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-20%] -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px] animate-pulse-glow" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge className="mb-6 animate-fade-up gap-2 border-white/10 bg-white/5 px-4 py-1.5 text-zinc-300">
            <Sparkles className="h-3 w-3 text-indigo-400" />
            AI clip engine — now with karaoke captions
            <ArrowRight className="h-3 w-3" />
          </Badge>

          <h1 className="animate-fade-up text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white [animation-delay:100ms] sm:text-6xl md:text-7xl">
            Turn One Video Into{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              50 Viral Shorts
            </span>{" "}
            In Minutes
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-pretty text-base leading-relaxed text-zinc-400 [animation-delay:200ms] sm:text-lg">
            Upload a long video. ContentForge AI finds your most viral moments, reframes
            them to 9:16, burns in animated captions, and exports ready-to-post clips —
            while you grab coffee.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col items-center gap-3 [animation-delay:300ms] sm:flex-row">
            <Button size="xl" className="group">
              Start free — no card required
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="xl">
              <Play className="h-4 w-4 fill-current" />
              Watch 60s demo
            </Button>
          </div>

          <div className="mt-6 flex animate-fade-up items-center gap-4 text-xs text-zinc-500 [animation-delay:400ms]">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Free plan forever
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" /> 4K exports
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Cancel anytime
            </span>
          </div>
        </div>

        {/* Product mock */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up [animation-delay:500ms]">
          <div className="absolute inset-x-24 top-8 -z-10 h-40 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 hidden truncate rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-500 sm:block">
                app.contentforge.ai/projects/podcast-ep-42
              </span>
            </div>

            <div className="grid gap-0 md:grid-cols-[1fr_320px]">
              {/* timeline side */}
              <div className="border-b border-white/[0.06] p-5 md:border-b-0 md:border-r sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Podcast — Episode 42</p>
                    <p className="text-xs text-zinc-500">58:12 · Transcribed &amp; scored</p>
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    50 clips ready
                  </span>
                </div>
                <div className="relative h-16 overflow-hidden rounded-lg border border-white/10 bg-black/40">
                  <div className="absolute inset-y-0 left-[8%] w-[14%] rounded-md border border-indigo-400/40 bg-indigo-500/20" />
                  <div className="absolute inset-y-0 left-[28%] w-[10%] rounded-md border border-sky-400/40 bg-sky-500/20" />
                  <div className="absolute inset-y-0 left-[46%] w-[18%] rounded-md border border-emerald-400/40 bg-emerald-500/20" />
                  <div className="absolute inset-y-0 left-[72%] w-[12%] rounded-md border border-fuchsia-400/40 bg-fuchsia-500/20" />
                  <div className="flex h-full items-end gap-[3px] px-2 pb-1 opacity-40">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-full rounded-sm bg-zinc-600"
                        style={{ height: `${20 + Math.abs(Math.sin(i * 1.7)) * 70}%` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-500">
                  AI detected 50 high-retention moments ranked by virality score.
                </p>
              </div>

              {/* clips grid */}
              <div className="grid grid-cols-3 gap-2 bg-black/20 p-4 sm:p-5">
                {[
                  { s: "98", c: "from-indigo-500/30" },
                  { s: "95", c: "from-sky-500/30" },
                  { s: "92", c: "from-emerald-500/30" },
                  { s: "89", c: "from-fuchsia-500/30" },
                  { s: "87", c: "from-amber-500/30" },
                  { s: "84", c: "from-rose-500/30" },
                ].map((clip, i) => (
                  <div
                    key={i}
                    className={`relative aspect-[9/16] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b ${clip.c} to-black/60`}
                  >
                    <span className="absolute left-1.5 top-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {clip.s}
                    </span>
                    <span className="absolute bottom-1.5 left-1.5 right-1.5 truncate rounded bg-white/10 px-1 py-0.5 text-center text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur">
                      hot take ✦
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        <dl className="mx-auto mt-14 grid max-w-3xl animate-fade-up grid-cols-3 gap-4 text-center [animation-delay:650ms]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
