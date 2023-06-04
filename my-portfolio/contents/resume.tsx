export interface Job {
    id: number
    title: string
    company: string
    dates: string
    duties: string[]
}

export const Jobs: Job[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Company A",
        dates: "2018 - 2021",
        duties: [
            "Duty 1",
            "Duty 2",
            "Duty 3",
        ]
    },
    // Add more jobs as necessary
]