import Link from "next/link";
import React from "react";

export default function ResumeButton() {
    return (
        <Link
            className="dark:border-textDark dark:text-textDark hover:border-b dark:hover:border-b-lightGreen dark:hover:text-lightGreen text-xs pb-1"
            href={"/resume.pdf"}
            target="_blank"
            rel="noreferrer"
        >
            View PDF Version
        </Link>
    );
}
