import React from "react";
import PhotoCard from "./PhotoCard";

export default function PhotoColumn() {
    return (
        <div className="flex flex-col gap-4">
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </div>
    );
}
