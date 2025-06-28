import { Badge } from "@/components/ui/badge";
import { hackathon } from "@/data/hackathon";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

function HackathonPage() {
  return (
    <div>
      <div className="h-full w-full flex flex-col justify-center items-center gap-3">
        <h3><Badge variant="purple" className='sm:text-3xl text-lg font-bold'>Hackathon</Badge></h3>
        <p className="text-center sm:w-2/3 w-full sm:text-lg text-xs text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. At error deleniti autem, beatae illo officia velit sequi unde quo ratione.</p>
        <div className="h-full w-full flex flex-col justify-center items-center">
          {hackathon.map((event)=> (
            <div key={event.id} className="h-full relative w-full flex flex-col px-8 md:px-10 py-4 md:py-5 border gap-1">
              <p className="text-xs text-gray-500 italic">{event.date}</p>
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.description}</p>
              <div className="flex gap-1 flex-wrap mt-2">
                {event.tags.map((tag) => (
                  <Badge variant="green" className="h-4 text-xs px-1.5" key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-1 mt-2">
                  {event.github && (
                    <a href={event.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="rounded-[0.5rem] cursor-pointer size-6">
                        <Github/>
                      </Button>
                    </a>
                  )}
                  {event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="cursor-pointer rounded-[0.5rem] size-6">
                        <ExternalLink/>
                      </Button>
                    </a>
                  )}
                </div>
                <div className="h-10 w-10 md:h-14 md:w-14 bg-white rounded-full absolute -left-5 bottom-3/5 md:-left-7 md:bottom-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HackathonPage;