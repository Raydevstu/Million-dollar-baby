import { Upload, BrainCircuit, Scissors, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload or paste a link",
    description:
      "Drop an MP4, or paste a YouTube / Zoom / podcast link. Up to 4 hours and 2 GB per video.",
  },
  {
    icon: BrainCircuit,
    step: "02",
    title: "AI finds the gold",
    description:
      "Transcription, virality scoring, and moment selection run in parallel. Minutes later you have a ranked clip queue.",
  },
  {
    icon: Scissors,
    step: "03",
    title: "Review & tweak",
    description:
      "Swap captions, adjust reframing, change hooks. Everything is editable — nothing is locked in a black box.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Export & post",
    description:
      "Download 9:16 MP4s in up to 4K, or schedule straight to TikTok, Shorts, Reels, and X.",
  },
];

export function Demo() {
  return (
    <section id="demo" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[400px] max-w-4xl -translate-y-1/2 rounded-full bg-sky-500/[0.07] blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Demo"
          title={
            <>
              From raw footage to posted shorts{" "}
              <span className="text-zinc-500">in four steps</span>
            </>
          }
          subtitle="Watch a 58-minute podcast become 50 ready-to-post clips before your coffee cools."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative rounded-xl border border-white/[0.08] bg-white/[0.02] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold tabular-nums text-zinc-600">
                  {s.step}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-gradient-to-r from-white/25 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>

        {/* Before / after panel */}
        <div className="glass mt-12 overflow-hidden rounded-2xl">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/[0.06] p-8 md:border-b-0 md:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Before · 1 long video
              </p>
              <div className="mt-5 aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-zinc-800 to-black">
                <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                  podcast_ep42_final_v3.mp4 · 58:12
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
        One upload. That&apos;s the entire input.
              </p>
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                After · 50 viral shorts
              </p>
              <div className="mt-5 flex gap-2 overflow-hidden">
                {[
                  "from-indigo-500/40",
                  "from-sky-500/40",
                  "from-emerald-500/40",
                  "from-fuchsia-500/40",
                  "from-amber-500/40",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`aspect-[9/16] w-full shrink-0 overflow-hidden rounded-md border border-white/10 bg-gradient-to-b ${c} to-black`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Ranked by virality score, captioned, reframed, and ready to publish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
