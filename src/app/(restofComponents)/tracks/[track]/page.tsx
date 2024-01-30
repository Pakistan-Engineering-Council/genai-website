import React from "react";
import CourseContent from "@/components/CourseContent";
import { ITrackDataType } from "@/types/quater";
import Link from "next/link";
import { tracks } from "@/data/Data";

async function getData(track: string) {
  const res = await fetch(`${process.env.SYLLABUS_API}/api/tracks/${track} `);
  const apiresp = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return apiresp;
}

export async function generateStaticParams() {
  const ids = tracks.map((val) => [{ track: val.id, quarter: "4" }]).flat();

  return ids.map((val) => {
    return {
      track: val.track,
      quarter: val.quarter,
    };
  });
}

async function Page({
  params,
}: {
  params: { track: string; quarter: string };
}) {
  const data: ITrackDataType = await getData(params.track);

  if (
    params.track !== "wbg" &&
    params.track !== "m3g" &&
    params.track !== "hmg" &&
    params.track !== "gfbs" &&
    params.track !== "ges" &&
    params.track !== "gsms" &&
    params.track !== "gaits" &&
    params.track !== "gcs"
  ) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center text-2xl font-semibold text-zinc-800">
        404 Not Found
      </div>
    );
  }

  return (
    <>
      <div className={`mb-20 w-full`}>
        <div className="relative m-auto mt-20 block w-[95%] justify-between gap-10 md:flex lg:w-[90%] xl:w-[1300px]">
          <div className="relative top-0 h-fit w-full flex-shrink-0 rounded-lg border border-zinc-300 md:sticky md:top-40 md:w-[270px] md:rounded-none md:border-none">
            <div className="mt-8 px-1 md:px-0">
              <ul>
                {tracks.map((val, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/tracks/${encodeURIComponent(val.id)}`}
                    >
                      <li className="flex gap-3 text-sm font-light">
                        <div className="flex w-4 flex-col items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-main"></div>
                          <div className="w-[1px] flex-grow bg-main"></div>
                        </div>
                        <p
                          className={`w-4/5 pb-4 font-bold leading-none ${
                            val.id === params.track
                              ? "text-theme_color"
                              : "text-zinc-800"
                          }`}
                        >
                          {val.name}
                        </p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="mt-8 p-2 md:p-0">
              <h3 className="text-base font-bold leading-tight text-zinc-800">
                Compulsory Courses
              </h3>
              <div className="mt-2 flex items-center justify-between gap-2">
                {["1", "2", "3"].map((val, index) => {
                  return (
                    <Link
                      href={`/compulsory/${encodeURIComponent(val)}`}
                      key={index}
                      className="w-1/3 rounded-lg bg-gray-50 p-3 text-center text-sm font-bold text-zinc-800 transition-all hover:bg-theme_color hover:font-bold hover:text-[#f1f1f1]"
                    >
                      Q{val}
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
