"use client";
import React from 'react';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import gen_ai from "@/data/images/gen_ai.webp";
import langchain from "@/data/images/langchain.jpg";
import quick_learner from "@/data/images/1.jpg";
import about_photo from "@/data/images/about_photo.jpg";

const content = [
    {
      title: "About Me",
      description:
        "I am a passionate and driven Computer Science student in my 5th semester at TUF University, where I am pursuing a Bachelor of Science in Computer Science (BSCS). I have a strong interest in software development, problem-solving, and exploring the latest advancements in technology. My journey in the tech field is fueled by curiosity and a commitment to learning and growth.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={about_photo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Exploring Generative AI",
      description:
        "My current focus lies in Generative AI, specifically in the field of Agentic AI, where I aim to build intelligent systems that can independently reason and perform tasks. I am fascinated by the potential of AI to transform industries and solve complex problems. By diving into this domain, I am equipping myself with the knowledge and skills to contribute to the future of AI-driven innovation.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={gen_ai}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Tools and Frameworks",
      description:
        <span>
          To develop Generative AI solutions, I work with cutting-edge frameworks and technologies, including:

-LangChain: For building advanced language models and integrating them into practical applications.<br/>
-Pinecone: For implementing scalable vector databases that power efficient information retrieval and AI-driven search.
        </span>,

      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={langchain}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Quick Learner and Innovator",
      description:
        "I am a quick learner with an innate curiosity and a passion for exploring new concepts and technologies. I thrive on challenges that push me to expand my knowledge and skills, constantly seeking opportunities to grow and innovate. Whether it’s diving into a complex problem, mastering a new tool, or adapting to emerging trends, I approach every learning experience with enthusiasm and determination. For me, the process of discovery and growth is as rewarding as the outcomes it leads to.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={quick_learner}
          width={900}
          height={900}
          className="h-full w-full object-cover"
          alt="Quick Learner"
        />
      </div>
      ),
    },
  ];
  export function about() {
    return (
      <div className="py-20 " id='about'>
        <StickyScroll content={content} />
      </div>
    );
  }

export default about
