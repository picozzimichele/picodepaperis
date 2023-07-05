import ProjectCard from "@/components/project-card/ProjectCard";
import React from "react";

const projects = [
    {
        title: "Project 1",
        projectWebsite: "https://www.google.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
        image: "/images/imageTest.webp",
        stack: ["React", "NextJS", "TailwindCSS"],
        gitHubLink: "https://www.google.com",
    },
    {
        title: "Project 1",
        projectWebsite: "https://www.google.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
        image: "/images/imageTest.webp",
        stack: ["React", "NextJS", "Tailwind", "Solidity", "Hardhat", "EthersJS"],
        gitHubLink: "test",
    },
    {
        title: "Project 1",
        projectWebsite: "https://www.google.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
        image: "/images/imageTest.webp",
        stack: ["React", "NextJS", "TailwindCSS"],
        gitHubLink: "test",
    },
    {
        title: "Project 1",
        projectWebsite: "https://www.google.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
        image: "/images/imageTest.webp",
        stack: ["React", "NextJS", "TailwindCSS"],
        gitHubLink: "test",
    },
    {
        title: "Project 1",
        projectWebsite: "https://www.google.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
        image: "/images/imageTest.webp",
        stack: ["React", "NextJS", "TailwindCSS"],
        gitHubLink: "test",
    },
    {
        title: "Project 1",
        projectWebsite: "https://www.google.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
        image: "/images/imageTest.webp",
        stack: ["React", "NextJS", "TailwindCSS"],
        gitHubLink: "test",
    },
];

export default function Projects() {
    return (
        <div className="w-full mx-auto py-10">
            <div className="flex flex-col w-full">
                <p className="font-figtree text-xl font-bold">I like to build, break and try new things</p>
                <p className="font-figtree text-xs">Check some of my work below</p>
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
    );
}
