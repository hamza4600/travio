import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const satoshiFont = localFont({
  // weight: ["300", "400", "500", "600", "700"],
  src: "../../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

const montserratFont = localFont({
  src: "../../fonts/Montserrat-Regular.woff2",
  variable: "--font-montserrat",
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
      <body
        className={`${satoshiFont.variable} ${montserratFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
