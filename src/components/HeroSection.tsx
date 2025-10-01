import { Button } from "@/components/ui/button";
import { handleRedirect } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import PrimaryBtn from "./common/PrimaryBtn";

const HeroSection = () => {
  return (
    <section className="relative pt-40 lg:py-40 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/Images/banner.png"    
            alt="Background Illustration"
            className="max-w-[431px] w-full lg:max-h-[753px] pt-40"
          />
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl text-[#19162F] mozilla-text sm:text-5xl lg:text-[56px] font-medium text-foreground mb-6 tracking-tight">
            Security Platform for AI Systems
          </h1>
          <p className="text-lg sm:text-xl  text-[#202532] mb-8 max-w-3xl mx-auto leading-relaxed mozilla-text">
            LangProtect secures your AI infrastructure, applications, workflows, and teams against
            emerging threats. Our three solutions Armor, Guardia, and Breacher are built on a
            unified security platform, ensuring compliance and resilience as you integrate AI into
            critical workflows.
          </p>
          <PrimaryBtn />
        </div>
      </div>  
      {/* video section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[200px]">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#F0F0F0] rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors duration-300">
              <video
                className="rounded-2xl w-full h-full"
                controls
                poster="/Videos/placeholder.svg"
              >
                <source src="/Videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;