import type { Metadata } from "next";
import  {Geist, Geist_Mono, Noto_Sans, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";
import SiteSettings from "@/app/Components/SiteSettings";

const notoserif = Noto_Sans({
  variable: "--font-notoserif",
  subsets: ["latin"],
  display: "swap",
});

const ubuntusansmono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntusansmono",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Engineer Salma Portfolio",
  description: " Salma Joan Judith Pelesi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${geistSans.variable} ${geistMono.variable} ${notoserif.variable} ${ubuntusansmono.variable}`}
      >
        <SiteSettings />
        {children}
      </body>
    </html>
  );
}
