import GithubFullSvg from "@/public/svg/GithubFullSvg";
import React from "react";

export default function StackTag({ name }: { name: string }) {
    return (
        <div className="flex-1 bg-green-500 p-1 max-w-[80px] w-full text-xs font-rigidSquare items-center justify-center text-center">
            <p>{name}</p>
        </div>
    );
}
