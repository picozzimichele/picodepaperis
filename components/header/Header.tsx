import React from "react";
import LinkedinSvg from "../../public/svg/LinkedinSvg";
import GithubSvg from "../../public/svg/GithubSvg";
import Link from "next/link";
import SocialLink from "./SocialLink";
import TanukiLogoSvg from "@/public/svg/TanukiLogoSvg";
import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <>
            <div className="flex w-full h-14 bg-green-100 dark:bg-slate-500">
                <div className="flex w-[95%] mx-auto mt-4 justify-between">
                    <div className="flex items-center gap-2 relative">
                        <Link className="hover:text-[#38a3a5] flex items-center gap-1" href={"/"}>
                            <div className="flex rounded-full h-8 w-8 items-center justify-center scale-[5]">
                                <TanukiLogoSvg />
                            </div>
                            <p>PICOZZIMICHELE</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-10">
                            <HeaderLink title={"Experience"} href={"/experience"} />
                            <HeaderLink title={"Projects"} href={"/projects"} />
                            <HeaderLink title={"Photography"} href={"/photography"} />
                            <HeaderLink title={"Contact"} href={"/contact"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex fixed flex-col gap-6 bottom-10 items-center justify-center w-10 lg:left-8 left-2">
                <SocialLink svg={<GithubSvg />} link={"https://github.com/picozzimichele"} />
                <SocialLink svg={<LinkedinSvg />} link={"https://www.linkedin.com/in/picozzimichele/"} />
                <div className="border-b border-black rotate-90 w-20 bg-green-200 mt-12"></div>
            </div>
            <div className="hidden sm:flex flex-col gap-6 fixed bottom-10 items-center justify-center w-10 lg:right-8 right-2">
                <a
                    href="mailto:michele.g.picozzi@gmail.com"
                    className="font-rigidSquare rotate-90 text-xs hover:cursor-pointer hover:text-[#38a3a5] transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                >
                    michele.g.picozzi@gmail.com
                </a>
                <div className="border-b border-black rotate-90 w-20 bg-green-200 mt-[120px]"></div>
            </div>
        </>
    );
}
