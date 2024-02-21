import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AppThemeProvider } from "../../theme/provider";

const satoshiVariable = localFont({
  src: [
    {
      path: "../../fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Black.woff2",
      style: "black",
      weight: "900",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Bold.woff2",
      style: "bold",
      weight: "700",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Light.woff2",
      style: "light",
      weight: "300",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Medium.woff2",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});

const montserratFont = localFont({
  src: [
    {
      path: "../../fonts/montserrat/Montserrat-Black.woff2",
      weight: "900",
      style: "black",
    },
    {
      path: "../../fonts/montserrat/Montserrat-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../fonts/montserrat/Montserrat-ExtraBold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../../fonts/montserrat/Montserrat-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../fonts/montserrat/Montserrat-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../fonts/montserrat/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/montserrat/Montserrat-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../fonts/montserrat/Montserrat-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "../../fonts/montserrat/Montserrat-ExtraLight.woff2",
      weight: "200",
      style: "extralight",
    },
  ],
  variable: "--font-montserrat",
});

const novo = localFont({
  src: "../../fonts/ProximaNovaRegular.woff",
  variable: "--font-nova",
});

const plain = localFont({
  src: "../../fonts/Plain.woff",
  variable: "--font-plain",
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
        className={`${satoshiVariable.variable} ${montserratFont.variable} ${novo.variable} ${plain.variable} font-sans`}
      >
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
