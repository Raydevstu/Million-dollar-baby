import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/marketing/section-header";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Kick the tires. Perfect for testing your first video.",
    cta: "Start free",
    variant: "outline" as const,
    featured: false,
    features: [
      "3 videos / month",
      "10 clips per video",
      "720p exports with watermark",
      "Auto captions (5 styles)",
      "Community support",
    ],
  },
  {
    name: "Creator",
    price: "$29",
    period: "/mo",
    description: "For solo creators posting daily across platforms.",
    cta: "Start 7-day trial",
    variant: "default" as const,
    featured: true,
    features: [
      "Unlimited videos",
      "50 clips per video",
      "1080p exports, no watermark",
      "Karaoke captions + brand fonts",
      "Hook rewriting AI",
      "Direct publishing to 4 platforms",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "For agencies and teams shipping client content at scale.",
    cta: "Start 7-day trial",
    variant: "outline" as const,
    featured: false,
    features: [
      "Everything in Creator",
      "4K exports + per-platform ratios",
      "Team workspace (5 seats)",
      "White-label clip templates",
      "API access + webhooks",
      "Priority render queue",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Simple pricing. <span className="text-zinc-500">Serious ROI.</span>
            </>
          }
          subtitle="One editor costs $3,000/month. ContentForge costs less than your lunch budget."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                plan.featured
                  ? "border-white/20 bg-white/[0.05] shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]"
                  : "border-white/[0.08] bg-white/[0.02]"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black px-3 py-1 text-xs font-medium text-white">
                  <Sparkles className="h-3 w-3 text-indigo-400" />
                  Most popular
                </span>
              )}

              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-zinc-500">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{plan.description}</p>

              <Button variant={plan.variant} className="mt-6 w-full" size="lg">
                {plan.cta}
              </Button>

              <ul className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.featured ? "text-white" : "text-zinc-500"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Prices in USD. Annual billing saves 20%. Cancel anytime — keep every clip you exported.
        </p>
      </div>
    </section>
  );
}
