"use client";

import BulletPoint from "@/components/experience/BulletPoint";
import CompanySelector from "@/components/experience/CompanySelector";
import ResumeButton from "@/components/experience/ResumeButton";
import Layout from "@/components/layout/Layout";
import { useState, useEffect, useCallback, useMemo } from "react";

export default function Experience() {
    const companyList = useMemo(
        () => [
            {
                name: "OP Games",
                title: "Full Stack Web3 Developer",
                date: "December 2021 - present | Remote",
                responsibilities: [
                    "Leading Front-end, Smart-Contract and Games integration team.",
                    "Built gaming website, NFT marketplace, Avatar-Builder and website for NFT mint with Typescript, React, Web3, Solidity, BabylonJS, Next.js",
                    "Smart-Contract writing, auditing and integration for website, marketplace, mint, tournaments and games.",
                    "Integrated both Unity and JavaScript based games with Smart Contracts. Helping indie dev adopting blockchain technologies and Colyseus server for multiplayer games.",
                    "Stack Website: React, Typescript, Redux, Solidity, Next.js, Web3, Tailwind, Hardhat",
                ],
                website: "https://www.opgames.org/",
            },
            {
                name: "CoworkSurf",
                title: "Co-founder and Full Stack Developer",
                date: "September 2021 - April 2022 | Remote",
                responsibilities: [
                    "Co-Founder and Full Stack Developer. Built website from zero to production with only one other dev in less than 6 months.",
                    "Website generates around 200 booking requests per month, still fully self running today but no longer been improved on from code base, only actively managing bookings and partners.",
                    "Coworksurf is the largest network of coworking & coliving spaces around the world for the inspiring community of surf lifestyle lovers, solopreneurs, as well as offsites and team retreats for teams.",
                    "Built with Next.js, Typescript, React, Tailwind CSS, Nodejs, Stripe",
                ],
                website: "https://www.coworksurf.com/",
            },
            {
                name: "Microsoft Japan",
                title: "Global Commercial Executive",
                date: "July 2017 - October 2021 | Tokyo",
                responsibilities: [
                    "Managing from Tokyo HQ the Downstream Global Account Team for Sony, Hitachi, Fujitsu, Canon, NTT, Panasonic, Toyota & Toshiba in EMEA and USA (top 100 Microsoft's customer by revenue).",
                    "Portfolio of clients with a total revenue of 1.1B USD yearly for Microsoft, with a YoY growth between 10-20%. Traveling up to 60% of the time to meet customers, partners and team members.",
                    "Focusing on Azure Cloud adoption and M365 usage, winner of Microsoft Hybrid Server and Cloud Enrollment award for Azure transformational deal.",
                ],
                website: "https://www.microsoft.com/ja-jp",
            },
            {
                name: "Bitfinex",
                title: "KYC and Verification Consultant",
                date: "March 2018 - August 2018 | Remote",
                responsibilities: [
                    "Helped the company improving and streamline current KYC and Verification process, during a period of highe customer sign up and volume.",
                    "Worked with the team until new KYC division was fully operational and new team members were hired.",
                ],
                website: "https://www.bitfinex.com/",
            },
            {
                name: "Microsoft Italy",
                title: "Licensing Sales Specialist",
                date: "April 2016 - July 2017 | Milan",
                responsibilities: [
                    "Negotiation of Microsoft’s contracts and deals. Portfolio of clients includes Unicredit and Eni S.p.a. Global Accounts (top 200 Microsoft’s renewal worldwide) counting for 150M$ in revenues combined.",
                    "Achieved a 100% renewal rate for the portfolio of clients, with a YoY growth of 130%. Winner of Microsoft’s FY17 Top Performer Award for the highest growth in the team.",
                    "Other FY17 accounts include but not limited to Prada, Luxottica, Leroy Merlin and Italcementi.",
                ],
                website: "https://www.microsoft.com/it-it",
            },
            {
                name: "Microsoft Ireland",
                title: "Finance Program Manager",
                date: "June 2015 - April 2016 | Dublin",
                responsibilities: [
                    "PM role in the LCC Finance team managing over 40 Audits EPG&SMSP (56M$) with EY and Deloitte over the regions of Belgium, Norway and Ireland (fastest turnover and highest ROI in EMEA).",
                    "Managed the transition of the EPG&SMSP Audit from EY to Deloitte, with a 20% reduction in cost and 30% reduction in time.",
                ],
                website: "https://www.microsoft.com/en-ie",
            },
            {
                name: "Main Street Partners",
                title: "Investment Manager",
                date: "June 2014 - October 2014 | London",
                responsibilities: [
                    "Funds research and due diligence in the sustainable investments area actively seeking new investing opportunities",
                    "Marketing of MainStreet Partners’ investment services by preparing marketing material to provide our clients with updates on existing products and new investment ideas",
                ],
                website: "https://www.mspartners.org/",
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
        <Layout>
            <div className="flex flex-col w-full items-center mx-auto max-w-3xl justify-center pt-10">
                {/* Interactive Resume Section */}
                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-3">
                    {/* Clicable Companies */}
                    <div className="flex md:flex-col overflow-x-scroll scrollbar-hide">
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
                    <div className="flex-1">
                        <div className="flex gap-1">
                            <p className="font-figtree font-semibold dark:text-headerDark">{selectedCompany?.title}</p>
                            <a
                                className="font-figtree font-semibold dark:text-lightGreen text-lightGreen"
                                href={selectedCompany?.website}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>@</span> <span className="hover:border-b hover:border-b-lightGreen pb-1">{companyName}</span>
                            </a>
                        </div>
                        <p className="text-xs mt-1">{selectedCompany?.date}</p>
                        <div className="flex flex-col w-full gap-4 mt-4">
                            {companyList
                                .filter((company) => company.name === companyName)[0]
                                .responsibilities?.map((responsibility, index) => (
                                    <BulletPoint key={index} text={responsibility} />
                                ))}
                        </div>
                    </div>
                </div>
                {/* PDF Resume Button */}
                <div className="flex w-full pt-8 items-start justify-start">
                    <ResumeButton />
                </div>
            </div>
        </Layout>
    );
}
