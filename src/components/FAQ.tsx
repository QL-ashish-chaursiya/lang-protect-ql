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
      answer: "LangProtect is an AI security platform that protects your infrastructure, applications, workflows, and teams from emerging AI threats. Our three solutions — Armor (For developers), Guardia (employee & team safety), and Breachers Red (AI red teaming) — work together to block prompt injections, prevent PII/PHI leaks, detect bias, and ensure compliance while your team can accelerate on Gen-AI Innovation."
    },
    {
      id: "item-2", 
      question: "How is LangProtect different from standard application security tools?",
      answer: "Traditional app security focuses on code and APIs. LangProtect is built specifically for AI and GenAI use cases. It sits between your users and LLMs (GPT, Claude, Gemini, etc.) to validate both requests and responses blocking & reporting malicious prompts, sanitizing sensitive data, and enforcing least-privilege access."
    },
    {
      id: "item-3",
      question: "Is LangProtect tied to a specific LLM (like GPT-4 or Claude)?",
      answer: "No. LangProtect is fully LLM-agnostic. Whether you use GPT, Claude, Gemini, or custom models, our security layer integrates seamlessly and provides the same protection. "
    },
    {
      id: "item-4", 
      question: "How does LangProtect handle sensitive data like PHI or PII?",
      answer: "Our platform includes built-in scanners and AI models trained to detect and redact sensitive data in real-time. This ensures that no personally identifiable or protected health information is leaked through AI prompts or outputs — helping you stay compliant with HIPAA, GDPR, and other regulations. "
    },
    {
      id: "item-5",
      question: "What is Breachers Red and why do I need it?",
      answer: "Breachers Red is our AI red teaming service that stress-tests your AI Applications. Our experts simulate real-world attacks such as prompt injections, data exfiltration attempts, and bias exploitation to uncover vulnerabilities — so you can fix them before adversaries exploit them."
    },
    {
      id: "item-6",
      question: "How quickly can we get started with LangProtect?",
      answer: "Integration takes minutes, not months. For developers, Armor is available as an API layer. For employees, Guardia is offered as a Chrome extension with a central dashboard. Red teaming (Breachers Red) can be scheduled as an engagement with our team. You start seeing value — and protection — instantly."
    },
    {
      id: "item-7",
      question: "Does LangProtect slow down my AI apps or workflows?",
      answer: "No. Our optimizations ensure minimal latency. In most deployments, the additional processing adds milliseconds while providing enterprise-grade security and monitoring."
    }
  ];

  return (
    <section className="bg-background py-16 px-6 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col mb-12 text-center">
          <div>
            <h2
              className="text-[#19162F] mozilla-text font-bold text-[44px] leading-[120%] tracking-[0.02em] text-center text-foreground mb-4"
            >
              Frequently Asked Questions
            </h2>
          </div>
          
        </div>
        <div className="space-y-2 mozilla-text">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card border border-border rounded-lg px-6 py-2 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-[#222222] text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#4F4F4F] leading-relaxed">
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