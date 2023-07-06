import React from "react";
import Image from "next/image";

export default function PhotoCard({ color, image }: { color: string; image: string }) {
    return (
        <div className={`flex flex-1 aspect-[4/5] relative ${color}`}>
            <Image className="object-cover" src={image} fill={true} alt="Project Screenshot" />
        </div>
    );
}
