import { Clock, Download, Film, Gauge, Timer, Zap } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { SubscriptionWidget } from "@/components/dashboard/subscription-widget";
import { UsageWidget } from "@/components/dashboard/usage-widget";
import { RecentVideos } from "@/components/dashboard/recent-videos";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { Button } from "@/components/ui/button";
import {
  avgVirality,
  exportsGenerated,
  failedJobs,
  minutesConsumed,
  videosProcessed,
} from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl animate-fade-up">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Overview</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back, Jordan — here&apos;s how November is trending.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            Last 30 days
          </Button>
          <Button size="sm">
            <Film className="h-3.5 w-3.5" /> Process a video
          </Button>
        </div>
      </div>

      {/* KPI stat cards + subscription — 1 col mobile, 2 col tablet, 3 col desktop */}
      <section aria-label="Key metrics" className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard stat={videosProcessed} icon={<Film />} />
        <StatCard stat={minutesConsumed} icon={<Timer />} />
        <StatCard stat={exportsGenerated} icon={<Download />} />
        <StatCard stat={avgVirality} icon={<Gauge />} />
        <StatCard stat={failedJobs} icon={<Zap />} invertTrend />
        <SubscriptionWidget />
      </section>

      {/* Monthly usage + live activity */}
      <section aria-label="Usage and activity" className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UsageWidget />
        </div>
        <ActivityFeed />
      </section>

      {/* Recent videos */}
      <section aria-label="Recent videos" id="videos" className="mt-4">
        <RecentVideos />
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3 w-3" /> Data refreshed just now · UTC billing month
        </span>
        <a href="/" className="transition-colors hover:text-white">
          ← Back to site
        </a>
      </footer>
    </div>
  );
}
