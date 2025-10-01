import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import React from "react";

export const Footer = (): JSX.Element => {
  const navigationLinks = ["How it works", "Solutions", "Blog"];

  return (
    <div className="flex flex-col w-full items-start gap-12 md:gap-[100px] relative">
      <div className="flex flex-col items-center gap-12 md:gap-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-full max-w-[1260px] mx-auto h-auto md:h-[426px] bg-[#0a0818] rounded-2xl md:rounded-[32px] overflow-hidden">
          <div className="absolute top-[-30px] md:top-[-52px] left-[100px] md:left-[239px] w-[800px] md:w-[1265px] h-[200px] md:h-[409px] rounded-[400px/100px] md:rounded-[632.26px/204.36px] border-[0.82px] border-solid rotate-[131.34deg] blur-[40px] md:blur-[71.11px] border-[#5039ff] bg-[linear-gradient(146deg,rgba(255,228,170,0.14)_0%,rgba(209,44,255,0.14)_52%,rgba(255,228,170,0.14)_100%)]" />

          <div className="flex flex-col w-full max-w-[810px] items-start gap-8 md:gap-12 relative z-10 p-6 md:p-12">
            <div className="flex flex-col items-start gap-4 md:gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch [font-family:'Mozilla_Text',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight md:leading-[normal] mozilla-text">
                Ready to Secure your AI End-to-End?
              </h2>

              <p className="relative self-stretch  font-light text-white text-base md:text-lg tracking-[0] leading-6 md:leading-[27px]">
                Join now & get started on your journey to secure all of your AI
                Systems with simple configurations.
              </p>
            </div>

            <div className="inline-flex items-start gap-3.5 relative flex-[0_0_auto]">
              <Button className="inline-flex md:h-[53px] items-center justify-center gap-2.5 px-6 md:px-8 py-3 md:py-3.5 relative flex-[0_0_auto] rounded-xl  gradient-bg hover:opacity-90 h-auto">
                <span className="relative w-fit [font-family:'Mozilla_Text',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  GET STARTED FREE
                </span>
                <img
                  className="relative w-3 h-3 md:w-[10.47px] md:h-[10.47px]"
                  alt="Group"
                  src="/Images/RightArrow.png"
                />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-full h-auto md:h-[340px] bg-[#090718] overflow-hidden">
          <div className="absolute top-8 md:top-[59px] left-[100px] md:left-[291px] w-[800px] md:w-[1547px] h-[250px] md:h-[500px] rounded-[400px/125px] md:rounded-[773.51px/250.01px] border border-solid border-[#5039ff] rotate-[-48.66deg] blur-[50px] md:blur-[87px] bg-[linear-gradient(146deg,rgba(72,44,255,0.25)_0%,rgba(163,218,249,0.25)_100%)]" />

          <div className="flex flex-col w-full max-w-[1260px] items-start justify-center gap-6 relative z-10 px-4 md:px-8 py-8 md:py-[62px] mx-auto">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="flex flex-col w-full max-w-[423px] items-start justify-center gap-6 md:gap-10 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-3.5 relative flex-[0_0_auto]">
                    <h3 className="relative self-stretch bg-[linear-gradient(90deg,rgba(170,216,255,1)_0%,rgba(72,44,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Mozilla_Text',Helvetica] font-semibold text-transparent text-2xl md:text-[32px] text-center tracking-[0] leading-[normal] mozilla-text">
                      LangProtect
                    </h3>
                  </div>

                  <p className="relative self-stretch bg-[linear-gradient(143deg,rgba(170,216,255,1)_0%,rgba(72,44,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]   font-light text-transparent text-base md:text-lg tracking-[0] leading-6 md:leading-[28.8px]">
                    Enterprise-grade security layer for AI systems. Protect your
                    LLMs from threats.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center space-x-3">
                <Link
                  to="https://www.linkedin.com/company/langprotect/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Images/LinkedIn.png"
                    alt="LinkedIn"
                    className="h-8 w-8"
                  />
                </Link>

                <Link
                  to="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/Images/Git.png" alt="GitHub" className="h-8 w-8" />
                </Link>

                <Link
                  to="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/Images/X.png" alt="X" className="h-8 w-8" />
                </Link>

                <Link
                  to="mailto:your@email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Images/Email.png"
                    alt="Email"
                    className="h-8 w-8"
                  />
                </Link>
              </div>

              <nav className="inline-flex flex-col md:flex-row items-start md:items-center justify-end gap-4 md:gap-[34px] relative flex-[0_0_auto]">
                {navigationLinks.map((link, index) => (
                  <React.Fragment key={link}>
                    <a
                      href="#"
                      className="relative w-fit [font-family:'Mozilla_Text',Helvetica] font-normal text-[#fbfbfb] text-base md:text-lg tracking-[0] leading-[normal] hover:opacity-80"
                    >
                      {link}
                    </a>
                    {index < navigationLinks.length - 1 && (
                      <img
                        className="hidden md:block relative w-px h-[14.99px]"
                        alt="Vector"
                        src="/vector-2.svg"
                      />
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </div>

          <footer className="flex w-full items-center justify-center gap-4 md:gap-[143px] px-4 md:px-[120px] py-4 absolute left-0 bottom-0 bg-[#0a0818]">
            <div className="inline-flex items-start gap-[31px] relative flex-[0_0_auto]">
              <p className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-5 md:leading-[22.4px] whitespace-nowrap">
                © 2025 LangProtect. All Right Reserved
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
