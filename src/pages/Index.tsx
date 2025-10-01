import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
 
import FAQ from "@/components/FAQ";
import {SecurityDemo} from "@/components/SecurityDemo";
import SecurityPlatformSection from "@/components/SecurityPlatformSection";
import { Testimonial } from "@/components/Testimonial";
import { FeaturesSection } from "@/components/Features";
 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-16 md:top-[92px] left-[300px] md:left-[716px] w-[400px] md:w-[882px] h-[200px] md:h-[455px] rounded-[200px/100px] md:rounded-[440.97px/227.37px] border border-solid border-[#5039ff] rotate-[-16.16deg] blur-[50px] md:blur-[87px] bg-[linear-gradient(146deg,rgba(255,228,170,0.14)_0%,rgba(209,44,255,0.14)_52%,rgba(255,228,170,0.14)_100%)]" />
      <div className="absolute top-12 md:top-[76px] left-[-200px] md:left-[-549px] w-[800px] md:w-[1547px] h-[250px] md:h-[500px] rounded-[400px/125px] md:rounded-[773.51px/250.01px] border border-solid border-[#5039ff] rotate-[48.66deg] blur-[50px] md:blur-[87px] bg-[linear-gradient(146deg,rgba(72,44,255,0.25)_0%,rgba(163,218,249,0.25)_100%)]" />
      <Header />
      <HeroSection />
      {/* <VideoSection /> */}
      <HowItWorksSection />
       <SecurityPlatformSection />
        <Testimonial />
       <FeaturesSection />
       <SecurityDemo />
      <FAQ />
    </div>
  );
};

export default Index;
