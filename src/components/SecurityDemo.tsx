import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";

 

export const  SecurityDemo = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[url('/Images/securityBg.png')] bg-no-repeat bg-cover bg-center w-full overflow-hidden py-12 md:pt-20 md:pb-48">
      <div className="absolute top-8 md:top-[59px] left-[100px] md:left-[291px] w-[800px] md:w-[1547px] h-[250px] md:h-[500px] rounded-[400px/125px] md:rounded-[773.51px/250.01px] border border-solid rotate-[131.34deg] blur-[50px] md:blur-[87px] border-[#5039ff] bg-[linear-gradient(146deg,rgba(255,228,170,0.14)_0%,rgba(209,44,255,0.14)_52%,rgba(255,228,170,0.14)_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-14 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3.5 max-w-[774px]">
          <h2 className="text-[#19162F] font-semibold text-2xl md:text-3xl lg:text-[42px] text-center tracking-[0] leading-tight md:leading-[normal] mozilla-text">
            Try out LangProtect Security Yourself
          </h2>

          <p className="font-light text-[#202532] text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-[30px]">
            Write a prompt to check if its safe or try tricking it to reveal a
            secret.
          </p>
        </div>

        <Card className="w-full max-w-[970px] rounded-2xl md:rounded-[32px] p-6 md:p-4 lg:p-[16px]">
          <CardContent className="p-0">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-[22px] w-full">
                <div className="relative">
               <Textarea
  placeholder="Enter a prompt to analyze for security threats"
  className="
    min-h-[120px] md:min-h-[164px]
    text-[#C9C7D4] text-base md:text-lg lg:text-xl font-normal
    placeholder:text-[#C9C7D4]
    resize-none
    bg-transparent outline-none
    border-0 border-b border-[#C9C7D4]
    focus:border-0 focus:border-b-[2px] focus:border-[#5039ff]
    focus:ring-0 focus:ring-offset-0
    focus-visible:ring-0 focus-visible:ring-offset-0
    transition-colors duration-200 pt-[20px] px-0 pb-0
 rounded-none
  "
/>



                </div>

                <div className="flex items-center justify-end">
                     <Button
  variant="outline"
  className="group relative w-full md:w-auto h-auto px-4 md:px-6 py-4 md:py-3.5 border border-solid bg-transparent rounded-xl overflow-hidden text-[#19162F] hover:text-white hover:border-transparent transition-all duration-200"
>
  {/* Gradient overlay */}
  <span className="absolute inset-0  gradient-bg  opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></span>

  <span className="[font-family:'Mozilla_Text',Helvetica] font-medium   text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap relative z-10">
    Click To Use A Sample Prompt
  </span>
  <ArrowRight
    className="relative z-10 w-4 h-4 ml-1 transition-transform duration-1000 ease-in-out group-hover:translate-x-1"
    strokeWidth={2.5}
     
  />
</Button>


                </div>

                {/* <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between pl-4 pr-3 md:pr-[15px] py-2 bg-[#ffffff08] rounded-2xl">
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
                </div> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};