import React from "react";

export default function CompanySelector({ onClick, companyName, title }: { onClick: any; companyName: string; title: string }) {
    return (
        <button
            onClick={onClick}
            className={`border-l text-xs text-left px-4 py-3 ease-in-out duration-[300ms] ${
                companyName === title ? "text-lightGreen border-l border-lightGreen dark:bg-bgHover bg-zinc-100" : "dark:border-white border-zinc-200"
            } hover:text-lightGreen hover:bg-zinc-100 dark:hover:bg-bgHover py-2`}
        >
            {title}
        </button>
    );
}
