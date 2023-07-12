import React from "react";
import StackTagSkill from "../project-card/StackTagSkill";

export default function SkillSet({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 items-center">
            <p className="text-xs dark:text-headerDark">{title} - </p>
            {skills.map((skill, index) => (
                <StackTagSkill key={index} name={skill} />
            ))}
        </div>
    );
}
