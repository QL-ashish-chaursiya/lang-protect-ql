import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQ from "@/components/FAQ";
import { SecurityDemo } from "@/components/SecurityDemo";
import SecurityPlatformSection from "@/components/SecurityPlatformSection";
import { Testimonial } from "@/components/Testimonial";
import { FeaturesSection } from "@/components/Features";
import { Game } from "@/components/Game";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Ring 1 */}
      <div className="absolute 
        top-16 md:top-[92px] 
        left-1/2 md:left-[716px] 
        -translate-x-1/2 md:translate-x-0
        w-[250px] md:w-[882px] 
        h-[150px] md:h-[455px] 
        rounded-[150px/75px] md:rounded-[440.97px/227.37px] 
        border border-solid border-[#5039ff] 
        rotate-[-16.16deg] 
        blur-[30px] md:blur-[87px] 
         bg-[linear-gradient(146deg,rgba(255,228,170,0.14)_0%,rgba(209,44,255,0.14)_52%,rgba(255,228,170,0.14)_50%)]
        md:bg-[linear-gradient(146deg,rgba(255,228,170,0.14)_0%,rgba(209,44,255,0.14)_52%,rgba(255,228,170,0.14)_100%)]" 
      />

      {/* Ring 2 */}
      <div className="absolute 
        top-12 md:top-[76px] 
        left-1/2 md:left-[-549px] 
        -translate-x-1/2 md:translate-x-0
        w-[500px] md:w-[1547px] 
        h-[200px] md:h-[500px] 
        rounded-[250px/100px] md:rounded-[773.51px/250.01px] 
        border border-solid border-[#5039ff] 
        rotate-[48.66deg] 
        blur-[30px] md:blur-[87px] 
         bg-[linear-gradient(146deg,rgba(72,44,255,0.25)_0%,rgba(163,218,249,0.25)_50%)]
        md:bg-[linear-gradient(146deg,rgba(72,44,255,0.25)_0%,rgba(163,218,249,0.25)_100%)]" 
      />

      <Header />
      <HeroSection />
      <HowItWorksSection />
      <SecurityPlatformSection />
      <Testimonial />
      <FeaturesSection />
      <SecurityDemo />
      <Game />
      <FAQ />
    </div>
  );
};

export default Index;
