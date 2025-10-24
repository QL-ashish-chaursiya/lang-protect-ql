import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PrimaryBtn from "./common/PrimaryBtn";

const SecurityPlatformSection = () => {
  const securityFeatures = [
    {
      title: "Armor",
      description:
        "A solid but lightweight gateway that scans user prompts before they hit your LLM plus when they are sent as output, both. We built-in scanning like inappropriate content, PII, prompt injections, jailbreaks, malicious sites and blacklist rules for customizations per your system needs.",
      iconPath: "./Images/SecurityIconFirst.svg",
    },
    {
      title: "Guardia",
      description:
        "A Chrome Extension for employees that scans every single file upload on support, Google, GitHub or custom companies detecting secrets, confidential files, and risky content before it's sent.",
      iconPath: "./Images/SecurityIconSecond.svg",
    },
    {
      title: "Breachers Red",
      description:
        "A Red teaming service that assesses your AI Systems, simulating real-world vulnerabilities and deliver tailored remediation to your team by securing your AI Systems.",
      iconPath: "./Images/SecurityIconThird.svg",
    },
  ];

  return (
    <section
      id="solution"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 w-full"
    >
      <div className="max-w-[1262px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[#19162F] mozilla-text font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight tracking-normal mb-6">
          Unified Security Platform
        </h2>

        <p className="text-[#202532] mozilla-text font-light text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-3xl mx-auto">
          Stay ahead of evolving threats with enterprise-grade AI security solutions that
          safeguard your applications, employees, and data without slowing down innovation.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group border-[#E3E6FF] bg-[#F8F7FF] transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-[#0A0818] hover:text-white hover:shadow-2xl hover:shadow-primary/25 rounded-[24px]"
            >
              <CardHeader className="pb-4 flex flex-col items-center space-y-4">
                <img
                  src={feature.iconPath}
                  alt={feature.title}
                  className="w-28 sm:w-32 md:w-36 lg:w-44 h-auto text-primary group-hover:text-white transition-colors duration-300"
                />
                <CardTitle className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[15px] sm:text-[16px] leading-relaxed text-[#4E5976] group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#F8F7FF] p-6 sm:p-8">
          <p className="w-full sm:w-[70%] text-left font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[rgba(25,22,47,1)]">
            Move fast with AI without the fear. Our security suite safeguards your innovation so you can scale confidently.
          </p>
          <div className="w-full sm:w-auto flex justify-center">
            <PrimaryBtn  containerCls="w-full" btnCls="w-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityPlatformSection;
