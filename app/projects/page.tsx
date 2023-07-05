import ProjectCard from "@/components/project-card/ProjectCard";
import React from "react";

export default function Projects() {
    return (
        <div className="w-full mx-auto bg-green-200 py-10">
            <div className="flex w-full font-figtree">I like to build, break and try new things</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}
