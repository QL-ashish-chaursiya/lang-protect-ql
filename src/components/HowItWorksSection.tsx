import { ArrowRight, Shield, Eye, Cpu } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-dark py-20 lg:py-32 relative overflow-hidden flex flex-col items-center gap-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#AAD8FF] to-[#482CFF] bg-clip-text text-transparent">
            How LangProtect Secures your AI System
          </h2>
          <p className="text-lg text-[#8BA1FE] max-w-3xl mx-auto">
            By offering sanitization, detection of harmful language, prevention of data leakage,
            and resistance against prompt injection attacks, LangProtect ensures that
            interactions with your LLMs remain safe and secure.
          </p>
        </div>
      </div>
      <div className="flex justify-center relative z-10">
        <img
          src="./Images/HowItWork.png"
          alt="LangProtect Demo"
          className="max-w-7xl w-full"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;