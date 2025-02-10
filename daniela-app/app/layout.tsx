import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased bg-orange-50 min-h-screen`}
      ><Header />
        {children}
      </body>
    </html>
  );
}
