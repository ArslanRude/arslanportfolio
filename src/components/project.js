"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function project() {
    return (
        (
            <>
                <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10"  id="project">
                    <h2 className="text-7xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                        Projects
                    </h2>
                    <p
                        className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm text-justify">
                        Project that I have worked on in the past.
                        Here are some of the projects that showcase my skills and experience in problem-solving. Each project highlights a unique aspect of my work and demonstrates my ability to create functional and aesthetically pleasing solutions.
                    </p>
                </div>
                <div className="h-screen py-20 w-full">

                    <LayoutGrid cards={cards} />
                </div>
            </>
        )
    );
}

const SkeletonOne = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Wild Life Saga
            </p>
            <p className="font-normal text-base my-4  text-neutral-200 text-justify">
                Console game where you can play as a farmer and take care of your animals. Feed theme and make sure they are healthy and happy.
            </p>
        </div>)
    );
};

const SkeletonTwo = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                New App
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4  text-neutral-200 text-justify">
                A mobile app which help you to stay up to date with the latest news and trends. It&apos;s a place where you can find everything you need to know about what&apos;s happening in the world.
            </p>
        </div>)
    );
};
const SkeletonThree = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Fire Wall
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A  Firewall with powerfull AI model to protect you from visiting harmful websites and downloading malicious files. It&apos;s a must-have tool for anyone who wants to stay safe online
            </p>
        </div>)
    );
};
const SkeletonFour = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Portfolio
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Arslan's Portfolio is a showcase of his work and skills. It&apos;s a place where you can see all the projects he has worked on and learn more about his experience and expertise.
            </p>
        </div>)
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://i.imghippo.com/files/FvK2993epc.jpg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://i.imghippo.com/files/rlY2489ar.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: "https://i.imghippo.com/files/Bj3358I.png",
            },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:"https://i.imghippo.com/files/URT7299PAc.png",
        
    },
];


export default project
