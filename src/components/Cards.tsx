import React from "react";

export type OfferingCardData = {
  title: string;
  detail: string;
  blobColor: string;
  borderRadius: string;
};
export default function Cards({ data }: { data: OfferingCardData }) {
  return (
    <div
      className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 14px" }}
    >
      <div
        className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]"
        style={{
          borderRadius: "50%",
          backgroundColor: 'rgb(30, 178, 166)',
        }}
      ></div>
      <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
        {data.title}
      </h1>
      <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
        {data.detail}
      </p>
    </div>
  );
}
