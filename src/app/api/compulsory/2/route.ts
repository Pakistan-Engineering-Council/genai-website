import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 2,
    objective:
      "W2-201: Cutting-Edge Web Development: React, Next.js, Tailwind, and Advanced Styling with Shadcn UI",
    duration_weeks: 14,
    description: [
      "The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards. By the end of the quarter, the participants will be able to develop and deploy web UI's platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 14, Figma, Tailwind CSS, Shadcn UI, Chakra UI and Headless CMS (Sanity).",
    ],
    outline: [
      {
        title: "Next.js 14 Web Development",
        children: [
          [
            {
              type: "text",
              text: "Learn Next 14 Official Documentation",
            },
            {
              type: "link",
              text: "Nextjs Docs",
              url: "https://beta.nextjs.org/docs",
            },
          ],
          [
            {
              type: "text",
              text: "Latest Learn React Official Website",
            },
            {
              type: "link",
              text: "Reactjs Docs",
              url: "https://beta.reactjs.org/learn",
            },
          ],
          [
            {
              type: "text",
              text: "Learn Next.js 14 Learning Repo",
            },
            {
              type: "link",
              text: "Learning Repo",
              url: "https://github.com/panaverse/learn-nextjs",
            },
          ],
        ],
      },
      {
        title:
          "UI/UX Design with Figma, TailwindCSS, and Shadcn UI (Remote  Zoom Class)",
        children: [
          [
            {
              type: "text",
              text: "Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano",
            },
            {
              type: "link",
              text: "Designing-Prototyping-Interfaces-Figma-interactive",
              url: "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa",
            },
          ],
          [
            {
              type: "text",
              text: "Figma Design Kit for TailwindCSS",
            },
            {
              type: "link",
              text: "Figma for tailwind",
              url: "https://www.figma.com/community/file/768809027799962739",
            },
          ],
          [
            {
              type: "text",
              text: "Figma Design Kit for Chakra UI",
            },
            {
              type: "link",
              text: "Figma for chakra ui",
              url: "https://www.figma.com/community/file/971408767069651759",
            },
          ],
        ],
      },

      {
        title: "Next.js 14 using TailwindCSS and Shadcn UI",
        children: [
          [
            {
              type: "text",
              text: "Modern CSS with Tailwind, Second Edition by Noel Rappin",
            },
            {
              type: "link",
              text: "Modern css with tailwind second edition",
              url: "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/",
            },
          ],
          [
            {
              type: "text",
              text: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
            },
            {
              type: "link",
              text: "Introduction to Shadcn UI",
              url: "https://www.youtube.com/watch?v=08a2uDAwKEY",
            },
            {
              type: "link",
              text: "Why to use Shadcn UI?",
              url: "https://www.youtube.com/watch?v=CQuTF-bkOgc",
            },
          ],
        ],
      },

      {
        title: "Web 2.0 Projects",
        children: [
          [
            {
              type: "text",
              text: "Next.js Projects",
            },
            {
              type: "link",
              text: "Nextjs all projects",
              url: "https://github.com/panaverse/nextjs-projects",
            },
          ],
          [
            {
              type: "text",
              text: "Styling Next.js Projects using TailwindCSS",
            },
            {
              type: "link",
              text: "Styling nextjs projects",
              url: "https://github.com/panaverse/styling-nextjs-projects",
            },
          ],
          [
            {
              type: "text",
              text: "Todo Full-Stack App",
            },
            {
              type: "link",
              text: "Full-stack todo app",
              url: "https://github.com/ogzhanolguncu/min-todo",
            },
          ],
          [
            {
              type: "text",
              text: "Build a Twitter Clone",
            },
            {
              type: "link",
              text: "Twitter clone",
              url: "https://www.youtube.com/watch?v=nzJsYJPCc80",
            },
          ],
        ],
      },
    ],
  });
}
