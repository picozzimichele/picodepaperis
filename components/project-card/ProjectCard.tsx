"use client";

import Arrow45Degree from "@/public/svg/Arrow45Degree";
import React from "react";
import StackTag from "./StackTag";
import GithubRepoLink from "./GithubRepoLink";
import Image from "next/image";

export default function ProjectCard({
    gitHubLink,
    projectWebsite,
    stack,
    title,
    description,
    image,
}: {
    gitHubLink: string;
    projectWebsite: string;
    stack: string[];
    title: string;
    description: string;
    image: string;
}) {
    return (
        <div className="flex flex-col gap-5">
            {/* card frame */}
            <a
                href={projectWebsite}
                target="_blank"
                rel="noreferrer"
                className="group aspect-[842/506] p-3 rounded-xl bg-gray-100 relative overflow-hidden hover:cursor-pointer"
            >
                <div className="flex flex-col w-full h-full justify-between relative z-10">
                    {/* Title and Icon */}
                    <div className="flex w-full justify-between">
                        <p className="font-figtree">{title}</p>
                        <div className="bg-white rounded-full aspect-square shrink-0 h-5 flex items-center justify-center">
                            <Arrow45Degree />
                        </div>
                    </div>
                    {/* Card Description on Hover */}
                    <div className="flex opacity-0 group-hover:opacity-100 w-full transition ease-in-out delay-100 duration-[1s]">
                        <p className="text-xs font-figtree">{description}</p>
                    </div>
                </div>
                <Image
                    className="object-cover group-hover:scale-105 transition ease-in-out delay-100 duration-[1s]"
                    src={image}
                    fill={true}
                    alt="Project Screenshot"
                />
            </a>
            {/* stack used */}
            <div className="flex flex-wrap justify-center gap-3">
                {gitHubLink && <GithubRepoLink projectLink={gitHubLink} />}
                {stack && stack.map((stackName, index) => <StackTag key={index} name={stackName} />)}
            </div>
        </div>
    );
}
