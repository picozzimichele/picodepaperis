import React from "react";
import PhotoCard from "./PhotoCard";

export default function PhotoColumn({ color, pictureList, delay }: { color: string; pictureList: any; delay?: boolean }) {
    return (
        <div className="flex flex-col group gap-4">
            <div className={`flex flex-col gap-4 md:itemslide ${delay ? "md:delay-2" : ""}`}>
                {pictureList.map((picture: any) => (
                    <PhotoCard color={color} key={picture.name} image={picture.url} />
                ))}
            </div>
            <div className={`md:flex hidden flex-col gap-4 md:itemslide ${delay ? "md:delay-2" : ""}`}>
                {pictureList.map((picture: any) => (
                    <PhotoCard color={color} key={picture.name} image={picture.url} />
                ))}
            </div>
        </div>
    );
}
