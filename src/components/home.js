'use client';
import React from 'react';
import Textreveal from '@/components/textreveal';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

const home = () => {
    return (
        <div className='min-h-screen md;h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden
    mx-auto py-10 md:py-0'>
            <div className="p-4 relative z-10 w-full text-left px-40   bottom-0">
                <div className="pb-10 md:pb-20 pt-10 md:pt-20 w-2/3">
                <Spotlight
                    className="-top-40 left-1/4 md:left-1/4 md:-top-40"
                    fill="#ff9999"
                />
                <h2 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to-neutral-400 py-3">
                    Hy, there
                </h2>
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to-neutral-400">
                    This is <span className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
            bg-gradient-to-b from-red-100 to-red-700'> Arslan</span>
                </h1>
                <Textreveal />
                </div>
                <div className=" w-1/3 flex justify-center items-end">
                    <Button 
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-[#090a0a] text-black dark:text-red-400
                         border-neutral-200 dark:border-gray-700"
                    >
                        Contect Me
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default home
