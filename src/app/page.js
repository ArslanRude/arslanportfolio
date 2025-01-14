'use client'
import Home from "@/components/home";
import { CoverDemo } from "@/components/download_button";
import Link from "next/link";
export default function app() {
  return (
    <main className="min-h-screen bg-black/[.96] text-white antialiased bg-grid-white/[0.0]">
      <div className="flex">
            <Home/>
            <Link href="#">
              <div className="fixed bottom-0 right-0 m-4 p-7">
                  <CoverDemo/>
              </div>
            </Link>
      </div>
    </main>
  );
}
