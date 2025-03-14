import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Daniela Sousa - Psicológa Clínica",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${openSans.variable} antialiased bg-orange-50  min-h-screen`} //bg-orange-50 the color that 
      >
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
