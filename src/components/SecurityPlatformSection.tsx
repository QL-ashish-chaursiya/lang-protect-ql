import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

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
        <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Unified Security platform
                </h2>
                <p className="text-lg text-[#202532] mb-16 max-w-3xl mx-auto">
                    Stay ahead of evolving threats with enterprise-grade AI security solutions that
                    safeguard your applications, employees, and data without slowing down innovation.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {securityFeatures.map((feature, index) => {
                        // const IconComponent = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group border-[#E3E6FF] bg-[#F8F7FF] transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-[#0A0818] hover:text-white hover:shadow-2xl hover:shadow-primary/25"
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
                                    <CardDescription className="text-sm leading-relaxed text-[#202532] group-hover:text-white/90 transition-colors duration-300">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-white/60 p-6 shadow-md">
                    <p className="max-w-xl text-sm text-foreground/70 text-left">Move fast with AI without the fear. Our security suite safeguards your innovation so you can scale confidently.</p>
                    <Button variant="cta" className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow">GET STARTED FREE</Button>
                </div>
            </div>
        </section>
    );
};

export default SecurityPlatformSection;