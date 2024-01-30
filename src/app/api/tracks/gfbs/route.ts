import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "GenAI for Accounting, Finance, and Banking",
    duration_weeks: 13,
    description: [
      " This specialization will teach students how to use generative AI to improve accounting, finance, and banking processes. This is relevant to fields such as fraud detection, risk management, and investment analysis.",
    ],
    outline: [
      {
        title: "GenAI for Accounting, Finance, and Banking",
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
                    text: "Learn how to use generative AI to automate tasks, identify patterns, and make predictions.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Gain a deeper understanding of the financial industry and how generative AI can be used to improve its processes.",
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
