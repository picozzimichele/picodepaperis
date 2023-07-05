"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderLink({ title, href }: { title: string; href: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link className={`hover:text-[#38a3a5] ${isActive ? "text-[#38a3a5]" : ""}`} href={href}>
            {title}
        </Link>
    );
}
