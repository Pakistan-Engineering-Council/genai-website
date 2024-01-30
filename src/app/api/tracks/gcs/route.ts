import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 3,
    objective: "GenAI for Cyber Security",
    duration_weeks: 13,
    description: [
      "A comprehensive journey through the symbiotic relationship between AI and cybersecurity.",
    ],
    outline: [
      {
        title: "GenAI for Cyber Security",
        children: [
          [
            {
              type: "sub-heading",
              text: "Strengthen threat detection and response",
            },
          ],
          [
            {
              type: "text",
              text: "GenAI can be used to rapidly detect and respond to cyber threats by analyzing large volumes of security data in real time, identifying anomalies, and suggesting appropriate countermeasures.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Enhance security monitoring and analysis",
            },
          ],
          [
            {
              type: "text",
              text: "GenAI can assist security analysts in monitoring and analyzing security logs, automating threat detection, and providing insights into security risks and vulnerabilities.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Improve threat intelligence",
            },
          ],
          [
            {
              type: "text",
              text: "GenAI can be used to gather and analyze threat intelligence from various sources, enabling organizations to stay informed about the latest threats and trends and proactively strengthen their security posture.",
            },
          ],
        ],
      },
    ],
  });
}
