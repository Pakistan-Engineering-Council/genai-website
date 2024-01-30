import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "Web3, Blockchain, and GenAI Integration Specialization",
    duration_weeks: 13,
    description: [
      " This specialization will teach students how to integrate generative AI with Web3 and blockchain technologies. This is relevant to fields such as finance, healthcare, and supply chain management.",
    ],
    outline: [
      {
        title: "Web3, Blockchain, and GenAI Integration Specialization",
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
                    text: "Learn how to create smart contracts and decentralized applications (dApps).",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Gain a deeper understanding of the potential of blockchain technology and how it can be used to improve business processes.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Develop the skills necessary to work in a rapidly growing field with high demand for skilled professionals.",
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
