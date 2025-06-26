import { education } from "@/data/education";

function EducationPage() {
  return (
    <div>
        <div className="space-y-3">
            <h3 className="text-2xl font-bold">Education</h3>
            <div className="flex flex-col gap-2 w-full">
                {education.map((edu)=>
                    <div key={edu.id} className="flex gap-1.5 w-full h-full">
                        <div className='flex place-content-center items-center justify-center h-full w-fit p-1'>
                            <div className='bg-gray-600 rounded-full h-8 w-8 md:h-12 md:w-12 flex justify-center items-center'></div>
                        </div>

                        <div className="flex w-full flex-col gap-0.5 flex-wrap">
                            <h6 className="flex justify-between items-center"><span className="text-xs md:text-xl w-2/3 md:w-fit font-bold">{edu.name}</span> <span className="text-xs md:text-sm w-fit font-semibold text-gray-300">{edu.duration}</span></h6>
                            <p className="text-[8px] md:text-xs font-semibold text-gray-300">{edu.affilated}</p>
                            <p className="text-[8px] md:text-xs font-semibold text-gray-300">{edu.major}</p>
                            <p className="text-[8px] md:text-xs font-semibold text-gray-300">{edu.resultType} : {edu.result}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default EducationPage;