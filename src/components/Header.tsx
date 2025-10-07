 import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LANG_LINK } from "@/lib/constants";
import { handleRedirect } from "@/lib/utils";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[5.4rem]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="Images/logo-blue.svg" className="w-[150px] h-auto md:w-[193px] md:h-[38px]" />
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4 mozilla-text">
            <Button
              variant="outline"
              className="h-auto px-6 py-[18px] rounded-xl border-[0.5px] border-solid border-[#c9c7d4] [font-family:'Mozilla_Text',Helvetica] font-medium text-textprimary-color text-base tracking-[0] leading-[normal] whitespace-nowrap bg-transparent hover:bg-gray-50"
            >
              BOOK A DEMO
            </Button>

            <Button
              className="h-[53px] px-8 py-3.5 rounded-xl bg-[linear-gradient(143deg,rgba(170,216,255,1)_0%,rgba(72,44,255,1)_100%)] 
              [font-family:'Mozilla_Text',Helvetica] font-medium text-white text-base hover:opacity-90 transition-opacity gradient-bg"
              onClick={() => handleRedirect(LANG_LINK)}
            >
              GET STARTED FREE
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
  <div className="fixed inset-0 z-[9999] bg-[#0a0a0a]/95 flex flex-col justify-center items-center w-screen h-screen md:hidden">
    {/* Close Button */}
    <button
      className="absolute top-5 right-5 text-white"
      onClick={() => setMenuOpen(false)}
    >
      <X size={32} />
    </button>

    {/* Navigation Links */}
    <div className="flex flex-col items-center gap-8 text-white text-lg font-light">
      <HashLink smooth to="#howWork" onClick={() => setMenuOpen(false)}>
        How it works
      </HashLink>
      <HashLink smooth to="#solution" onClick={() => setMenuOpen(false)}>
        Solutions
      </HashLink>
      <HashLink smooth to="#Testimonials" onClick={() => setMenuOpen(false)}>
        Testimonials
      </HashLink>
      <HashLink smooth to="#Game" onClick={() => setMenuOpen(false)}>
        Become an AI Hacker
      </HashLink>
    </div>

    {/* Buttons */}
    <div className="flex flex-col gap-4 mt-10 w-3/4 max-w-[300px]">
      <Button
        variant="outline"
        className="w-full border border-gray-300 text-gray-900 bg-white"
      >
        BOOK A DEMO
      </Button>
      <Button
        className="w-full bg-[linear-gradient(143deg,rgba(170,216,255,1)_0%,rgba(72,44,255,1)_100%)] text-white gradient-bg"
        onClick={() => {
          handleRedirect(LANG_LINK);
          setMenuOpen(false);
        }}
      >
        GET STARTED FREE
      </Button>
    </div>
  </div>
)}

    </header>
  );
};

export default Header;
