import React from "react";

export default function StackTagSkill({ name }: { name: string }) {
    return (
        <div className="flex border dark:border-[#38a3a5] border-[#0677A1] rounded-[3px] p-1 text-xs font-rigidSquare items-center justify-center text-center">
            <p className="dark:text-[#38a3a5] text-[#0677A1]">{name}</p>
        </div>
    );
}
