import Link from "next/link";
import { Sparkles } from "lucide-react";

const columns = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Demo", "Changelog", "Roadmap"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Help center", "Clip playbook", "API docs", "Status"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Contact", "Affiliates"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "DPA", "Cookies"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08]">
      {/* CTA band */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-3xl rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your next viral clip is already in your last video.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-zinc-400 sm:text-base">
            Upload it. See for yourself in under five minutes — free forever plan, no card.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex h-12 items-center rounded-xl bg-white px-8 text-[15px] font-medium text-black shadow-[0_3px_10px_rgba(255,255,255,0.1)] transition hover:bg-white/90"
          >
            Start forging clips
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-black">
                <Sparkles className="h-4 w-4" />
              </span>
              ContentForge<span className="text-zinc-500">AI</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              The AI clip factory for creators. One long video in, fifty scroll-stopping shorts out.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} ContentForge AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs text-zinc-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
