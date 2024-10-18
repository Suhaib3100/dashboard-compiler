"use client";
import Header from "./header";
import ShowCase from "./showcase";
import Hero from "./hero";
import ColorSchemas from "./color-schemas";
import ProjectTools from "./project-tools";
import AllComponents from "./all-components";
import FigmaKit from "./figma-kit";
import CustomProject from "./custom-project";
import { useMounted } from "@/hooks/use-mounted";
import LayoutLoader from "@/components/layout-loader";
import AboutDashtail from "./about-dashtail";
import Faq from "./faq";
import PricingPlan from "./pricing-plan";
import AboutUs from "./about-us"
import Stats from "./stats"
import Contact from "./contact"
import Footer from "./footer";
const LandingPageView = () => {
  const mounted = useMounted();
  if (!mounted) {
    return <LayoutLoader />;
  }
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <Stats />
      <AllComponents />
      <ShowCase />
      <ColorSchemas />
      <ProjectTools />
      <FigmaKit />
      <AboutUs />
      <AboutDashtail />
      <Faq />
      <PricingPlan />
      <CustomProject />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPageView;
