import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LANG_LINK } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const handleRedirect = () => {
  window.open(LANG_LINK, "_blank");
};

