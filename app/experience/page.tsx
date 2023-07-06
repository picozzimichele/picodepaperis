"use client";

import { useState } from "react";

export default function Experience() {
    const [work, setWork] = useState("");
    return (
        <div className="flex w-full">
            <div className="bg-green-400 w-full flex">
                <div className="flex flex-col gap-4">
                    <div
                        onClick={() => {
                            setWork("cheers");
                        }}
                        className={`${work === "cheers" ? "text-red-500" : ""}`}
                    >
                        01
                    </div>
                    <div
                        onClick={() => {
                            setWork("job2");
                        }}
                    >
                        02
                    </div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                </div>
                <div className="flex-1 bg-green-800">
                    <p>{work}</p>
                </div>
            </div>
        </div>
    );
}
