"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Form from "next/form";
import ProjectForm from '@/components/ProjectForm';

export function project() {
  return (
    (<div
      className="min-h-screen w-full bg-[#090a0a] relative flex flex-col items-center justify-center antialiased">
        <ProjectForm />
      <BackgroundBeams />
    </div>)
  );
}


export default project
