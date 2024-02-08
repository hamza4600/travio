import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const dmFont = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm",
});

const outfitFont = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Traviio Tours",
  description: "Traviio Tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn(`${dmFont.variable} ${outfitFont}`)}`}>
        {children}
      </body>
    </html>
  );
}
