import { Calendar, CreditCard, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { subscription } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<typeof subscription.status, string> = {
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  trialing: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  past_due: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  canceled: "bg-red-500/10 text-red-400 border-red-500/20",
};

export function SubscriptionWidget() {
  const statusLabel =
    subscription.status === "active"
      ? "Active"
      : subscription.status === "trialing"
        ? "Trial"
        : subscription.status === "past_due"
          ? "Past due"
          : "Canceled";

  return (
    <Card className="border-white/[0.08] bg-white/[0.02]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Subscription</CardTitle>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
              statusStyles[subscription.status]
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {statusLabel}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-semibold tracking-tight">{subscription.plan}</span>
          <span className="text-sm text-muted-foreground">
            ${subscription.pricePerMonth}/mo · {subscription.seats} seats
          </span>
        </div>

        <dl className="mt-4 space-y-2.5 text-sm">
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> Renews
            </dt>
            <dd className="tabular-nums">{subscription.renewsOn}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="h-3.5 w-3.5" /> Payment
            </dt>
            <dd>{subscription.paymentMethod}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Video quota
            </dt>
            <dd className="tabular-nums">{subscription.videoQuotaMinutes} min / mo</dd>
          </div>
        </dl>

        <div className="mt-5 flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 text-sm">
            Manage plan
          </Button>
          <Button size="sm" className="flex-1 text-sm">
            Upgrade
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
