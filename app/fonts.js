import localFont from "next/font/local";

export const polySans = localFont({
  src: [
    {
      path: "./polysansitalictrial-neutralitalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-polysans",
});