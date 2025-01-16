import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arslan's Portfolio",
  description: "Portfolio which is desined by Arslan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scrollbar-thumb-red-400 scrollbar-track-[#090a0a] scrollbar-thin scrollbar-corner-transparent">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full flex justify-center items-center">  
          <Navbar/>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
