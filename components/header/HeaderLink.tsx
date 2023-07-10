"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderLink({ title, href, svg }: { title: string; href: string; svg?: any }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            className={`flex flex-col items-center font-rigidSquare dark:text-headerDark dark:hover:text-lightGreen hover:text-lightGreen gap-1 ${
                isActive ? "text-lightGreen dark:text-lightGreen" : ""
            }`}
            href={href}
        >
            <div className="sm:hidden h-4 w-4">{svg}</div>
            <p className="text-[10px] sm:text-xs">{title}</p>
        </Link>
    );
}
