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
            <div className="flex-1 aspect-[842/506] p-3 rounded-xl bg-green-400 relative overflow-hidden">
                <div className="flex w-full justify-between relative z-10">
                    <p>Title</p>
                    <div className="bg-white rounded-full aspect-square shrink-0 h-5 flex items-center justify-center">
                        <Arrow45Degree />
                    </div>
                </div>
                <Image
                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                    className="transition-opacity opacity-0 duration-[1s]"
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
