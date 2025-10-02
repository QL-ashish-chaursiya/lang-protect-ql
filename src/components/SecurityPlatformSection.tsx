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
        <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20 w-full">
            <div className="mx-auto text-center w-[1262px]">
                <h2 className="text-[#19162F] mozilla-text fonSee What People Have To Sayt-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[120%] sm:leading-[110%] md:leading-[105%] lg:leading-[100%] tracking-[0%] text-center mb-6 text-foreground sm:font-semibold">
    Unified Security platform
</h2>

               <p className="text-[#202532] mozilla-text font-light text-[16px] sm:text-[16px] md:text-[18px] leading-[140%] sm:leading-[145%] md:leading-[150%] tracking-[0%] text-center text-[rgba(32, 37, 50, 1)] mb-16 max-w-3xl mx-auto">
    Stay ahead of evolving threats with enterprise-grade AI security solutions that
    safeguard your applications, employees, and data without slowing down innovation.
</p>


                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {securityFeatures.map((feature, index) => {
                        // const IconComponent = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group border-[#E3E6FF] bg-[#F8F7FF] transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-[#0A0818] hover:text-white hover:shadow-2xl hover:shadow-primary/25 rounded-[24px]"
                            >
                                <CardHeader className="pb-4 flex flex-col items-center space-y-4">
                                    <img
                                        src={feature.iconPath}
                                        className="text-primary group-hover:text-white transition-colors duration-300 w-44 h-44"
                                    />
                                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>   
                                    <CardDescription className="sm:text-[16px] leading-relaxed text-[#202532] group-hover:text-white/90 transition-colors duration-300">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                 <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-[#F8F7FF] p-6 shadow-md">
  <p className="w-[75%] font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[140%] sm:leading-[150%] md:leading-[160%] tracking-[0%] text-[rgba(25,22,47,1)] text-left">
    Move fast with AI without the fear. Our security suite safeguards your innovation so you can scale confidently.
  </p>

     <PrimaryBtn />
</div>

            </div>
        </section>
    );
};

export default SecurityPlatformSection;