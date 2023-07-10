"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderLink({ title, href }: { title: string; href: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            className={`font-rigidSquare text-xs dark:text-headerDark dark:hover:text-lightGreen hover:text-lightGreen ${
                isActive ? "text-lightGreen dark:text-lightGreen" : ""
            }`}
            href={href}
        >
            {title}
        </Link>
    );
}
