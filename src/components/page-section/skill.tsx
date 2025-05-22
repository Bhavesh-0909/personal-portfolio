import { Badge } from "../ui/badge";
import { skills } from "@/data/skills";

function Skill() {
    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold">Skills</h3>
                <div className="flex gap-1.5 flex-wrap">
                    {skills.map((skill)=> <Badge>{skill}</Badge>)}
                </div>
            </div>
        </div>
    )
}

export default Skill;