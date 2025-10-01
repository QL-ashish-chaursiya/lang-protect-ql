 import { handleRedirect } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

type PrimaryBtnProps = {
  isImg?: boolean;
 label?:string;
  handle?: () => void;
};

const PrimaryBtn = ({ isImg = true,label='GET STARTED FREE', handle=handleRedirect }: PrimaryBtnProps) => {
  return (
    <div className="inline-flex items-start gap-3.5 relative flex-[0_0_auto]">
      <Button
        onClick={handle}
        className="relative inline-flex md:h-[53px] items-center justify-center gap-2.5 px-6 md:px-8 py-3 md:py-3.5 flex-[0_0_auto] rounded-xl gradient-bg h-auto overflow-hidden group"
      >
        {/* Sliding white overlay */}
        <span className="absolute left-[-100%] top-0 h-full w-full bg-white/20 transition-all duration-500 ease-in-out group-hover:left-0" />

        {/* Text */}
        <span className="relative z-10 font-medium text-white text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
          {label}
        </span>

        {/* Arrow animates left ↔ right on hover */}
        {isImg && (
          <ArrowRight
            className="relative z-10 w-4 h-4 ml-1 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        )}
      </Button>
    </div>
  );
};

export default PrimaryBtn;
