import type { Metadata } from "next";
import {Saira} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Daniela Sousa - Psicológa Clínica",
  description: "Site de psicóloga clínica da Daniela Sousa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${saira.variable} antialiased bg-orange-50  min-h-screen text-[#555e5c]`} //bg-orange-50 the color that 
      >
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
// 