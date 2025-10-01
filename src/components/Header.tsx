import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-transparent backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">  
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./Images/logo.svg" alt="logo" />
            <span className="text-2xl font-bold text-foreground">Lang Protect</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mozilla-text  font-light">
            <Button variant="nav" className="text-base font-light">
              How it works
            </Button>
            <Button variant="nav" className="text-base font-light">
              Solutions
            </Button>
            <Button variant="nav" className="text-base font-light">
              Blog
            </Button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 mozilla-text">
            <Button variant="outline" size="lg" className="hidden border-[#AEAEAE] border-[0.5px] text-[#1E1E1E]  sm:inline-flex hover:opacity-90">
              BOOK A DEMO
            </Button>
            <Button variant="cta" size="lg" className="gradient-bg hover:opacity-90 rounded-xl">
              GET STARTED FREE
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;