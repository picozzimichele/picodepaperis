import GhostSvg from "@/public/svg/GhostSvg";
import React from "react";

export default function BulletPoint({ text }: { text: string }) {
    return (
        <div className="flex w-full gap-2">
            <div className="flex text-black mt-1">
                <GhostSvg />
            </div>
            <p className="font-figtree text-sm">{text}</p>
        </div>
    );
}
