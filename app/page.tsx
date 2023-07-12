"use client";
import SocialLink from "@/components/header/SocialLink";
import Layout from "@/components/layout/Layout";
import GithubSvg from "@/public/svg/GithubSvg";
import LinkedinSvg from "@/public/svg/LinkedinSvg";
import RynoSvg from "@/public/svg/RynoSvg";

export default function Home() {
    return (
        <Layout>
            <div className="flex w-full h-full pt-10">
                <div className="flex flex-col gap-4">
                    <p className="dark:text-slate-200 text-4xl sm:text-5xl font-bold">Michele Picozzi</p>
                    <p className="max-w-md font-figtree">
                        Oh, hi! I did not see you there!<br></br> I am a Full Stack Developer coding Smart Contracts in Solidity with a passion for Desing,
                        Front-end and building Games.
                    </p>
                    <div className="flex sm:hidden gap-6 mt-2">
                        {" "}
                        <SocialLink svg={<GithubSvg />} link={"https://github.com/picozzimichele"} />
                        <SocialLink svg={<LinkedinSvg />} link={"https://www.linkedin.com/in/picozzimichele/"} />
                    </div>
                </div>
                <div className="flex absolute bottom-0 -right-[10%] h-[70%] pointer-events-none opacity-10">
                    <RynoSvg />
                </div>
            </div>
        </Layout>
    );
}
