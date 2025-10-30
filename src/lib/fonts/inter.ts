import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // create a CSS variable for Tailwind / global use
  display: "swap", // recommended to avoid invisible text
  weight: ["300", "400", "500", "600", "700", "800"], // include weights you need
});
