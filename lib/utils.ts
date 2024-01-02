import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function compactCount(num: number) {
  if (num < 1000) return num;
  if (num >= 1000 && num < 1000000) return (num / 1000).toFixed(1) + "K";
  if (num >= 1000000 && num < 1000000000)
    return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
}
