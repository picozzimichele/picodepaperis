import React from "react";

export default function CompanySelector({ onClick, companyName, title }: { onClick: any; companyName: string; title: string }) {
    return (
        <button
            onClick={onClick}
            className={`border-l text-xs text-left px-4 py-3 ease-in-out duration-[300ms] ${
                companyName === title ? "text-red-500 border-l border-red-500 bg-gray-200" : "border-white"
            } hover:text-red-500 hover:bg-gray-200 py-2`}
        >
            {title}
        </button>
    );
}
