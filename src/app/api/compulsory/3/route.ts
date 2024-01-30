import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective:
      "API Design, Development, and Deployment using FastAPI, Containers, and OpenAPI Specifications",
    duration_weeks: 13,
    description: [
      "GenEng revolution being led by developers who build deep proficiency in how to best leverage and integrate generative AI technologies into applications",
    ],
    outline: [
      {
        title: "API, Database, API economy, and API-as-a-Product",
        children: [
          [
            {
              type: "text",
              text: "An API-as-a-Product is a type of Software-as-a-Service that monetizes niche functionality, typically served over HTTP. OpenAI APIs are themselves this kind of service. An application programming interface economy, or API economy, refers to the business structure where APIs are the distribution channel for products and services. In this quarter we will learn to develop APIs not just as a backend for our frontend but also as a product itself. In this model, the API is at the core of the business's value.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Technologies we will be using",
            },
            {
              type: "text",
              text: "We Will be using following technologies for API development:",
            },
            {
              type: "list",
              children: [
                [
                  {
                    type: "text",
                    text: "Python-based FastAPI as our core library",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Pedantic",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "SQLAlchemy",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Postgresql databases",
                  },
                ],
              ],
            },
          ],
          [{ type: "sub-heading", text: "Docker" }],

          [
            {
              type: "text",
              text: "Docker containers revolutionize the software development lifecycle by providing consistency and reliability across different stages of a project.In the development phase, Docker allows for the creation of isolated environments. With containers, developers can ensure that their applications run consistently, regardless of the underlying infrastructure.",
            },
          ],

          [
            {
              type: "text",
              text: " For local development, we will be using Docker Compose and DevPod which is Dev-Environments-As-Code, for testing Pytest and Testcontainers, and for deployment Google Cloud Run, Azure Container Service, and Kubernetes. We will be using Terraform as our Infrastructure as Code (IaC) tool. ",
            },
          ],

          [
            {
              type: "sub-heading",
              text: "OpenAI ChatGPT 4 and Google's Gemini Usage to Develop API as Product.",
            },
          ],

          [
            {
              type: "text",
              text: "The development process for creating API-as-a-Product involves the utilization of cutting-edge technologies such as OpenAI Chat GPT 4, Google Gemini APIs, and Langchain. These advanced tools play a crucial role in shaping the functionality and capabilities of the API product. OpenAI's Chat GPT 4 provides state-of-the-art natural language processing capabilities, enabling enhanced communication and interaction. Google Gemini APIs contribute to the robustness and versatility of the API by leveraging Google's extensive resources and infrastructure. Langchain, on the other hand, adds an additional layer of sophistication, potentially incorporating advanced language-related features into the API-as-a-Product. Through the synergistic integration of these technologies, the resulting API promises to deliver a powerful and comprehensive solution, catering to diverse applications and user needs.",
            },
          ],
        ],
      },
    ],
  });
}
