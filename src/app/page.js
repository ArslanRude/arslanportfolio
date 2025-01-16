'use client'
import Home from "@/components/home";
import { CoverDemo } from "@/components/download_button";
import Link from "next/link";
import About from "@/components/about";
import Project from "@/components/project";
import Services from "@/components/services"; 


export default function app() {
  return (
    <main className="min-h-screen bg-[#090a0a] text-white antialiased bg-grid-white/[0.0]">
            <Home/>
            <About/>
            <Project/>
            <Services/>

            <Link href="https://drive.google.com/uc?export=download&id=1DqHPt3XVPQUW_EZCyWvaINkFhczZc1yL" >
              <div className="fixed bottom-0 right-0 p-10 z-50">
                  <CoverDemo/>
              </div>
            </Link>
    </main>
  );
}
