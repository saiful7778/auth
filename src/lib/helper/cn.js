import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This is HTML class marge function
 * @param  {...any} inputs
 * @returns
 */
export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}
