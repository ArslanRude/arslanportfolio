'use client';
import React from 'react';
import Textreveal from '@/components/textreveal';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import Link from 'next/link';
import Image from "next/image";
import arslan from "@/data/images/arslan-removebg.png";

const Home = () => {
    return (
        <div className='min-h-screen w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0' id='home'>
            <div className="p-4 relative z-10 w-full flex flex-col md:flex-row justify-between items-center">
                <div className="pb-10 md:pb-20 pt-10 md:pt-52 w-full md:w-1/2 pl-4 md:pl-40">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-40 pb-10 md:pb-20"
                        fill="#ff9999"
                    />
                    <h2 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-3">
                        Hy, there
                    </h2>
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        This is <span className='text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-100 to-red-700'> Arslan</span>
                    </h1>
                    <Textreveal />
                    <div className="pl-4 md:pl-20 pt-10 md:pt-20">
                        <Link href="/contact">
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-[#090a0a] text-black dark:text-red-400 border-neutral-200 dark:border-gray-700">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* <div className="z-20 w-full md:w-1/3 flex justify-left items-center mt-10 md:mt-0">
                    <Image
                        src={arslan}
                        width={300}
                        height={300}
                        className="rounded-full"
                        alt="Arslan"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Home;