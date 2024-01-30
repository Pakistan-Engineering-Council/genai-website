import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "GenAI for Sales and Marketing",
    duration_weeks: 13,
    description: [
      " This specialization will teach students how to use generative AI to improve sales and marketing campaigns. This is relevant to fields such as advertising, public relations, and customer service.",
    ],
    outline: [
      {
        title: "GenAI for Sales and Marketing",
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
                    text: "Learn how to use generative AI to create personalized marketing messages, generate leads, and track campaign performance.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Gain a deeper understanding of the latest marketing trends and how generative AI can be used to improve them.",
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
