// Mock data layer for the dashboard. Swap these getters for real queries
// (e.g. Postgres `usage_monthly`, `videos`, `clips` tables) when wiring the API.

export type Trend = "up" | "down";

export interface StatSummary {
  label: string;
  value: number;
  unit?: string;
  display: string; // formatted current value
  delta: string; // e.g. "+12.4%"
  trend: Trend;
  comparisonLabel: string; // e.g. "vs. last month"
  spark: number[]; // sparkline points
}

export interface UsageBucket {
  day: string; // short label
  seconds: number; // minutes processed that day
}

export const subscription = {
  plan: "Creator",
  status: "active" as "active" | "trialing" | "past_due" | "canceled",
  pricePerMonth: 29,
  renewsOn: "Dec 15, 2026",
  seats: 3,
  paymentMethod: "Visa •••• 4242",
  videoQuotaMinutes: 600, // monthly processing quota
  exportQuota: 300, // monthly export quota
};

export const videosProcessed: StatSummary = {
  label: "Videos processed",
  value: 128,
  display: "128",
  delta: "+18.2%",
  trend: "up",
  comparisonLabel: "vs. last month",
  spark: [4, 7, 6, 9, 12, 10, 14, 13, 17, 16, 21, 24],
};

export const minutesConsumed: StatSummary = {
  label: "Minutes consumed",
  value: 342,
  unit: "min",
  display: "342 min",
  delta: "+9.6%",
  trend: "up",
  comparisonLabel: "vs. last month",
  spark: [12, 18, 15, 22, 20, 28, 26, 34, 30, 38, 42, 45],
};

export const exportsGenerated: StatSummary = {
  label: "Exports generated",
  value: 1847,
  display: "1,847",
  delta: "+24.5%",
  trend: "up",
  comparisonLabel: "vs. last month",
  spark: [60, 72, 68, 90, 105, 98, 130, 142, 150, 171, 190, 214],
};

export const avgVirality: StatSummary = {
  label: "Avg. virality score",
  value: 82,
  display: "82",
  delta: "+3.1%",
  trend: "up",
  comparisonLabel: "vs. last month",
  spark: [70, 72, 71, 75, 74, 78, 77, 80, 79, 81, 82, 84],
};

export const failedJobs: StatSummary = {
  label: "Failed jobs",
  value: 3,
  display: "3",
  delta: "-40.0%",
  trend: "down",
  comparisonLabel: "vs. last month",
  spark: [9, 8, 10, 7, 6, 7, 5, 6, 4, 5, 3, 3],
};

export const usageThisMonth: UsageBucket[] = [
  { day: "Nov 1", seconds: 42 },
  { day: "Nov 2", seconds: 68 },
  { day: "Nov 3", seconds: 55 },
  { day: "Nov 4", seconds: 90 },
  { day: "Nov 5", seconds: 74 },
  { day: "Nov 6", seconds: 30 },
  { day: "Nov 7", seconds: 18 },
  { day: "Nov 8", seconds: 96 },
  { day: "Nov 9", seconds: 110 },
  { day: "Nov 10", seconds: 88 },
  { day: "Nov 11", seconds: 120 },
  { day: "Nov 12", seconds: 64 },
  { day: "Nov 13", seconds: 22 },
  { day: "Nov 14", seconds: 15 },
  { day: "Nov 15", seconds: 102 },
  { day: "Nov 16", seconds: 130 },
  { day: "Nov 17", seconds: 118 },
  { day: "Nov 18", seconds: 140 },
  { day: "Nov 19", seconds: 96 },
  { day: "Nov 20", seconds: 40 },
  { day: "Nov 21", seconds: 28 },
  { day: "Nov 22", seconds: 132 },
  { day: "Nov 23", seconds: 150 },
  { day: "Nov 24", seconds: 126 },
  { day: "Nov 25", seconds: 160 },
  { day: "Nov 26", seconds: 142 },
  { day: "Nov 27", seconds: 60 },
  { day: "Nov 28", seconds: 48 },
  { day: "Nov 29", seconds: 168 },
  { day: "Nov 30", seconds: 176 },
];

export interface RecentVideo {
  name: string;
  source: string;
  durationMin: number;
  clips: number;
  status: "ready" | "processing" | "queued" | "failed";
  topScore: number | null;
  when: string;
}

export const recentVideos: RecentVideo[] = [
  {
    name: "Podcast Ep. 142 — Retention Loops",
    source: "YouTube link",
    durationMin: 58,
    clips: 47,
    status: "ready",
    topScore: 94,
    when: "2 hours ago",
  },
  {
    name: "Q3 Founder Update (Webinar)",
    source: "Upload · Zoom",
    durationMin: 72,
    clips: 50,
    status: "ready",
    topScore: 88,
    when: "Yesterday",
  },
  {
    name: "Interview — Growth Loops w/ Maya",
    source: "Upload · MP4",
    durationMin: 41,
    clips: 12,
    status: "processing",
    topScore: null,
    when: "12 min ago",
  },
  {
    name: "Product Launch Keynote",
    source: "Google Drive",
    durationMin: 26,
    clips: 0,
    status: "queued",
    topScore: null,
    when: "Just now",
  },
  {
    name: "AMA — Pricing Deep Dive",
    source: "YouTube link",
    durationMin: 95,
    clips: 0,
    status: "failed",
    topScore: null,
    when: "3 hours ago",
  },
];

export interface ActivityItem {
  text: string;
  when: string;
  kind: "export" | "process" | "billing" | "system";
}

export const activity: ActivityItem[] = [
  { text: "Exported 24 shorts from “Podcast Ep. 142”", when: "8 min ago", kind: "export" },
  { text: "Auto-published 6 clips to TikTok + Shorts", when: "32 min ago", kind: "system" },
  { text: "“Q3 Founder Update” finished processing", when: "1 hr ago", kind: "process" },
  { text: "Invoice #4821 paid — $29.00", when: "Nov 22", kind: "billing" },
  { text: "New team member invited (editor@…)", when: "Nov 21", kind: "billing" },
];
