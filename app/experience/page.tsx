"use client";

import CompanySelector from "@/components/experience/CompanySelector";
import GhostSvg from "@/public/svg/GhostSvg";
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

    const [work, setWork] = useState("");
    return (
        <div className="flex w-full items-center mx-auto justify-center">
            <div className="bg-green-400 w-full flex max-w-3xl">
                <div className="flex flex-col">
                    {companyList.map((company, index) => (
                        <CompanySelector key={index} onClick={() => setWork(company.name)} work={work} title={company.name} />
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
                        <div className="flex w-full gap-2">
                            <div className="flex text-black mt-1">
                                <GhostSvg />
                            </div>
                            <p className="font-figtree text-sm">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,
                                content here, making it look like readable English.
                            </p>
                        </div>
                        <p className="font-figtree text-sm">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don look even slightly believable.
                        </p>
                        <p className="font-figtree text-sm">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old.
                        </p>
                        <p className="font-figtree text-sm">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don look even slightly believable.
                        </p>
                    </div>
                    <p>{work}</p>
                </div>
            </div>
        </div>
    );
}
