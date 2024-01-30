import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 1,
    objective:
      "CS-101: Object-Oriented Programming using TypeScript and Python for API (Application Programming Interface)",
    duration_weeks: 13,
    description: [
      "We will start the program by learning the fundamentals of Object-Oriented programming using TypeScript And then Python for API (Application Programming Interface). We will also understand the latest Web trends i.e. Web 3.0, GenAI and Metaverse concepts and try to understand their working from the perspective of the users.",
    ],
    outline: [
      {
        title: "HTML and CSS (Homework)",
        children: [
          [
            {
              type: "link",
              text: "Learn HTML by Hira Khan (Watch Recorded Videos)",
              url: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6",
            },
          ],
          [
            {
              type: "link",
              text: "Learn CSS Intro by Hira Khan (Watch Recorded Videos)",
              url: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob",
            },
          ],
        ],
      },
      {
        title: "Fundamentals of Typescript and Node.js Quiz",
        children: [
          [
            {
              type: "sub-heading",
              text: "Topics Covered in the Quiz:",
            },
          ],
          [
            {
              type: "text",
              text: "Background of Typescript and How to use Typescript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators.",
            },
          ],
          [
            {
              type: "list",
              children: [
                [
                  {
                    type: "text",
                    text: "Background of Typescript and How to use Typescript in Browser",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Variables, Primitive data types Analyzing and modifying data types, and Operators ",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using 'inquirer' library. The last example in this presentation shows you how to use 'inquirer' library in your Node.js programs:",
                  },
                  {
                    type: "note",
                    text: "After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Using Arrays and Objects in Node.js Programs ",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Using while loop, do while loop, for loop, for in, and for of loop in Node.js",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js ",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Using Concurrency, Callbacks, Promises, async / await, and Event loop",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "Typescript promises, mastering the asynchronous",
                  },
                  {
                    type: "url",
                    text: "Typescript promises, mastering the asynchronous with practice and quizzes",
                    url: "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript",
                  },
                ],
                [
                  {
                    type: "text",
                    text: "New Typescript Features in ECMAScript 2022 and 2021",
                  },
                  {
                    type: "url",
                    text: "New Typescript Features ECMAScript 2022 (with examples)",
                    url: "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg",
                  },
                ],
              ],
            },
          ],
        ],
      },
      {
        title: "Object-Oriented Programming with TypeScript",
        children: [
          [
            {
              type: "text",
              text: "Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript",
            },
            {
              type: "link",
              text: "Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript",
              url: "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1",
            },
          ],
          [
            {
              type: "text",
              text: "Learning TypeScript in Baby Steps",
            },
            {
              type: "link",
              text: "Learning Repository",
              url: "https://github.com/panaverse/learn-typescript",
            },
          ],
          [
            {
              type: "text",
              text: "In Class Companion projects and articles for Learning TypeScrip",
            },
            {
              type: "link",
              text: "TypeScript book for JavaScript developers out today",
              url: "https://www.learningtypescript.com/",
            },
          ],
          [
            {
              type: "text",
              text: "Homework Project",
            },
            {
              type: "link",
              text: "Programming Projects to Learn TypeScript and Node.js",
              url: "https://github.com/panaverse/typescript-node-projects",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Typescript Quizzes",
            },
            {
              type: "text",
              text: "Fundamentals of TypeScript Quiz",
            },
            {
              type: "text",
              text: "TypeScript Professional Proficiency Quiz",
            },
          ],
        ],
      },
      {
        title: "Quarter Break Classes and Quizzes",
        children: [
          [
            {
              type: "text",
              text: "During the Quarter Break, we will learn PYTHON via online classes",
            },
          ],

          [
            {
              type: "text",
              text: "After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "TypeScript Proficiency Quiz",
            },
          ],
          [
            {
              type: "text",
              text: "Total Questions: 63",
            },
            {
              type: "text",
              text: "Duration: 120 minutes",
            },
          ],
          [
            {
              type: "text",
              text: "Study Material:",
            },
            {
              type: "link",
              text: "Learn TypeScript",
              url: "https://github.com/panaverse/learn-typescript ",
            },
          ],
        ],
      },
      {
        title: "Python classes and Quiz (For Data GEN AI)",
        children: [
          [
            {
              type: "text",
              text: "During the Quarter Break, we will learn PYTHON via online classes",
            },
          ],

          [
            {
              type: "text",
              text: "Starting from installations to environment development to full fledge type-safe python programming and learning different libraries like pandas, mypy, and pandera etc.",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Installations",
            },
          ],
          [
            {
              type: "link",
              text: "Download Anaconda",
              url: "https://www.anaconda.com/download",
            },
          ],
          [
            {
              type: "link",
              text: "Download VS Code",
              url: "https://code.visualstudio.com/",
            },
          ],
          [
            {
              type: "link",
              text: "Download Python Plugin",
              url: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
            },
          ],
          [
            {
              type: "link",
              text: "Reference document",
              url: "https://python.plainenglish.io/typed-python-for-typescript-developers-791145e7171c",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Books and other notes",
            },
          ],
          [
            {
              type: "link",
              text: "Python Repository",
              url: "https://github.com/panaverse/learn-modern-python",
            },
          ],
          [
            {
              type: "link",
              text: "Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction to Programming 3rd Edition",
              url: "https://www.amazon.com/Python-Crash-Course-Eric-Matthes/dp/1718502702/ref=sr_1_1",
            },
          ],
          [
            {
              type: "link",
              text: "Python for Data Analysis: Data Wrangling with pandas, NumPy, and Jupyter 3rd Edition",
              url: "https://www.amazon.com/Python-Data-Analysis-Wrangling-Jupyter/dp/109810403X/ref=sr_1_1",
            },
          ],
          [
            {
              type: "link",
              text: "Fluent Python: Clear, Concise, and Effective Programming 2nd Edition",
              url: "https://www.amazon.com/Fluent-Python-Concise-Effective-Programming/dp/1492056359/ref=tmm_pap_swatch_0",
            },
          ],
          [
            {
              type: "sub-heading",
              text: "Python Proficiency Quiz",
            },
          ],
          [
            {
              type: "text",
              text: "Total Questions: 40",
            },
            {
              type: "text",
              text: "Duration: 60 minutes",
            },
          ],
          [
            {
              type: "text",
              text: "Study Material:",
            },
            {
              type: "link",
              text: "Learn Python",
              url: "https://github.com/panaverse/learn-modern-python ",
            },
          ],
        ],
      },
    ],
  });
}
