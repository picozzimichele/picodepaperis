"use client";

import BulletPoint from "@/components/experience/BulletPoint";
import CompanySelector from "@/components/experience/CompanySelector";
import { useState } from "react";

export default function Experience() {
    const companyList = [
        {
            name: "OP Games",
            title: "Full Stack Web3 Developer",
            date: "December 2021 - present",
            description: "OP Games is a blockchain gaming platform that allows users to play games and earn cryptocurrency.",
            responsibilities: [
                "Developed a web3 application using React, Next.js, and TypeScript.",
                "Integrated the application with the Ethereum blockchain using Web3.js.",
                "Implemented a custom ERC-721 token using OpenZeppelin.",
                "Developed a custom ERC-20 token using OpenZeppelin.",
            ],
        },
        {
            name: "CoworkSurf",
        },
        {
            name: "Microsoft Japan",
        },
        {
            name: "Bitfinex",
        },
        {
            name: "Microsoft Italy",
        },
        {
            name: "Microsoft Ireland",
        },
        {
            name: "Main Street Partners",
        },
    ];

    const text =
        "Developed a web3 application using React, Next.js, and TypeScript. Integrated the application with the Ethereum blockchain using Web3.js. Implemented a custom ERC-721 token using OpenZeppelin. Developed a custom ERC-20 token using OpenZeppelin.";

    const [work, setWork] = useState(companyList[0]);
    const [companyName, setCompanyName] = useState(companyList[0].name);
    return (
        <div className="flex w-full items-center mx-auto justify-center">
            <div className="bg-green-400 w-full flex max-w-3xl gap-3">
                <div className="flex flex-col bg-green-700">
                    {companyList.map((company, index) => (
                        <CompanySelector key={index} onClick={() => setCompanyName(company.name)} companyName={companyName} title={company.name} />
                    ))}
                </div>
                <div className="flex-1 bg-green-800">
                    <div className="flex gap-1">
                        <p className="font-figtree font-semibold">Full Stack Web3 Developer</p>
                        <a className="font-figtree font-semibold text-gray-100" href={"https://www.google.com/"} target="_blank" rel="noreferrer">
                            <span>@</span> <span className="hover:underline">OP Games</span>
                        </a>
                    </div>
                    <p className="text-xs">December 2021 - present</p>
                    <div className="flex flex-col w-full bg-red-400 gap-4">
                        <BulletPoint text={text} />
                        <BulletPoint text={text} />
                        <BulletPoint text={text} />
                        <BulletPoint text={text} />
                    </div>
                    <p>{work.name}</p>
                </div>
            </div>
        </div>
    );
}
