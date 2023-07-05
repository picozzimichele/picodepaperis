import React from "react";
import MoonSvg from "../public/svg/MoonSvg";
import LinkedinSvg from "../public/svg/LinkedinSvg";
import GithubSvg from "../public/svg/GithubSvg";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <div className="flex w-full h-14 bg-green-100 dark:bg-slate-500">
            <div className="flex w-[97%] mx-auto mt-4 justify-between">
                <div className="flex items-center gap-2 relative">
                    <Link className="hover:text-[#38a3a5] flex items-center gap-1" href={"/"}>
                        <div className="flex rounded-full bg-gray-400 h-8 w-8 items-center justify-center">L</div>
                        <p>PICOZZIMICHELE</p>
                    </Link>
                    <div className="flex flex-col gap-6 absolute top-14 left-2">
                        <a className="scale-150 hover:text-[#38a3a5]" href={"https://github.com/picozzimichele"} target="_blank" rel="noreferrer">
                            <GithubSvg />
                        </a>
                        <a className="scale-150 hover:text-[#38a3a5]" href={"https://www.linkedin.com/in/picozzimichele/"} target="_blank" rel="noreferrer">
                            <LinkedinSvg />
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <HeaderLink title={"PROJECTS"} href={"/projects"} />
                        <HeaderLink title={"EXPERIENCE"} href={"/experience"} />
                        <HeaderLink title={"PHOTOGRAPHY"} href={"/photography"} />
                        <HeaderLink title={"CONTACT"} href={"/contact"} />
                    </div>
                    <button className="hover:cursor-pointer">
                        <MoonSvg />
                    </button>
                </div>
            </div>
        </div>
    );
}
