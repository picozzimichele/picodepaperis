"use client";

import React from "react";

export default function Contact({ svg }: { svg?: any }) {
    return (
        <a
            className={`flex flex-col items-center font-rigidSquare dark:text-headerDark dark:hover:text-lightGreen hover:text-lightGreen gap-1`}
            href="mailto:michele.g.picozzi@gmail.com"
        >
            <div className="sm:hidden h-4 w-4">{svg}</div>
            <p className="text-[10px] sm:text-xs">Contact</p>
        </a>
    );
}
