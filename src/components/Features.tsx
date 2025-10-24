import PrimaryBtn from "./common/PrimaryBtn";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
 

const featureCards = [
  {
    title: "Seamless Integration",
    description:
      "Stay compliant and secure by design a drop-in layer for your AI apps and workflows.",
  
    image: "/Images/Layer_1.png",
    imageClasses:
      "relative bottom-[-23px] md:absolute h-[64.87%] top-[44.55%] left-[calc(50.00%_-_5px)] w-[209px]",
  },
  {
    title: "Fully LLM-Agnostic",
    description:
      "Works with ChatGPT, Claude, Gemini, or any other system. Your AI choice stays yours security just works.",
    
    image: "/Images/Group.png",
    imageClasses: "relative bottom-[-23px] left-[154px] md:absolute md:top-[201px] md:left-[196px] w-[211px] h-[268px]",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f8f7ff] py-12 md:py-16 lg:py-[109px]">
      <div className="max-w-[1262px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-[25px]">
        <div className="flex flex-col w-full lg:w-[407px] items-start justify-center gap-6 md:gap-8">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className="text-[#19162F] mozilla-text font-semibold text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight md:leading-[normal]">
              Enterprise-Grade AI Security
            </h2>

            <p className="text-[#202532] mozilla-text font-light  text-base md:text-lg tracking-[0] leading-6 md:leading-[27px]">
              Deploy in minutes, safeguard instantly. Unified AI security with full visibility and control. Trusted by healthcare, fintech, and enterprise teams to secure AI adoption.
            </p>
          </div>
            <div className="hidden md:block">
 <PrimaryBtn label="Let’s Secure your AI App"  handle={()=>{}} />
            </div>
           
            
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-full max-w-[407px] md:max-w-[407px] lg:w-[407px] h-auto md:h-[400px] lg:h-[469px] rounded-3xl overflow-hidden bg-[#f8f7ff] border border-solid border-[#e3e6ff]"
            >
              <CardContent className="flex flex-col h-full items-start justify-between p-6 md:p-8 lg:p-9 relative">
                <div className="flex flex-col items-start gap-3 w-full">
                  <h3
                    className={`mozilla-text font-semibold ${index === 0 ? "text-[#19162f]" : "font-bold text-black"} text-lg md:text-xl tracking-[0] leading-[normal]`}
                  >
                    {card.title}
                  </h3>

                  <p className="font-light  text-[#202532] text-sm md:text-[15px] tracking-[0] leading-[normal]">
                    {card.description}
                  </p>
                </div>

                {/* <Button
                  variant="outline"
                  className="inline-flex items-center justify-center gap-1 px-4 md:px-5 py-2 md:py-3 rounded-[50px] border-[0.5px] border-solid border-[#beb4ff] bg-transparent hover:bg-gray-50 h-auto mt-4 md:mt-0"
                >
                  <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#636363] text-sm tracking-[0] leading-[normal]">
                    Learn More
                  </span>
                  <img className="w-5 h-5 md:w-6 md:h-6" alt="Frame" src="/Images/TiltArrow.png" />
                </Button> */}

                <img
                  className={` ${card.imageClasses}`}
                  alt={index === 0 ? "Layer" : "Graphic elements"}
                  src={card.image}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="md:hidden w-full">
 <PrimaryBtn label="Let’s Secure your AI App"  handle={()=>{}} containerCls="w-full" btnCls="w-full" />
            </div>
      </div>
    </section>
  );
};