"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Form from "next/form";
import ContactForm from '@/components/ContactForm';

export function contact() {
  return (
    (<div
      className="min-h-screen w-full bg-[#090a0a] relative flex flex-col items-center justify-center antialiased">
        <ContactForm />
      <BackgroundBeams />
    </div>)
  );
}

export default contact
