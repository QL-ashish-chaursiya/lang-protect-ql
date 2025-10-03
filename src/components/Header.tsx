import { Button } from "@/components/ui/button";
import { LANG_LINK } from "@/lib/constants";
import { handleRedirect } from "@/lib/utils";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return (
    <header className="w-full bg-transparent backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[5.4rem]">  
          {/* Logo */}
          <div className="flex items-center space-x-2">
           <img src="Images/logo-blue.svg" className="w-[193px] h-[38px]"/>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10 mozilla-text font-light gap-x-6">
  <HashLink
    smooth
    to="#howWork"
    className="relative text-base font-light transition-colors duration-500 hover:text-[#482CFF]
 after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#482CFF] after:to-[#AAD8FF] 
               after:transition-all after:duration-500 hover:after:w-full"
  >
    How it works
  </HashLink>

  <HashLink
    smooth
    to="#solution"
    className="relative text-base font-light transition-colors duration-500 hover:text-[#482CFF]
 after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#482CFF] after:to-[#AAD8FF] 
               after:transition-all after:duration-500 hover:after:w-full"
  >
    Solutions
  </HashLink>

  <HashLink
    smooth
    to="#Testimonials"
    className="relative text-base font-light transition-colors duration-500 hover:text-[#482CFF]
 after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#482CFF] after:to-[#AAD8FF] 
               after:transition-all after:duration-500 hover:after:w-full"
  >
    Testimonials
  </HashLink>

  <HashLink
    smooth
    to="#Game"
    className="relative text-base font-light transition-colors duration-500 hover:text-[#482CFF]
 after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#482CFF] after:to-[#AAD8FF] 
               after:transition-all after:duration-500 hover:after:w-full"
  >
    Become an AI Hacker
  </HashLink>
</nav>


          {/* CTA Buttons */}
          
                <div className="flex items-center gap-4 mozilla-text">
        <Button
          variant="outline"
          className="h-auto px-6 py-[18px] rounded-xl border-[0.5px] border-solid border-[#c9c7d4] [font-family:'Mozilla_Text',Helvetica] font-medium text-textprimary-color text-base tracking-[0] leading-[normal] whitespace-nowrap bg-transparent hover:bg-gray-50"
        >
          BOOK A DEMO
        </Button>

        <Button className="h-[53px] px-8 py-3.5 rounded-xl bg-[linear-gradient(143deg,rgba(170,216,255,1)_0%,rgba(72,44,255,1)_100%)] [font-family:'Mozilla_Text',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-90 transition-opacity gradient-bg" onClick={() => handleRedirect(LANG_LINK)}>
          GET STARTED FREE
        </Button>
      </div>
        </div>
      </div>
    </header>
  );
};

export default Header;