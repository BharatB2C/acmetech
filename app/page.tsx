import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ServiceWordPress from "@/components/sections/ServiceWordPress";
import ServiceShopify from "@/components/sections/ServiceShopify";
import ServiceCustomDev from "@/components/sections/ServiceCustomDev";
import Portfolio from "@/components/sections/Portfolio";
import Products from "@/components/sections/Products";
import TechStack from "@/components/sections/TechStack";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <ServiceWordPress />
      <ServiceShopify />
      <ServiceCustomDev />
      <Portfolio />
      <Products />
      <TechStack />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
