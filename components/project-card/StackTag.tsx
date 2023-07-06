import GithubFullSvg from "@/public/svg/GithubFullSvg";
import React from "react";

export default function StackTag({ name }: { name: string }) {
    return (
        <div className="flex-1 border border-[#38a3a5] rounded-[3px] p-1 max-w-[80px] w-full text-xs font-rigidSquare items-center justify-center text-center">
            <p className="text-[#38a3a5]">{name}</p>
        </div>
    );
}
