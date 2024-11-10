import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/project-card/ProjectCard";
import React from "react";

const projects = [
    {
        title: "Wemote",
        projectWebsite: "https://www.wemote.co/",
        description:
            "Top remote work places, anywhere in the world. Website to track coworking spaces and remote work places. Built with NextJS, Tailwind and MongoDB.",
        image: "/images/projects/wemote.png",
        stack: ["MongoDB", "NextJS", "Tailwind", "TypeScript", "Zod"],
    },
    {
        title: "Silder CSS",
        projectWebsite: "https://www.picozzimichele.com/slider",
        description:
            "Fun Slider Project in 3D built only using CSS and HTML. The project can be used as a template for any website.",
        image: "/images/projects/slider-carousel.png",
        stack: ["CSS", "HTML", "Keyframes"],
    },
    {
        title: "Goat Gaming",
        projectWebsite: "https://goatgaming.com/",
        description:
            "GOAT Gaming is the ultimate platform to play, compete, and win prizes, available anytime, anywhere. Built from 0 to hero in 6 months. The platform is fully functional and had 1M+ users in the first month. With MightyBearGames.",
        image: "/images/projects/goatgaming.png",
        stack: ["DynamoDB", "Auth0", "AWS", "TypeScript", "Ethers"],
    },
    {
        title: "ItalianTechJobs",
        projectWebsite: "https://www.italiantechjobs.com/",
        description:
            "Italian Tech Jobs curates the best tech jobs at leading companies and startups in Italy & Europe. The leading board for tech jobs in Italy. Built this to help other fellow developers find a job in Italy.",
        image: "/images/projects/italiantechjobs.png",
        stack: ["Nodejs", "MongoDB", "NextJS", "Tailwind", "Auth0"],
    },
    {
        title: "Arcadians Reloaded",
        projectWebsite: "https://arcadians.io/",
        description:
            "Built from start to finish the website for the Arcadians Reloaded NFT mint. Mint was fully sold out through the website in June 2023. It inludes a JavaScript game and a BabylonJS avatar builder.",
        image: "/images/projects/arcadians-io.png",
        stack: ["Solidity", "Web3", "Ethers", "BabylonJS", "TypeScript"],
    },
    {
        title: "CoworkSurf",
        projectWebsite: "https://www.coworksurf.com/",
        description:
            "What can I say, I love surfing and I love coding. So I decided to build a website for remote workers who share the same passion. Still active with 40 partners, 10k+ users and 1k+ monthly visitors, generating between 20-50 bookings per month.",
        image: "/images/projects/coworksurf.png",
        stack: ["Nodejs", "AWS", "NextJS", "Tailwind", "SQL"],
    },
    {
        title: "Tanuki Travel App Companion",
        projectWebsite: "https://tanukitravel.com/",
        description:
            "Follow and Share travel plans with your friends around the globe! Built with NextJS, Node.js and MongoDB. Simple App to share your travel plans. Free to use and open-source.",
        image: "/images/projects/tanuki-travel-main.png",
        stack: ["Node.js", "MongoDB", "Nextjs", "TypeScript"],
    },
    {
        title: "Arcadia Survivor",
        projectWebsite: "http://survivors-dev.outplay.games.s3-website-us-east-1.amazonaws.com/",
        description:
            "Vampire Survivor inspired Unity Game with playable NFT characters. Integrated with Colyseus technology for multiplayer. Owned by Ouplay Games. Built by me and Gabriel Menezes. If AWS link still works you can play a test demo",
        image: "/images/projects/survivors.png",
        stack: ["Unity", "Colyseus", "C#", "Ethers", "ERC721"],
    },
    {
        title: "Three-js with Dalle logo generator",
        projectWebsite: "https://64b64c8db7e434432a5a367d--regal-mandazi-72a3db.netlify.app/",
        description:
            "Website using threejs models and OpenAI DALL-E APIs. Built with Vite and a simple nodejs server to generate the logos with API calls to OpenAI DALL-E.",
        image: "/images/projects/shirt-threejs.png",
        stack: ["Framer", "TypeScript", "Vite", "OpenAI", "Canva"],
        gitHubLink: "https://github.com/picozzimichele/threejs-shirt",
    },
    {
        title: "e-commerce example Sneaker",
        projectWebsite: "https://sneaker-tanuki.vercel.app/",
        description:
            "Sample example for an e-commerce website. Built with NextJS, Tailwind and MongoDB. The website is fully functional and ready to be deployed and used as a layout base for any e-commerce.",
        image: "/images/projects/sneaker.png",
        stack: ["Node.js", "MongoDB", "Nextjs", "TypeScript"],
        gitHubLink: "https://github.com/picozzimichele/sneaker-tanuki",
    },
    {
        title: "CryptoKet NFT Marketplace",
        projectWebsite: "https://tanukiket-nft.vercel.app/",
        description:
            "Fully deployed live on the Sepolia netweork, this example marketplace allows for buying, listing and reselling NFTs across different collections. Built with Solidity, Hardhat, Ethers, Nextjs and Tailwind.",
        image: "/images/projects/crypto-ket.png",
        stack: ["Solidity", "Hardhat", "Ethers", "ERC721", "Nextjs"],
        gitHubLink: "https://github.com/picozzimichele/ntf-marketplace",
    },
    {
        title: "Apple Scroll Effect",
        projectWebsite: "https://scrolling-effect-react.vercel.app/",
        description:
            "A very simple scrolling effect made with React and Tailwind for anyone to implement. The effect is based on the Apple website.",
        image: "/images/projects/apple-scroll.png",
        stack: ["React", "TypeScript", "NextJS", "Tailwind", "Canva"],
        gitHubLink: "https://github.com/picozzimichele/apple-scrolling-effect-react",
    },
    {
        title: "Avatar Builder",
        projectWebsite: "https://arcadians.io/avatarMinter",
        description:
            "Built with BabylonJS and React, the Avatar Builder allows users to create their own avatar and mint it on the blockchain. The minting process is handled by Web3 and the Smart Contract. Each equipment is an ERC1155 and together they create the unique ERC721.",
        image: "/images/projects/avatar-builder.png",
        stack: ["Solidity", "BabylonJS", "ERC1155", "ERC721", "Web3"],
    },
    {
        title: "Miroir Sala da Barba",
        projectWebsite: "https://www.miroirmilano.com/",
        description:
            "From Design to build the website for one of the best barber shops in Milan. Hosted on Vercel and the domain is managed by Cloudflare.",
        image: "/images/projects/miroir.png",
        stack: ["React", "TypeScript", "NextJS", "Tailwind", "Cloudflare", "Figma"],
        gitHubLink: "https://github.com/picozzimichele/miroir",
    },
    {
        title: "Social App Threads",
        projectWebsite: "https://social-app-mongo.vercel.app/",
        description: "A Full Stack social app website built with Next.js13 MongoDB and Clerk",
        image: "/images/projects/thread-app.png",
        stack: ["React", "TypeScript", "NextJS", "MongoDB", "Clerk"],
        gitHubLink: "https://github.com/picozzimichele/social-app-mongo",
    },
    {
        title: "ETH Gifs sender",
        projectWebsite: "https://64c0ca04288a3532ce1d8757--lively-queijadas-349fbd.netlify.app/",
        description:
            "Connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code, and giphy API.",
        image: "/images/projects/eth-card.png",
        stack: ["React", "TypeScript", "Vite", "Solidity", "Ethers"],
        gitHubLink: "https://github.com/picozzimichele/eth-send",
    },
    {
        title: "Doodle Jump",
        projectWebsite: "https://picozzimichele.itch.io/doodle-jump-picozzimichele",
        description:
            "Simple Doodle Jump game made with Unity. I built this game to learn the basics of Unity and C#. Play a round and get the highest score!",
        image: "/images/projects/doodlejump.png",
        stack: ["Unity", "C#"],
        gitHubLink: "https://github.com/picozzimichele/doodlejump",
    },
    {
        title: "Gaming Website",
        projectWebsite: "https://arcadia.fun/",
        description:
            "Blockchain based tournament gaming website where users can create tournaments with retro games and compete between each other. Built while working at OP Games. The website is integrated with the OP Games wallet and OP Tournament Smart Contract.",
        image: "/images/projects/arcadia-fun.png",
        stack: ["Solidity", "TypeScript", "Nextjs", "Ethers", "Web3"],
    },
    {
        title: "Astar PathFinding Visualizer",
        projectWebsite: "https://pathfinder-afc48.web.app/",
        description:
            "Simple visualizer for Astar alghorythm. Built this project to implement the same alghorythm logic in a game.",
        image: "/images/projects/astar.png",
        stack: ["JavaScript", "CSS", "HTML"],
        gitHubLink: "https://github.com/picozzimichele/pathfinder",
    },
    {
        title: "Personal Website",
        projectWebsite: "https://picozzimichele.com/photography",
        description:
            "Built my personal website with NextJS and Tailwind. I wanted to keep it simple and clean. Since you are already here, have a look around.",
        image: "/images/projects/picozzimichele.png",
        stack: ["TypeScript", "Tailwind", "Nextjs", "Figma"],
        gitHubLink: "https://github.com/picozzimichele/picodepaperis",
    },
    {
        title: "TileVania",
        projectWebsite: "https://picozzimichele.itch.io/dungeon-vania",
        description:
            "Basic 2D platformer game made with Unity. I built this game to learn the basics of Unity and C#. Play a round and run like the wind!",
        image: "/images/projects/tilevania.png",
        stack: ["Unity", "C#", "Pixel Art"],
        gitHubLink: "https://github.com/picozzimichele/RedVania",
    },
    {
        title: "NFT Marketplace",
        projectWebsite: "https://marketplace.arcadia.fun/",
        description:
            "NFT Marketplace built while working at OP Games. The marketplace is integrated with the arcadia.fun website and the OP Games wallet. It allows users to buy and sell usable in-game items and tournament passes.",
        image: "/images/projects/marketplace.png",
        stack: ["Solidity", "TypeScript", "Nextjs", "Ethers", "Web3"],
    },
    {
        title: "Hangman Guessing Game",
        projectWebsite: "https://hangman-mp.netlify.app/",
        description: "Simple online hangman game, test it and try to guess the word!",
        image: "/images/projects/hangman.png",
        stack: ["React", "JavaScript", "Netlify"],
    },
];

export default function Projects() {
    return (
        <Layout>
            <div className="w-full mx-auto md:py-5">
                <div className="flex flex-col w-full">
                    <p className="font-figtree text-xl font-bold dark:text-headerDark">
                        I like to build, break and try new things
                    </p>
                    <p className="font-figtree text-xs">
                        Check some of my work below or{" "}
                        <a
                            className="dark:hover:text-headerDark"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/picozzimichele"
                        >
                            github
                        </a>
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            projectWebsite={project.projectWebsite}
                            description={project.description}
                            image={project.image}
                            stack={project.stack}
                            gitHubLink={project.gitHubLink}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
