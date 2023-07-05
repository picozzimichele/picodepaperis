import GithubFullSvg from "@/public/svg/GithubFullSvg";
import React from "react";

export default function GithubRepoLink({ projectLink }: { projectLink?: string }) {
    return (
        <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="flex bg-[#4078c0] rounded-full p-1 w-[70px] items-center gap-2 hover:cursor-pointer hover:text-[#6cc644]"
        >
            <GithubFullSvg />
            <p className="text-xs font-rigidSquare">Repo</p>
        </a>
    );
}
