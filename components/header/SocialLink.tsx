import React from "react";

export default function SocialLink({ svg, link }: { svg: JSX.Element; link: string }) {
    return (
        <a
            className="flex scale-150 hover:text-[#38a3a5] transition ease-in-out delay-150 duration-300 hover:-translate-y-1 h-5 w-5 items-center justify-center"
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {svg}
        </a>
    );
}
