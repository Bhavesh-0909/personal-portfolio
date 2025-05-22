import { Badge } from "../ui/badge";

function Skill() {
    const skills = ["C++", "Java", "JavaScript", "Typescript", "SQL", 
                    "PostgreSQL", "MongoDB", "HTML", "CSS", "Tailwind CSS", 
                    "React.js", "Next.js", "Git", "Github", "Node.js", 
                    "Express.js", "Firebase", "Backend", "Frontend", "GraphQL"];

    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold">Skills</h3>
                <div className="flex gap-1 flex-wrap">
                    {skills.map((skill)=> <Badge className="rounded-xl">{skill}</Badge>)}
                </div>
            </div>
        </div>
    )
}

export default Skill;