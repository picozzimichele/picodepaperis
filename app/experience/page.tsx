"use client";

import BulletPoint from "@/components/experience/BulletPoint";
import CompanySelector from "@/components/experience/CompanySelector";
import { useState, useEffect, useCallback, useMemo } from "react";

export default function Experience() {
    const companyList = useMemo(
        () => [
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
                website: "https://www.opgames.org/",
            },
            {
                name: "CoworkSurf",
                title: "Co-founder and Full Stack Developer",
                responsibilities: [
                    "Founder",
                    "Integrated the application with the Ethereum blockchain using Web3.js.",
                    "Implemented a custom ERC-721 token using OpenZeppelin.",
                    "Developed a custom ERC-20 token using OpenZeppelin.",
                ],
                website: "https://www.coworksurf.com/",
            },
            {
                name: "Microsoft Japan",
                title: "Global Commercial Executive",
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
        ],
        []
    );

    const filteredCompany = useCallback(
        (choosenCompany: string) => {
            const filteredCompany = companyList.filter((company) => company.name === choosenCompany)[0];
            return filteredCompany;
        },
        [companyList]
    );

    const [selectedCompany, setSelectedCompany] = useState(companyList[0]);
    const [companyName, setCompanyName] = useState(companyList[0].name);

    useEffect(() => {
        setSelectedCompany(filteredCompany(companyName));
    }, [companyName, filteredCompany]);
    return (
        <div className="flex w-full items-center mx-auto justify-center">
            <div className="bg-green-400 w-full flex max-w-3xl gap-3">
                <div className="flex flex-col bg-green-700">
                    {companyList.map((company, index) => (
                        <CompanySelector
                            key={index}
                            onClick={() => {
                                setCompanyName(company.name);
                            }}
                            companyName={companyName}
                            title={company.name}
                        />
                    ))}
                </div>
                <div className="flex-1 bg-green-800">
                    <div className="flex gap-1">
                        <p className="font-figtree font-semibold">{selectedCompany?.title}</p>
                        <a className="font-figtree font-semibold text-gray-100" href={selectedCompany?.website} target="_blank" rel="noreferrer">
                            <span>@</span> <span className="hover:underline">{companyName}</span>
                        </a>
                    </div>
                    <p className="text-xs">December 2021 - present</p>
                    <div className="flex flex-col w-full bg-red-400 gap-4">
                        {companyList
                            .filter((company) => company.name === companyName)[0]
                            .responsibilities?.map((responsibility, index) => (
                                <BulletPoint key={index} text={responsibility} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
