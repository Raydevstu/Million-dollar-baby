import {
  BarChart3,
  Bell,
  CreditCard,
  Film,
  FolderOpen,
  LayoutDashboard,
  Search,
  Settings,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard, active: true },
  { label: "Videos", href: "#videos", icon: FolderOpen },
  { label: "Clips", href: "#clips", icon: Film },
  { label: "Analytics", href: "#analytics", icon: BarChart3 },
  { label: "Team", href: "#team", icon: Users },
  { label: "Billing", href: "#billing", icon: CreditCard },
  { label: "Settings", href: "#settings", icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar — hidden below lg */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-white/[0.08] bg-black/40 px-4 py-5 lg:flex">
        <a href="/" className="flex items-center gap-2 px-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
            <Zap className="h-4 w-4" />
          </span>
          ContentForge<span className="text-muted-foreground">AI</span>
        </a>

        <nav className="mt-8 flex-1 space-y-1">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                item.active
                  ? "bg-white/[0.07] font-medium text-white"
                  : "text-muted-foreground hover:bg-white/[0.04] hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
          <p className="text-sm font-medium">Free trial ending</p>
          <p className="mt-1 text-xs text-muted-foreground">Upgrade to keep 50 clips / video.</p>
          <Button size="sm" className="mt-3 w-full">
            Upgrade plan
          </Button>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-white/[0.08] bg-background/80 px-4 backdrop-blur-xl sm:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight lg:hidden">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-black">
              <Zap className="h-3.5 w-3.5" />
            </span>
            ContentForge
          </a>
          <div className="relative hidden max-w-xs flex-1 sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search videos…"
              className="h-8 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-8 pr-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-white/25"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </button>
            <Button size="sm">
              <Upload className="h-3.5 w-3.5" /> New video
            </Button>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/20 to-white/5 text-xs font-semibold">
              JD
            </span>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
