import { Activity, CheckCircle2, Download, Film, Loader2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activity, type ActivityItem } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const kindIcon: Record<ActivityItem["kind"], React.ReactNode> = {
  export: <Download className="h-3.5 w-3.5" />,
  process: <Film className="h-3.5 w-3.5" />,
  billing: <CheckCircle2 className="h-3.5 w-3.5" />,
  system: <Activity className="h-3.5 w-3.5" />,
};

export function ActivityFeed() {
  return (
    <Card className="border-white/[0.08] bg-white/[0.02]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base font-semibold tracking-tight">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            Live activity
          </CardTitle>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Workers online
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {activity.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.04]"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5",
                  item.kind === "billing" ? "text-emerald-400" : "text-muted-foreground"
                )}
              >
                {kindIcon[item.kind]}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm">{item.text}</p>
                <p className="text-xs text-muted-foreground/70">{item.when}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-2 w-full rounded-lg border border-white/[0.08] py-2 text-xs text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-white">
          View all activity
        </button>
      </CardContent>
    </Card>
  );
}

// Re-export so the page can use XCircle for failed states without extra imports.
export { XCircle };
