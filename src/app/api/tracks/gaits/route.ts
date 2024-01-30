import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "GenAI for Automation and Internet of Things (IoT)",
    duration_weeks: 13,
    description: [
      "Embark on a transformative journey into the realms of automation and the Internet of Things (IoT).",
    ],
    outline: [
      {
        title: "GenAI for Automation and Internet of Things (IoT)",
        children: [
          [
            {
              type: "sub-heading",
              text: "Provide Multi-Modal User Interface for the IoT systems",
            },
          ],
          [
            {
              type: "text",
              text: "Multimodal interaction exploits the synergic use of different modalities to optimize the interactive tasks accomplished by the users. This allows a user to use several input modes such as speech, touch, and visual to interact with IoT systems.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Improve efficiency and accuracy of industrial processes",
            },
          ],
          [
            {
              type: "text",
              text: "By implementing GenAI in automation and IoT systems, industries can optimize their processes, reduce manual labor, and increase productivity while ensuring higher accuracy and consistency.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Enhance decision-making",
            },
          ],
          [
            {
              type: "text",
              text: "GenAI can analyze vast amounts of data collected by IoT sensors to derive valuable insights, enabling businesses to make informed decisions regarding operations, maintenance, and resource allocation.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Personalize user experiences",
            },
          ],
          [
            {
              type: "text",
              text: "GenAI can leverage IoT data to understand user preferences and behaviors, enabling the creation of personalized experiences across smart devices and IoT-enabled systems.",
            },
          ],
        ],
      },
    ],
  });
}
