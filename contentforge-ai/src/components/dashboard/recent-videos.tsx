import { ArrowRight, CheckCircle2, Clock, Film, Loader2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentVideos, type RecentVideo } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const statusMeta: Record<
  RecentVideo["status"],
  { label: string; className: string; icon: React.ReactNode }
> = {
  ready: {
    label: "Ready",
    className: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    icon: <CheckCircle2 className="h-3 w-3" />,
  },
  processing: {
    label: "Processing",
    className: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    icon: <Loader2 className="h-3 w-3 animate-spin" />,
  },
  queued: {
    label: "Queued",
    className: "text-muted-foreground bg-white/5 border-white/10",
    icon: <Clock className="h-3 w-3" />,
  },
  failed: {
    label: "Failed",
    className: "text-red-400 bg-red-500/10 border-red-500/20",
    icon: <XCircle className="h-3 w-3" />,
  },
};

export function RecentVideos() {
  return (
    <Card className="border-white/[0.08] bg-white/[0.02]">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2 text-base font-semibold tracking-tight">
            <Film className="h-4 w-4 text-muted-foreground" />
            Recent videos
          </CardTitle>
        </div>
        <a
          href="#videos"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-white"
        >
          View all <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </CardHeader>

      <CardContent className="px-0 pb-0">
        {/* Desktop table */}
        <table className="hidden w-full text-sm md:table">
          <thead>
            <tr className="border-y border-white/[0.08] text-left text-xs uppercase tracking-wide text-muted-foreground/70">
              <th className="px-6 py-2.5 font-medium">Video</th>
              <th className="px-3 py-2.5 font-medium">Duration</th>
              <th className="px-3 py-2.5 font-medium">Clips</th>
              <th className="px-3 py-2.5 font-medium">Top score</th>
              <th className="px-3 py-2.5 font-medium">Status</th>
              <th className="px-6 py-2.5 text-right font-medium">Added</th>
            </tr>
          </thead>
          <tbody>
            {recentVideos.map((v) => {
              const s = statusMeta[v.status];
              return (
                <tr key={v.name} className="border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03]">
                  <td className="max-w-[280px] px-6 py-3">
                    <p className="truncate font-medium">{v.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{v.source}</p>
                  </td>
                  <td className="px-3 py-3 tabular-nums text-muted-foreground">{v.durationMin} min</td>
                  <td className="px-3 py-3 tabular-nums">{v.clips > 0 ? v.clips : "—"}</td>
                  <td className="px-3 py-3">
                    {v.topScore !== null ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="tabular-nums font-medium">{v.topScore}</span>
                        <span className="h-1.5 w-14 overflow-hidden rounded-full bg-white/[0.08]">
                          <span className="block h-full rounded-full bg-emerald-400" style={{ width: `${v.topScore}%` }} />
                        </span>
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    <span className={cn("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs", s.className)}>
                      {s.icon}
                      {s.label}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right text-xs text-muted-foreground">{v.when}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Mobile cards */}
        <ul className="space-y-2 px-4 pb-4 md:hidden">
          {recentVideos.map((v) => {
            const s = statusMeta[v.status];
            return (
              <li key={v.name} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{v.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {v.source} · {v.durationMin} min
                    </p>
                  </div>
                  <span className={cn("inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs", s.className)}>
                    {s.icon}
                    {s.label}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{v.clips > 0 ? `${v.clips} clips` : v.topScore === null ? "No clips yet" : ""}</span>
                  <span>{v.when}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
