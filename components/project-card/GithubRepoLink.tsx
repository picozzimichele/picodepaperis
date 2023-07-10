import GithubFullSvg from "@/public/svg/GithubFullSvg";
import React from "react";

export default function GithubRepoLink({ projectLink }: { projectLink?: string }) {
    return (
        <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="flex border border-black hover:border-lightGreen hover:text-lightGreen dark:border-textDark dark:hover:text-headerDark dark:hover:border-headerDark rounded-sm p-1 items-center gap-2 hover:cursor-pointer"
        >
            <GithubFullSvg />
            <p className="text-xs font-rigidSquare">Repo</p>
        </a>
    );
}
