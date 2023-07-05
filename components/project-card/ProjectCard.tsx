"use client";

import Arrow45Degree from "@/public/svg/Arrow45Degree";
import React from "react";
import StackTag from "./StackTag";
import GithubRepoLink from "./GithubRepoLink";
import Image from "next/image";

export default function ProjectCard() {
    return (
        <div className="flex flex-col gap-5">
            {/* card frame */}
            <div className="group flex-1 aspect-[842/506] p-3 rounded-xl bg-green-400 relative overflow-hidden hover:cursor-pointer">
                <div className="flex flex-col w-full h-full justify-between relative z-10">
                    {/* Title and Icon */}
                    <div className="flex w-full justify-between">
                        <p className="font-figtree">Title</p>
                        <div className="bg-white rounded-full aspect-square shrink-0 h-5 flex items-center justify-center">
                            <Arrow45Degree />
                        </div>
                    </div>
                    {/* Card Description on Hover */}
                    <div className="flex opacity-0 group-hover:opacity-100 w-full transition ease-in-out delay-150 duration-[2s]">
                        <p className="text-xs font-figtree">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                        </p>
                    </div>
                </div>
                <Image
                    className="group-hover:scale-105 transition ease-in-out delay-150 duration-[2s]"
                    src="/images/imageTest.webp"
                    fill={true}
                    alt="Project Screenshot"
                />
            </div>
            {/* stack used */}
            <div className="flex flex-wrap justify-center gap-3">
                <GithubRepoLink />
                <StackTag />
                <StackTag />
                <StackTag />
                <StackTag />
                <StackTag />
                <StackTag />
                <StackTag />
            </div>
        </div>
    );
}
