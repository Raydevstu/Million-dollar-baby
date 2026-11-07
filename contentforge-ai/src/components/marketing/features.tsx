import {
  BrainCircuit,
  Crop,
  CaptionsIcon,
  TrendingUp,
  Wand2,
  Share2,
} from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";

const features = [
  {
    icon: BrainCircuit,
    title: "Virality scoring",
    description:
      "Every moment is transcribed and scored by an AI editor trained on millions of high-retention shorts. You get a ranked queue, not a timeline to scrub.",
    accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Crop,
    title: "Smart 9:16 reframing",
    description:
      "Face-tracking keeps speakers centered and action in frame — auto-cropped to vertical with zero manual keyframing.",
    accent: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: CaptionsIcon,
    title: "Animated captions",
    description:
      "Word-perfect karaoke subtitles burned in with emoji, highlights, and brand fonts. 80% of shorts are watched muted — never lose a viewer.",
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: TrendingUp,
    title: "Hook rewriting",
    description:
      "AI rewrites the first 3 seconds with scroll-stopping hooks and titles tuned for each platform's algorithm.",
    accent: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  },
  {
    icon: Wand2,
    title: "One-click polish",
    description:
      "Jump cuts, zooms, b-roll suggestions, sound effects, and safe-zone-aware layouts applied automatically to every clip.",
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Share2,
    title: "Publish everywhere",
    description:
      "Export or schedule directly to TikTok, YouTube Shorts, Reels, and X — with per-platform aspect ratios and hashtags included.",
    accent: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Features"
          title={
            <>
              An entire editing team,{" "}
              <span className="text-zinc-500">compressed into one upload</span>
            </>
          }
          subtitle="Everything a $3k/month editor does — done in minutes, at a fraction of the cost."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.16] hover:bg-white/[0.04]"
            >
              <div
                className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${feature.accent}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[15px] font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
