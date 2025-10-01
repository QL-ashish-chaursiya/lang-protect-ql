import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-transparent backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">  
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./Images/logo.svg" alt="logo" />
            <span className="text-xl font-bold text-foreground">LangProtect</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" className="text-sm">
              How it works
            </Button>
            <Button variant="nav" className="text-sm">
              Solutions
            </Button>
            <Button variant="nav" className="text-sm">
              Blog
            </Button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden border-[#AEAEAE] text-[#1E1E1E]  sm:inline-flex">
              BOOK A DEMO
            </Button>
            <Button variant="cta" size="sm" className="bg-gradient-to-r from-[#AAD8FF] to-[#482CFF] ">
              GET STARTED FREE
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;