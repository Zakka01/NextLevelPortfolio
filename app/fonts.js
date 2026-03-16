import localFont from "next/font/local";

export const polySans = localFont({
  src: [
    {
      path: "./polysansitalictrial-neutralitalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./polysansitalictrial-medianitalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./polysansitalictrial-median.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-polysans",
});
