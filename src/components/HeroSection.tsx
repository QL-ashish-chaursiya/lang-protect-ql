import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-40 lg:py-40 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/Images/BannerCenter.svg"    
            alt="Background Illustration"
            className="max-w-xl w-full opacity-80 lg:max-h-[753px] pt-40"
          />
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 tracking-tight font-MozillaText">
            Security Platform for AI Systems
          </h1>
          <p className="text-lg sm:text-xl text-[#202532] mb-8 max-w-3xl mx-auto leading-relaxed">
            LangProtect secures your AI infrastructure, applications, workflows, and teams against
            emerging threats. Our three solutions Armor, Guardia, and Breacher are built on a
            unified security platform, ensuring compliance and resilience as you integrate AI into
            critical workflows.
          </p>
          <Button variant="cta" size="lg" className="mb-16">
            GET STARTED FREE
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>  
      {/* video section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[200px]">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#F0F0F0] rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors duration-300">
              <div className="flex items-center space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
                <span className="text-lg font-medium">Product Video</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;