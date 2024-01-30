import React from "react";
import CourseContent from "@/components/CourseContent";
import { IQuarterData } from "@/types/quater";
import Link from "next/link";
import { tracks } from "@/data/Data";
import { compulsoryCoursesNames } from "@/data/Data";

async function getData(quarter: string) {
  try {
    const res = await fetch(
      `${process.env.SYLLABUS_API}/api/compulsory/${quarter}`
    );
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (error: any) {
    console.log("error.message", error.message);
    throw new Error("Failed to fetch data");
  }
}

async function Page({ params }: { params: { quarter: string } }) {
  const data: IQuarterData = await getData(params.quarter);
  console.log("🚀 ~ file: page.tsx:42 ~ Page ~ data:", data);
  if (!data) {
    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-center py-28">
          <h1 className="text-2xl ">Course Not Found !</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`mb-20 w-full`}>
        <div className="relative m-auto mt-20 block w-[95%] justify-between gap-10 md:flex lg:w-[90%] xl:w-[1300px]">
          <div className="relative top-0 h-fit w-full flex-shrink-0 rounded-lg border border-zinc-300 md:sticky md:top-40 md:w-[270px] md:rounded-none md:border-none">
            <div className="h-fit rounded-lg bg-gray-50 p-3 ">
              <h2 className="leading-wider rounded-lg bg-main p-3 text-center text-sm font-semibold text-theme_color">
                Core Courses Sequence
              </h2>
              <ul className="mt-2 text-zinc-800">
                {[1, 2, 3, 4].map((val, index) => {
                  return (
                    <Link key={index} href={`/compulsory/${val}`}>
                      <li
                        className={`border-l-[2px] py-[5px] pl-5 text-sm tracking-widest ${
                          params.quarter === String(val)
                            ? "border-main bg-theme_color text-white"
                            : "border-[#c2c2c2]"
                        }`}
                      >
                        {compulsoryCoursesNames[index]}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="mt-8 p-2 md:p-0">
              <h3 className="text-base font-bold leading-tight text-zinc-800">
                Advanced Courses
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                {tracks.map((val, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/tracks/${encodeURIComponent(val.id)}`}
                      className="leading-2 rounded-lg bg-gray-50 px-3 py-2 text-sm tracking-wider text-zinc-800 transition-all hover:bg-theme_color hover:text-white"
                    >
                      {val.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-14 w-full md:mt-0 md:w-[80%]">
            <CourseContent data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
