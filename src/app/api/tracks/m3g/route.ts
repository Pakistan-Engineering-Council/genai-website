import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "Metaverse, 3D, and GenAI Integration",
    duration_weeks: 13,
    description: [
      " This specialization will teach students how to create and use 3D models and other immersive content manually and with generative AI. This is relevant to fields such as gaming, marketing, and architecture.",
    ],
    outline: [
      {
        title: "Metaverse, 3D, and GenAI Integration",
        children: [
          [
            {
              type: "text",
              text: "Benefits:",
            },
          ],
          [
            {
              type: "list",
              children: [
                [
                  {
                    type: "text",
                    text: "Learn how to use generative AI to create realistic and immersive 3D models.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Develop the skills necessary to work in the growing field of virtual reality (VR) and augmented reality (AR).",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Apply generative AI to solve real-world problems in areas such as product design, marketing, and education.",
                  },
                ],
              ],
            },
          ],
        ],
      },
    ],
  });
}
