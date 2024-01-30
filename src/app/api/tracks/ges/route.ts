import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "GenAI for Engineers",
    duration_weeks: 13,
    description: [
      " This specialization will teach students how to use generative AI to improve engineering design and problem-solving. This is relevant to fields such as manufacturing, construction, and product development.",
    ],
    outline: [
      {
        title: "GenAI for Engineers",
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
                    text: "Learn how to use generative AI to create simulations, optimize designs, and predict failures.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Gain a deeper understanding of the engineering design process and how generative AI can be used to improve it.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Prepare for a career in a growing field with high demand for skilled professionals.",
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
