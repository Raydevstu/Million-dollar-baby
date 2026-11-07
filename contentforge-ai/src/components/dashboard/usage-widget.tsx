import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usageThisMonth, subscription, minutesConsumed } from "@/lib/dashboard-data";

/**
 * Monthly usage widget: quota progress bars + a CSS bar chart of daily
 * processing minutes for the current UTC month. Pure server component.
 */
export function UsageWidget() {
  const max = Math.max(...usageThisMonth.map((b) => b.seconds));
  const usedMinutes = minutesConsumed.value; // 342
  const minutePct = Math.min(100, Math.round((usedMinutes / subscription.videoQuotaMinutes) * 100));

  const exportsUsed = 184; // mock — would come from `clips` joined to export events
  const exportPct = Math.min(100, Math.round((exportsUsed / subscription.exportQuota) * 100));

  return (
    <Card className="border-white/[0.08] bg-white/[0.02]">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-base font-semibold tracking-tight">Monthly usage</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">November 2026 · resets Dec 1</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground">
          Last 30 days
        </span>
      </CardHeader>

      <CardContent>
        {/* Quota meters */}
        <div className="space-y-4">
          <Meter label="Processing minutes" used={`${usedMinutes}`} total={`${subscription.videoQuotaMinutes} min`} pct={minutePct} />
          <Meter label="Exports" used={`${exportsUsed}`} total={`${subscription.exportQuota}`} pct={exportPct} warn={exportPct > 90} />
        </div>

        {/* Daily bar chart */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Minutes processed per day</span>
            <span className="tabular-nums">peak {max} min</span>
          </div>
          <div
            role="img"
            aria-label={`Bar chart of daily processing minutes over the last 30 days, peaking at ${max} minutes`}
            className="flex h-24 items-end gap-[3px] sm:gap-1"
          >
            {usageThisMonth.map((b) => (
              <div
                key={b.day}
                title={`${b.day}: ${b.seconds} min`}
                style={{ height: `${Math.max(4, (b.seconds / max) * 100)}%` }}
                className="min-w-0 flex-1 rounded-sm bg-gradient-to-b from-white/70 to-white/25 transition-colors hover:from-white hover:to-white/60"
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[11px] tabular-nums text-muted-foreground/70">
            <span>Nov 1</span>
            <span>Nov 10</span>
            <span>Nov 20</span>
            <span>Nov 30</span>
          </div>
        </div>

        <p className="mt-5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-muted-foreground">
          You&apos;ve used <span className="font-medium text-white">{minutePct}%</span> of your monthly
          minutes with 9 days left.{" "}
          <a href="/#pricing" className="text-white underline underline-offset-4 hover:text-white/80">
            Upgrade for more →
          </a>
        </p>
      </CardContent>
    </Card>
  );
}

function Meter({
  label,
  used,
  total,
  pct,
  warn = false,
}: {
  label: string;
  used: string;
  total: string;
  pct: number;
  warn?: boolean;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="tabular-nums">
          <span className="font-semibold text-white">{used}</span>
          <span className="text-muted-foreground"> / {total}</span>
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={`h-full rounded-full transition-all ${warn ? "bg-amber-400" : "bg-white"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
