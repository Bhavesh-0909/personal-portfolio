interface Education {
    id: number;
    name: string;
    affilated: string;
    major: string;
    resultType: string;
    result: string;
    duration: string;
}

export const education: Education[] = [
    {
        id: 1,
        name: "Lokamanya Tilak College of Engineering",
        affilated: "University of Mumbai",
        major: "Computer Science and Engineering (Internet of things & Cybersecurity including Blockchain Technology)",
        resultType: "CGPA",
        result: "7.62",
        duration: "2022 - 2026"
    },
    {
        id: 2,
        name: "St. Wilfred's School",
        affilated: "CBSE",
        major: "Science - PCM",
        resultType: "Percentage",
        result: "69%",
        duration: "2020 - 2022"
    }
]