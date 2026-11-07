import { SiteHeader } from "@/components/marketing/site-header";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
