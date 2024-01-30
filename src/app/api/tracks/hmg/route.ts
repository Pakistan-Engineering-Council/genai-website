import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "Healthcare and Medical GenAI",
    duration_weeks: 13,
    description: [
      " This specialization will teach students how to use generative AI to improve healthcare and medical research. This is relevant to fields such as drug discovery, personalized medicine, and surgery planning.",
    ],
    outline: [
      {
        title: "Healthcare and Medical GenAI",
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
                    text: "Learn how to use generative AI to identify diseases, develop new drugs, and personalize treatment plans.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Gain a deeper understanding of the ethical implications of using generative AI in healthcare.",
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
