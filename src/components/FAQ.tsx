import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      id: "item-1",
      question: "What exactly does LangProtect do?",
      answer: "LangProtect is an AI security platform that protects your infrastructure, applications, workflows, and teams from emerging AI threats. Our three solutions — Armor (for developers), Guardia (employee & team safety), and Breachers (AI red teaming) — work together to block prompt injections, prevent PII/PHI leaks, detect bias, and ensure compliance while your team can accelerate on Gen-AI innovation."
    },
    {
      id: "item-2", 
      question: "How is LangProtect different from standard application security tools?",
      answer: "Unlike traditional security tools that focus on known threats, LangProtect specializes in AI-specific vulnerabilities like prompt injections, model hallucinations, and data leakage through AI systems. We provide real-time monitoring and protection specifically designed for AI workloads and generative AI applications."
    },
    {
      id: "item-3",
      question: "How much can I apply for?",
      answer: "Our pricing plans are flexible and scale with your needs. We offer different tiers based on your usage, team size, and required features. Contact our sales team to discuss a custom plan that fits your organization's specific requirements and budget."
    },
    {
      id: "item-4", 
      question: "How quickly can I get a loan?",
      answer: "Implementation typically takes 1-2 weeks depending on your infrastructure complexity. Our team provides dedicated onboarding support to ensure a smooth integration with your existing systems and workflows."
    },
    {
      id: "item-5",
      question: "What is the repayment term of my loan?",
      answer: "We offer flexible contract terms ranging from monthly subscriptions to annual agreements. Enterprise customers can work with our team to establish custom terms that align with their budget cycles and organizational needs."
    }
  ];

  return (
    <section className="bg-background py-16 px-6 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col mb-12 text-center">
          <div>
         <h2
  className="[font-family:'Mozilla_Text'] font-bold text-[44px] leading-[120%] tracking-[0.02em] text-center text-foreground mb-4"
>
  Frequently asked question
</h2>

          </div>
           <div className="px-5">
            <p className="text-muted-foreground">
            We provides answers to common questions about our product/services.
          </p>
          </div>
        </div>
        
        
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-card border border-border rounded-lg px-6 py-2 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-foreground text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;