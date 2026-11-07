import { SectionHeader } from "@/components/marketing/section-header";

const faqs = [
  {
    q: "How is this different from CapCut or Descript?",
    a: "Those are editing tools — you still do the work. ContentForge AI is an autonomous clip engine: it finds the moments, scores them for virality, reframes, captions, and exports without a timeline. You review, not edit.",
  },
  {
    q: "What video lengths and formats are supported?",
    a: "MP4, MOV, WebM up to 2 GB and 4 hours. You can also paste links from YouTube, Zoom Cloud Recordings, Google Drive, and most podcast hosts.",
  },
  {
    q: "How long does processing take?",
    a: "A one-hour video typically finishes in 4–6 minutes: transcription, scoring, reframing, captioning, and rendering all run in parallel on our GPU queue.",
  },
  {
    q: "Will the clips actually go viral?",
    a: "No tool can guarantee that — but every clip is ranked by a virality score trained on millions of high-retention shorts, with hooks tuned per platform. Creators on average see 3–5x more views per hour of content they publish.",
  },
  {
    q: "Do I own the output?",
    a: "Yes. Everything you export is 100% yours, commercial use included. We never claim rights to your footage or clips.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel in one click from billing settings. You keep access until the end of your billing period and retain every clip you've exported.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" />

        <div className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-white [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition group-open:border-white/30 group-open:text-white">
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-3 max-w-xl pr-10 text-sm leading-relaxed text-zinc-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Still curious?{" "}
          <a href="mailto:hello@contentforge.ai" className="text-white underline-offset-4 hover:underline">
            Talk to a human →
          </a>
        </p>
      </div>
    </section>
  );
}
