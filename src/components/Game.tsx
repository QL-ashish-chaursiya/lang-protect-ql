import { GAME_LINK } from "@/lib/constants";
import PrimaryBtn from "./common/PrimaryBtn";

 

export const Game = (): JSX.Element => {
  return (
    <section className="w-full bg-[url('/Images/GameSectionbg.png')] bg-no-repeat bg-cover bg-center w-full overflow-hidden" id="Game">
      <div className="mx-auto">
         <div className=" text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        

        <div className="relative mx-auto px-6 md:pr-0 py-10 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col justify-between h-full md:pl-[100px]">
              <div className="space-y-8">
                <div>
                   <h1 className="mozilla-text font-semibold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                  Think You can Trick an AI Guard?
                  
                </h1>
                 <h2 className="mozilla-text font-medium text-[17px] sm:text-[32px]">
                 
                  Play Our AI Escape Room game.
                </h2>
                </div>
                

                <p className="text-[#C9C7D4] mozilla-text font-light text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-xl">
                  Challenge our AI Guard Agent with you trickiest prompts. See if you can break it, and learn how real attacks are stopped in the wild. Every attempt contributes in securing AI systems globally.
                </p>

                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Become an AI Hacker
                  <ArrowRight className="w-5 h-5" />
                </button> */}
                <div className="hidden md:block">
                  <PrimaryBtn label="Become an AI Hacker" url={GAME_LINK} />
                </div>
                  <div className="md:hidden w-full">
                <img
                  src="/Images/mob_game.svg"
                  alt="AI Security Lab Interface"
                  className="h-full object-cove"
                />
              </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:max-w-[580px]">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:max-w-[275px]">
                  <div className="mozilla-text font-medium text-2xl md:text-[32px] leading-tight mb-1">45K+</div>
                  <div className="mozilla-text font-medium text-gray-400 text-sm leading-normal md:max-w-[200px]">Prompts tested by early players</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:max-w-[275px]">
                  <div className="mozilla-text font-medium text-2xl md:text-[32px] leading-tight mb-1">24/7</div>
                  <div className="mozilla-text font-medium text-gray-400 text-sm leading-normal md:max-w-[200px]">Live leaderboard of top attackers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:max-w-[275px]">
                  <div className="mozilla-text font-medium text-2xl md:text-[32px] leading-tight mb-1">5K+</div>
                  <div className="mozilla-text font-medium text-gray-400 text-sm leading-normal md:max-w-[200px]">Community Challengers worldwide</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:max-w-[275px]">
                  <div className="mozilla-text font-medium text-2xl md:text-[32px] leading-tight mb-1">5K+</div>
                  <div className="mozilla-text font-medium text-gray-400 text-sm leading-normal md:max-w-[200px]">New injection patterns blocked every hour</div>
                </div>
              </div>
               
            </div>
             <div className="md:hidden">
                  <PrimaryBtn label="Become an AI Hacker" url={GAME_LINK} containerCls="w-full" btnCls="w-full" />
                </div>
            {/* Right Image - 80% visible, 20% hidden */}
         <div className="hidden md:flex relative h-full items-stretch justify-end">
  <div className="relative  overflow-visible rounded-2xl shadow-2xl">
    <img
      src="/Images/Game1.svg"
      alt="AI Security Lab Interface"
      className="w-full h-full object-contain"
    />
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};