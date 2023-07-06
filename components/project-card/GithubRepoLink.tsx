import GithubFullSvg from "@/public/svg/GithubFullSvg";
import React from "react";

export default function GithubRepoLink({ projectLink }: { projectLink?: string }) {
    return (
        <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="flex border border-black hover:border-slate-300 rounded-sm p-1 items-center gap-2 hover:cursor-pointer hover:text-slate-300"
        >
            <GithubFullSvg />
            <p className="text-xs font-rigidSquare">Repo</p>
        </a>
    );
}
