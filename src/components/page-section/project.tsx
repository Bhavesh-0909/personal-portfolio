import { projects } from "@/data/project"
import { Badge } from "../ui/badge";
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import SampleImage from "@/assets/sample.jpg";

function Project() {
  return (
    <div>
      <div className="h-full w-full flex flex-col justify-center gap-3">
        <h3 className="text-2xl font-bold">Projects</h3>
        <div className="grid grid-cols-1 gap-5 mt-5 ">
          {projects.map((project) => (
          <div key={project.id} className="h-full w-full flex flex-col md:flex-row gap-2 border rounded-2xl overflow-hidden shadow-md">
              <img
                src={SampleImage}
                alt={project.title}
                width={200}
                height={200}
                className="w-full aspect-video md:w-[42%] h-full object-cover"
                loading="lazy"
              />
              <div className="w-full md:w-3/5 flex flex-col gap-3 justify-between p-2">
                <div className="w-full h-full flex flex-col justify-center gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-xs text-gray-400 font-semibold">{project.description}</p>
                  <div className="flex gap-0.5 flex-wrap">
                    {project.tags.map((tag) => (
                      <Badge variant="green" className="h-4 text-[8px] px-1.5" key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="rounded-[0.5rem] cursor-pointer" size="sm">
                        <Github className="mr-2" />
                        Github
                      </Button>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="cursor-pointer" size="sm">
                        <ExternalLink className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
