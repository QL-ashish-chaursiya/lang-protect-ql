import { Button } from "@/components/ui/button";
import { handleRedirect } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import PrimaryBtn from "./common/PrimaryBtn";

const HeroSection = () => {
  return (
    <section className="relative pt-12 sm:pt-32 md:pt-40 lg:py-40 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/Images/banner.png"
            alt="Background Illustration"
            className="w-[85%] sm:w-[70%] md:w-[431px] max-w-full pt-[12rem] sm:pt-[12rem] md:pt-[15rem] object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-2 sm:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-[56px] font-medium text-[#19162F] mozilla-text mb-4 sm:mb-6 tracking-tight leading-snug sm:leading-tight">
            Security Platform for AI Systems
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#202532] mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed mozilla-text px-2">
            LangProtect secures your AI infrastructure, applications, workflows, and teams against
            emerging threats. Our three solutions Armor, Guardia, and Breachers Red are built on a
            unified security platform, ensuring compliance and resilience as you integrate AI into
            critical workflows.
          </p>

          <div className="flex justify-center">
            <PrimaryBtn />
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20   pb-8 md:pt-[200px]">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#F0F0F0] rounded-xl sm:rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors duration-300 overflow-hidden">
            <video
              className="rounded-xl sm:rounded-2xl w-full h-full object-cover"
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
