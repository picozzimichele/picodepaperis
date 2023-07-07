import React from "react";

export default function CompanySelector({ onClick, work, title }: { onClick: any; work: string; title: string }) {
    return (
        <button
            onClick={onClick}
            className={`border-l border-white text-xs text-left px-4 py-3 ease-in-out duration-[300ms] ${
                work === title ? "text-red-500 border-l border-red-500 bg-gray-200" : ""
            } hover:text-red-500 hover:bg-gray-200 py-2`}
        >
            {title}
        </button>
    );
}
