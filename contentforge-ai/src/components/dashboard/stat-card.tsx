import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkline } from "@/components/dashboard/sparkline";
import { cn } from "@/lib/utils";
import type { StatSummary } from "@/lib/dashboard-data";

interface StatCardProps {
  stat: StatSummary;
  icon: React.ReactNode;
  /** A "down" trend that is good (e.g. fewer failed jobs) */
  invertTrend?: boolean;
}

export function StatCard({ stat, icon, invertTrend = false }: StatCardProps) {
  const positive = stat.trend === "up" ? !invertTrend : invertTrend;

  return (
    <Card className="group relative overflow-hidden border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/20">
      {/* soft hover glow */}
      <div className="pointer-events-none absolute -top-12 right-0 h-24 w-24 rounded-full bg-white/[0.06] blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">
            {icon}
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
              positive ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
            )}
          >
            {stat.trend === "up" ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {stat.delta}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-2">
          <div>
            <p className="text-2xl font-semibold tracking-tight tabular-nums">{stat.display}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
          <Sparkline data={stat.spark} className={positive ? "text-emerald-400/80" : "text-red-400/80"} />
        </div>

        <p className="mt-3 text-[11px] uppercase tracking-wide text-muted-foreground/70">
          {stat.delta} {stat.comparisonLabel}
        </p>
      </CardContent>
    </Card>
  );
}
