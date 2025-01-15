'use client'
import Home from "@/components/home";
import { CoverDemo } from "@/components/download_button";
import Link from "next/link";
import About from "@/components/about";
export default function app() {
  return (
    <main className="min-h-screen bg-[#090a0a] text-white antialiased bg-grid-white/[0.0]">
            <Home/>
            <About/>
            <Link href="#">
              <div className="fixed bottom-0 right-0 p-10 z-50">
                  <CoverDemo/>
              </div>
            </Link>
    </main>
  );
}
