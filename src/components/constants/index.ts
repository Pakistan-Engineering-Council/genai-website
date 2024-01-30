import { LACardType, OCCardType } from "../types";

const sentence = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

export const LearnAnyThingCardsData: LACardType[] = [{
    imgUrl: "/icons/learn-online.svg",
    imgAlt: "Learn Online",
    heading: "Learn Online",
    article: sentence,
}, {
    imgUrl: "/icons/certification.svg",
    imgAlt: "Earn a Certificate",
    heading: "Earn a Certificate",
    article: sentence,
}, {
    imgUrl: "/icons/expert.svg",
    imgAlt: "Learn From Expert",
    heading: "Learn From Expert",
    article: sentence,
}];


export const OurCoursesCardsData: OCCardType[] = [
    {
        Heading: "Typescript and Python Programming",
        imgALT: "Typescript and Python Programming",
        imgURL: "/assets/ourcourses/ts-python.png",
        duration: 13
    }, {
        Heading: "Web Application Development (Next.js)",
        imgALT: "Web Application Development (Next.js)",
        imgURL: "/assets/ourcourses/nextjs.png",
        duration: 13
    }, {
        Heading: "API Design, Development, and Deployment.",
        imgALT: "API Design, Development, and Deployment using FastAPI",
        imgURL: "/assets/ourcourses/fastapi.png",
        duration: 13
    }, {
        Heading: "GenAI, API, Database, Cloud Development, and DevOps",
        imgALT: "Learn Generative AI Engineering (GenEng)",
        imgURL: "/assets/ourcourses/genai.png",
        duration: 13
    },
]

