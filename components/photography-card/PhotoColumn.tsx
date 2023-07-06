import React from "react";
import PhotoCard from "./PhotoCard";

export default function PhotoColumn() {
    return (
        <div className="flex flex-col group gap-4">
            <div className="flex flex-col gap-4 group-hover:animationpaused itemslide">
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
            </div>
            <div className="flex flex-col gap-4 group-hover:animationpaused itemslide">
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
                <PhotoCard />
            </div>
        </div>
    );
}
