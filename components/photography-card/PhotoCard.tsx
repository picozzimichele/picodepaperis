import React from "react";
import Image from "next/image";

export default function PhotoCard({ color, image, lazy }: { color: string; image: string; lazy?: boolean }) {
    return (
        <div className={`flex flex-1 aspect-[4/5] relative ${color}`}>
            <Image className="object-cover" src={image} fill={true} alt="Project Screenshot" loading={lazy ? "lazy" : undefined} />
        </div>
    );
}
