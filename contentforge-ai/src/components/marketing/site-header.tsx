import Link from "next/link";
import { Sparkles, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg text-[15px] font-semibold tracking-tight text-white"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-black">
            <Sparkles className="h-4 w-4" />
          </span>
          ContentForge<span className="text-zinc-500">AI</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">Start free</Button>
        </div>

        <button
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 md:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl" />
    </header>
  );
}
