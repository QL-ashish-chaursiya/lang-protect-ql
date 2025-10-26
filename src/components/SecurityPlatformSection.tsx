 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PrimaryBtn from "./common/PrimaryBtn";

const SecurityPlatformSection = () => {
  const securityFeatures = [
    {
       icons: "/Images/Armor3.svg",
      title: "Armor",
      description:
        "A solid but lightweight gateway that scans user prompts before they hit your LLM plus when they are sent as output, both. 30+ built-in scanners like prompt injection, PII, language, token limits, regex and keyword rules for customizations per your system needs.",
      image: "/Images/armor.svg",
    },
    {
       icons: "/Images/Guardia1.svg",
      title: "Guardia",
      description:
        "A Chrome Extension for employees that scans every single input in any LLM chat like ChatGPT, Claude, Gemini or custom consoles detecting secrets, confidential files, and risky content before it’s sent.",
      image: "/Images/gaurdia.svg",
    },
    {
       icons: "/Images/Breachers2.svg",
      title: "Breachers Red",
      description:
        "A Red teaming service that assesses your AI Systems, simulates attacks, finds vulnerabilities, and delivers tailored remediation to your team for securing your AI Systems.",
      image: "/Images/breacher.svg",
    },
     
  ];

  return (
    <section
      id="solution"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 w-full"
    >
      <div className="max-w-[1262px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#19162F] mozilla-text font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight tracking-normal mb-6">
            Unified Security Platform
          </h2>
          <p className="text-[#202532] mozilla-text font-light text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
            Stay ahead of evolving threats with enterprise-grade AI security solutions that
            safeguard your applications, employees, and data without slowing down innovation.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="flex flex-col gap-14">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="w-full lg:w-1/2">
               <img
                  src={feature.icons}
                  alt={'icons'}
                  className="w-full max-w-[73px] max-h-[75px] mx-auto md:mx-0"
                />
                <h3 className="text-[#19162F] mozilla-text font-semibold text-[24px] md:text-[28px] mb-4 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-[#4E5976] text-[15px] sm:text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-[500px] rounded-2xl border border-[#E3E6FF] bg-[#F8F7FF] shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#F8F7FF] p-6 sm:p-8">
          <p className="w-full sm:w-[70%] text-left font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[rgba(25,22,47,1)]">
            Move fast with AI without the fear. Our security suite safeguards your innovation so you can scale confidently.
          </p>
          <div className="w-full sm:w-auto flex justify-center">
            <PrimaryBtn containerCls="w-full" btnCls="w-full" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SecurityPlatformSection;
