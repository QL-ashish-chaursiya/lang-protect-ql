import React from "react";
import { Card, CardContent } from "./ui/card";
import PrimaryBtn from "./common/PrimaryBtn";
import { GAME_LINK } from "@/lib/constants";

const statsData = [
  {
    value: "45K +",
    description: "Prompts tested by early\nplayers",
  },
  {
    value: "24/7",
    description: "Live leaderboard of top\nattackers",
  },
  {
    value: "5K+",
    description: "Community Challengers\nworldwide",
  },
  {
    value: "5K+",
    description: "New Injection patterns\nblocked every hour",
  },
];

export const Game = (): JSX.Element => {
  return (
    <section className="overflow-hidden w-full min-h-[717px] lg:min-h-[717px] md:min-h-[900px] sm:min-h-[1000px] relative bg-[url('/Images/GameBg.svg')] md:bg-no-repeat md:bg-cover md:bg-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-14 pt-8 md:pt-16 lg:pt-[129px] pb-8">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[684px] px-4">
            <div className="flex flex-col items-center justify-center mb-3 md:mb-5 w-full">
              <h1 className="[font-family:'Mozilla_Text',Helvetica] font-bold text-center leading-tight mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl text-[#ffffff]">Think You can </span>
                <span className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#482CFF] to-[#AAD8FF] bg-clip-text text-transparent">
                  Trick an AI Guard?
                </span>
              </h1>
              <h2 className="[font-family:'Mozilla_Text',Helvetica] font-bold text-[#ffffff] text-xl sm:text-2xl md:text-[32px] text-center leading-tight">
                Play our AI Escape Room game!
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <p className="[font-family:'Mozilla_Text',Helvetica] font-normal text-[#ffffff] text-base sm:text-lg text-center leading-relaxed">
                Challenge our AI Guard Agent with you trickiest prompts. See if
                you can break it, and learn how real attacks are stopped in the
                wild. Every attempt contributes in securing AI systems globally.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <PrimaryBtn label="Become an AI Hacker" url={GAME_LINK} />

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mt-8 md:mt-12 px-4">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="flex flex-col items-start p-4 rounded-[20px] border border-[#AAD8FF] backdrop-blur-[2.5px] bg-transparent text-white w-full">
                <CardContent className="p-0 w-full">
                  <div className="[font-family:'Mozilla_Text',Helvetica] font-medium text-[#ffffff] text-2xl md:text-[32px] leading-tight mb-2">
                    {stat.value}
                  </div>

                  <div className="[font-family:'Mozilla_Text',Helvetica] font-medium text-[#ffffff] text-xs leading-normal whitespace-pre-line">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};