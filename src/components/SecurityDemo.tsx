import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";

 

export const  SecurityDemo = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#090718] overflow-hidden py-12 md:py-20">
      <div className="absolute top-8 md:top-[59px] left-[100px] md:left-[291px] w-[800px] md:w-[1547px] h-[250px] md:h-[500px] rounded-[400px/125px] md:rounded-[773.51px/250.01px] border border-solid rotate-[131.34deg] blur-[50px] md:blur-[87px] border-[#5039ff] bg-[linear-gradient(146deg,rgba(255,228,170,0.14)_0%,rgba(209,44,255,0.14)_52%,rgba(255,228,170,0.14)_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-14 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3.5 max-w-[772px]">
          <h2 className="bg-[linear-gradient(90deg,rgba(170,216,255,1)_0%,rgba(72,44,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Mozilla_Text',Helvetica] font-semibold text-2xl md:text-3xl lg:text-[42px] text-center tracking-[0] leading-tight md:leading-[normal]">
            Try out LangProtect Security Yourself
          </h2>

          <p className="[font-family:'Mozilla_Text',Helvetica] font-normal text-[#8ba1fe] text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-[30px]">
            Write a prompt to check if its safe or try tricking it to reveal a
            secret.
          </p>
        </div>

        <Card className="w-full max-w-[970px] bg-[#8c7aff24] border-none rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-[42px]">
          <CardContent className="p-0">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-[22px] w-full">
                <div className="relative">
                  <Textarea
                    placeholder="Enter a prompt to analyze for security threats"
                    className="min-h-[120px] md:min-h-[164px] bg-[#040022] border-[#546ff6e3] rounded-2xl md:rounded-[20px] shadow-[0px_0px_0px_4px_#d6d1ff33] text-[#6e6eff] text-base md:text-lg lg:text-xl [font-family:'Mozilla_Text',Helvetica] font-normal placeholder:text-[#6e6eff] resize-none p-4"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <Button
                    variant="outline"
                    className="h-auto px-4 md:px-6 py-3 md:py-3.5 border border-solid bg-transparent relative rounded-xl"
                  >
                    <span className="[font-family:'Mozilla_Text',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Click To Use A Sample Prompt
                    </span>
                    <img
                      className="w-3 h-3 md:w-[10.47px] md:h-[10.47px] ml-2.5"
                      alt="Group"
                      src="/Images/RightArrow.png"
                    />
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between pl-4 pr-3 md:pr-[15px] py-2 bg-[#ffffff08] rounded-2xl">
                  <div className="flex items-center gap-2 flex-1">
                    <img className="w-5 h-5 md:w-6 md:h-6" alt="Banned" src="/Images/banned.svg" />
                    <span className="[font-family:'Mozilla_Text',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      Blocked: Prompt Injection detected
                    </span>
                  </div>

                  <Badge
                    variant="outline"
                    className="border-[#c64a4a] text-[#c64a4a] bg-transparent rounded-[40px] px-2.5 py-2.5 h-auto"
                  >
                    <span className="[font-family:'Mozilla_Text',Helvetica] font-normal text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      89% Confidence
                    </span>
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};