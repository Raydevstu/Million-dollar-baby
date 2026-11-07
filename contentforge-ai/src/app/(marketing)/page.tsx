import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Demo } from "@/components/marketing/demo";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <FAQ />
      <SiteFooter />
    </>
  );
}
