import type { Metadata } from "next";
import { Cormorant_Garamond, Baloo_Da_2, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { BackgroundMusic } from "@/components/media/background-music";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const balooDa2 = Baloo_Da_2({
  variable: "--font-heading-raw",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body-raw",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${"Arna"} & ${"Ritam"} — Save the Date`,
  description:
    "Join Arna and Ritam as they begin their forever — 11th February 2027, Atlas, Harharitala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${balooDa2.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-body text-charcoal">
        <MotionProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionProvider>
        <BackgroundMusic />
      </body>
    </html>
  );
}
