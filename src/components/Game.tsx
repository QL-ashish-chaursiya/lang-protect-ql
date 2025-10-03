import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import PrimaryBtn from "./common/PrimaryBtn";
 

export const Game = (): JSX.Element => {
  const statsData = [
    {
      number: "45K +",
      description: "Prompts tested by early players",
    },
    {
      number: "24/7",
      description: "Live leaderboard of top attackers",
    },
    {
      number: "5K +",
      description: "Community Challengers\nworldwide",
    },
    {
      number: "5K +",
      description: "New Injection patterns\nblocked every hour",
    },
  ];

  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] h-[924px] relative" id="Game">
      <img
        className="w-[100.11%] h-[31.96%] top-[62.77%] absolute left-0"
        alt="Vector"
        src="/Images/Game_Bg_2.svg"
      />

      <img
        className="w-[100.40%] h-[32.05%] top-0 absolute left-0"
        alt="Vector"
        src="/Images/Game_Bg_1.svg"
      />

      <img
        className="absolute top-[207px] left-[701px] w-[603px] h-[424px]"
        alt="Layer"
        src="/Images/Game_mobile.svg"
      />

      <section className="flex flex-wrap w-[630px] items-center gap-[16px_16px] absolute top-[561px] left-[89px]">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="w-[234px] bg-[#0f0a1f] rounded-[20px] border-none"
          >
            <CardContent className="flex flex-col items-start p-4">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Mozilla_Text',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                {stat.number}
              </div>

              <div className="relative self-stretch [font-family:'Mozilla_Text',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[normal] whitespace-pre-line">
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="flex flex-col w-[401px] items-start gap-10 absolute top-[60px] left-[89px]">
        <header className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-start flex flex-col justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]" />
             <div className="flex flex-col justify-center relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="font-semibold text-[2.5rem] leading-[1]">
        <span className="text-black">Think You can </span>
        <span className="text-blue-600">Trick</span>
      </h1>
      <h2 className="font-semibold text-[2.5rem] leading-[1] text-blue-600">an AI Guard?</h2>
      <p className="font-semibold text-[2.5rem] leading-[1] text-black">
        Play Our AI Escape Room game.
      </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Mozilla_Text',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[27px]">
              Challenge our AI Guard Agent with you trickiest prompts. See if
              you can break it, and learn how real attacks are stopped in the
              wild. Evey attempt&nbsp;&nbsp;contributes in securing AI systems
              globally
            </p>
          </div>
        </header>

        <PrimaryBtn label="Become an AI Hacker" />
      </section>
    </main>
  );
};