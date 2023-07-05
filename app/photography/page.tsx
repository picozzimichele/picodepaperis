import PhotoColumn from "@/components/photography-card/PhotoColumn";
import React from "react";

export default function Photography() {
    return (
        <div className="flex w-full bg-green-200">
            <div className="flex flex-col w-full">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <PhotoColumn />
                    <PhotoColumn />
                    <PhotoColumn />
                    <PhotoColumn />
                    <PhotoColumn />
                </div>
            </div>
        </div>
    );
}
