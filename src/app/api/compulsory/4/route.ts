import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 4,
    objective: "Learn Generative AI Engineering (GenEng)",
    duration_weeks: 13,
    description: [
      "GenEng revolution being led by developers who build deep proficiency in how to best leverage and integrate generative AI technologies into applications",
    ],
    outline: [
      {
        title: "GenAI, API, Database, Cloud Development, and DevOps",
        children: [
          [
            {
              type: "text",
              text: "To get a detailed knowledge that what is generative AI watch this video.",
            },
          ],
          [
            {
              type: "link",
              text: "Introduction to Gen AI",
              url: "https://www.youtube.com/watch?v=G2fqAlgmoPo",
            },
          ],
          [
            {
              type: "sub-heading",
              text: `"ChatGPT API" or correctly: OpenAI API`,
            },
          ],
          [{ type: "text", text: "OpenAI API is a collection of APIs" }],
          [
            {
              type: "text",
              text: "APIs offer access to various Large Language Models (LLMs)",
            },
          ],
          [
            {
              type: "text",
              text: "LLM: Program trained to understand human language",
            },
          ],
          [
            {
              type: "text",
              text: "ChatGPT is a web service using the Chat completion API Uses:",
            },
          ],
          [
            {
              type: "list",
              children: [
                [
                  {
                    type: "text",
                    text: "gpt-3.5-turbo (free tier)",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "gpt-4.0 (paid tier)",
                  },
                ],
              ],
            },
          ],
          [
            {
              type: "sub-heading",
              text: `"ChatGPT API" or correctly: OpenAI API`,
            },
          ],
          [
            {
              type: "list",
              children: [
                [
                  {
                    type: "text",
                    text: "Chat completion: Given a series of messages, generate a response",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Function calling: Choose which function to call",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Image generation: Given a text description generate an image",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Speech to text: Given an audio file and a prompt generate a transcript",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Fine tuning: Train a model using input and output examples",
                  },
                ],
              ],
            },
          ],
          [
            {
              type: "sub-heading",
              text: "OpenAI Assistants API",
            },
          ],
          [
            {
              type: "text",
              text: "The new Assistants API is a stateful evolution of Chat Completions API meant to simplify the creation of assistant-like experiences, and enable developer access to powerful tools like Code Interpreter and Retrieval.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Chat Completions API vs Assistants API",
            },
          ],
          [
            {
              type: "text",
              text: "The primitives of the Chat Completions API are Messages, on which you perform a Completion with a Model (gpt-3.5-turbo, gpt-4, etc). It is lightweight and powerful, but inherently stateless, which means you have to manage conversation state, tool definitions, retrieval documents, and code execution manually.",
            },
          ],
          [
            {
              type: "text",
              text: "The primitives of the Assistants API are",
            },
          ],
          [
            {
              type: "list",
              children: [
                [
                  {
                    type: "text",
                    text: "Assistants, which encapsulate a base model, instructions, tools, and (context) documents,",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Threads, which represent the state of a conversation, and",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Runs, which power the execution of an Assistant on a Thread, including textual responses and multi-step tool use.",
                  },
                ],
              ],
            },
          ],
        ],
      },
      {
        title: "Future of GenAI",
        children: [
          [
            {
              type: "text",
              text: `“AI will be the greatest wealth creator in history because artificial intelligence doesn’t care where you were born, whether you have money, whether you have a PhD,” Higgins tells CNBC Make It. “It’s going to destroy barriers that have prevented people from moving up the ladder, and pursuing their dream of economic freedom.”`,
            },
          ],
          [
            {
              type: "text",
              text: `It’s already valued at almost $100 billion, and expected to contribute $15.7 trillion to the global economy by 2030.`,
            },
          ],
          [
            {
              type: "text",
              text: `“It’s not that if you don’t jump on it now, you never can,” Higgins says. “It’s that now is the greatest opportunity for you to capitalize on it.”`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.cnbc.com/2023/07/10/how-to-use-ai-to-make-money-right-now-say-experts.html",
              text: `AI will be the biggest wealth creator in the History.`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.zdnet.com/article/generative-ai-could-add-up-to-4-4-trillion-annually-to-global-economy/",
              text: `GenAi could add upto 4.4 trillion dollars annually to the global economy.`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#key-insights",
              text: `Research Report`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.bloomberg.com/news/newsletters/2023-10-02/silicon-valley-sees-a-new-kind-of-mobile-device-powered-by-ai",
              text: `Silicon Valley sees a new type of mobile phone powered by AI.`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.techradar.com/computing/artificial-intelligence/microsoft-ceo-ai-is-bigger-than-the-pc-bigger-than-mobile-but-is-he-right",
              text: `Microsoft CEO: AI is "bigger than PC, bigger than mobile phone" - but is he right?`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.noemamag.com/artificial-general-intelligence-is-already-here/",
              text: `AGI(Artificial General Intelligence) is Already here.`,
            },
          ],
          [
            {
              type: "link",
              url: "https://venturebeat.com/ai/inside-the-race-to-build-an-operating-system-for-generative-ai/",
              text: `Inside the race to build an ‘operating system’ for generative AI`,
            },
          ],
        ],
      },

      {
        title: "Learn Langchain, Pinecone, and LLMs",
        children: [
          [
            {
              type: "sub-heading",
              text: `What is the OPL stack in AI?`,
            },
          ],
          [
            {
              type: "text",
              text: "The OPL Stack stands for OpenAI, Pinecone, and Langchain. It's a collection of open-source tools and libraries that make building and deploying LLMs a breeze.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Langchain",
            },
          ],
          [
            {
              type: "link",
              url: "https://www.youtube.com/watch?v=aywZrzNaKjs",
              text: `LangChain Explained in 13 Minutes | QuickStart Tutorial for Beginners`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.freecodecamp.org/news/learn-langchain-for-llm-development/",
              text: `Learn LangChain for LLM Development`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.youtube.com/watch?v=lG7Uxts9SXs",
              text: `Learn LangChain for LLM Development - Video`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/",
              text: `LangChain for LLM Application Development`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
              text: `LangChain: Chat with Your Data`,
            },
          ],
          [
            {
              type: "link",
              url: "https://towardsdatascience.com/a-gentle-intro-to-chaining-llms-agents-and-utils-via-langchain-16cd385fca81?gi=687ab5a08efc",
              text: `A Gentle Intro to Chaining LLMs, Agents, and utils via LangChain`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.youtube.com/watch?v=2xxziIWmaSA&list=PLqZXAkvF1bPNQER9mLmDbntNfSpzdDIU5&index=4&t=1092s",
              text: `The LangChain Cookbook - Beginner Guide To 7 Essential Concepts`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.youtube.com/playlist?list=PLqZXAkvF1bPNQER9mLmDbntNfSpzdDIU5",
              text: `Langchain Playlist`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.youtube.com/playlist?list=PLpdmBGJ6ELUK-v0MK-t4wZmVEbxM5xk6L",
              text: `Langchain Playlist by 1littlecoder`,
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Pinecone",
            },
          ],
          [
            {
              type: "link",
              text: "Pinecone Docs",
              url: "https://docs.pinecone.io/docs/quickstart",
            },
          ],
          [
            {
              type: "link",
              text: "https://python.langchain.com/docs/integrations/vectorstores/pinecone",
              url: "https://python.langchain.com/docs/integrations/vectorstores/pinecone",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Langchain - Vercel AI SDK",
            },
          ],
          [
            {
              type: "link",
              text: "https://sdk.vercel.ai/docs/guides/providers/langchain",
              url: "https://sdk.vercel.ai/docs/guides/providers/langchain",
            },
          ],
          [
            {
              type: "link",
              text: "https://sdk.vercel.ai/docs/guides/providers/langchain",
              url: "https://sdk.vercel.ai/docs/guides/providers/langchain",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Using Python and Flask in Next.js 13 API",
            },
          ],
          [
            {
              type: "link",
              text: "https://github.com/wpcodevo/nextjs-flask-framework",
              url: "https://github.com/wpcodevo/nextjs-flask-framework",
            },
          ],
          [
            {
              type: "link",
              text: "https://vercel.com/templates/python/flask-hello-world",
              url: "https://vercel.com/templates/python/flask-hello-world",
            },
          ],
          [
            {
              type: "link",
              text: "https://vercel.com/docs/functions/serverless-functions/runtimes/python",
              url: "https://vercel.com/docs/functions/serverless-functions/runtimes/python",
            },
          ],
          [
            {
              type: "link",
              text: "https://codevoweb.com/how-to-integrate-flask-framework-with-nextjs/#google_vignette",
              url: "https://codevoweb.com/how-to-integrate-flask-framework-with-nextjs/#google_vignette",
            },
          ],
          [
            {
              type: "link",
              text: "https://github.com/vercel/examples/tree/main/python",
              url: "https://github.com/vercel/examples/tree/main/python",
            },
          ],
          [
            {
              type: "link",
              text: "https://github.com/orgs/vercel/discussions/2732",
              url: "https://github.com/orgs/vercel/discussions/2732",
            },
          ],
          [
            {
              type: "link",
              text: "https://flask.palletsprojects.com/en/2.3.x/",
              url: "https://flask.palletsprojects.com/en/2.3.x/",
            },
          ],
        ],
      },
      {
        title: "Text books",
        children: [
          [
            {
              type: "link",
              url: "https://www.amazon.com/Generative-AI-LangChain-language-ChatGPT/dp/1835083463/ref=sr_1_3",
              text: `Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.amazon.com/LangChain-Crash-Course-powered-building-ebook/dp/B0CHHHX118/ref=sr_1_2",
              text: `LangChain Crash Course: Build OpenAI LLM powered Apps: Fast track to building OpenAI LLM powered Apps using Python Kindle Edition
              `,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.amazon.com/Build-Learn-Development-Beginners-Unleashing/dp/B0CDNNC5Z1/ref=sr_1_1",
              text: `Build and Learn: AI App Development for Beginners: Unleashing ChatGPT API with LangChain & Streamlit Paperback – August 7, 2023`,
            },
          ],
          [
            {
              type: "link",
              url: "https://leanpub.com/generative-ai-in-healthcare",
              text: `Generative AI in Healthcare - The ChatGPT Revolution`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.icaew.com/technical/technology/artificial-intelligence/generative-ai-guide",
              text: `Generative AI Guide`,
            },
          ],
          [
            {
              type: "link",
              url: "https://resources.multiply.ai/en-gb/multiply-white-paper-chatgpt-and-generative-ai-download",
              text: `Is your business using generative AI to its full potential?`,
            },
          ],
          [
            {
              type: "link",
              url: "https://www.amazon.com/Generative-AI-what-accountants-need/dp/B0CCL1P8XP",
              text: `Generative AI: what accountants need to know in 2023`,
            },
          ],
          [
            {
              type: "link",
              url: "https://ai.gov.ae/wp-content/uploads/2023/04/406.-Generative-AI-Guide_ver1-EN.pdf",
              text: `100 practical applications and Use Cases of Generative AI.`,
            },
          ],
        ],
      },
      {
        title: "Fundamental of Gen AI Quiz",
        children: [
          [
            {
              type: "text",
              text: `Total Questions: 40`,
            },
          ],
          [
            {
              type: "text",
              text: `Duration: 60 minutes`,
            },
          ],
        ],
      },
    ],
  });
}
