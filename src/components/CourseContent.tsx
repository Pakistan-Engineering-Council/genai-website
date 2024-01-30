import { HiOutlineExternalLink } from "react-icons/hi";
import { MdLabelImportant } from "react-icons/md";
import { IQuarterData } from "@/types/quater";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { compulsoryCoursesNames } from "@/data/Data";
import Link from "next/link";

interface ITrackDataType {
  trackName: string;
  data: IQuarterData;
}

function CourseContent({ data }: { data: ITrackDataType | IQuarterData }) {
  /**
   * The function isTrack checks if the given object is of type ITrackDataType.
   * @param {ITrackDataType | IQuarterData} track - The `track` parameter can be of type
   * `ITrackDataType` or `IQuarterData`.
   * @returns a boolean value.
   */
  function isTrack(
    track: ITrackDataType | IQuarterData
  ): track is ITrackDataType {
    return "trackName" in track;
  }
  let trackName = "";
  if (isTrack(data)) {
    trackName = data.trackName;
    data = data.data;
  } else {
    data = data;
  }
  console.log("🚀 ~ file: index.tsx:29 ~ CourseContent ~ data:", data);

  return (
    <div className="w-full rounded-md p-3 lg:p-0">
      {/* Course Info */}
      <Link
        href={"/outline"}
        className="text-center text-blue-600 underline-offset-2 hover:underline"
      >
        Syllabus on Google Docs
      </Link>
      <div className="mb-5 mt-5 block justify-between border-b border-zinc-300 py-3 pb-3 sm:flex">
        <h1 className="text-3xl font-bold text-zinc-800 md:text-xl lg:text-3xl">
          {data.objective}
        </h1>

        <div className="mt-5 flex w-fit items-center gap-2 rounded-lg text-center text-sm text-zinc-800 xs:gap-5 sm:mt-0">
          <span className="w-4">
            <MdOutlineAccessTimeFilled size={20} />
          </span>
          <p>
            <span className="whitespace-nowrap font-bold">Duration: </span>( 13
            Weeks )
          </p>{" "}
        </div>
      </div>
      {/* Course Description */}
      <div className="font-medium text-zinc-800">
        <h1 className="border-b border-zinc-500 pb-3 text-3xl font-bold lg:text-4xl ">
          Course Description
        </h1>
        <div className="mt-5">
          {data.description.map((val, index) => {
            return (
              <p
                key={index}
                className="mb-5 rounded-md bg-gray-50 p-3 text-sm font-medium text-zinc-800 md:p-5 lg:text-base"
              >
                {val}
              </p>
            );
          })}
        </div>
      </div>

      {/* Course Outline */}

      <div className="mt-12">
        <h1 className="border-b border-zinc-500 pb-3 text-3xl font-bold text-zinc-800 lg:text-4xl">
          Course Outline
        </h1>
        <div className="mt-10">
          {data.outline.map((val, index) => {
            return (
              <div key={index}>
                <h1 className="mb-5 mt-10 text-xl font-extrabold text-[#1EB2A6] sm:text-2xl">
                  {index + 1}. {val.title}
                </h1>
                <div
                  className={
                    val.children?.length
                      ? "rounded-md bg-gray-50 p-3 text-sm font-medium text-zinc-800 md:p-5 lg:text-base"
                      : ""
                  }
                >
                  {val.children?.map((child, childIndex) => {
                    return (
                      <div key={childIndex} className="mb-4 mt-4">
                        {child.map((sub_child: any, subChildIndex) => {
                          return (
                            <div key={subChildIndex} className="">
                              {sub_child.type === "text" ? (
                                <p>{sub_child.text}</p>
                              ) : sub_child.type === "link" ? (
                                <a
                                  href={sub_child.url}
                                  target="_blank"
                                  className="flex w-fit items-center gap-3 text-blue-600"
                                >
                                  <span className="w-[4]">
                                    <HiOutlineExternalLink
                                      className="text-zinc-800"
                                      size={16}
                                    />
                                  </span>
                                  <span className="font-medium lowercase">
                                    {sub_child.text}
                                  </span>
                                </a>
                              ) : sub_child.type === "sub-heading" ? (
                                <p className="text-xl font-extrabold text-zinc-800">
                                  {sub_child.text}
                                </p>
                              ) : sub_child.type === "h3" ? (
                                <p className="text-lg font-extrabold text-zinc-800">
                                  {sub_child.text}
                                </p>
                              ) : sub_child.type === "note" ? (
                                <p className="flex items-start gap-3 font-bold">
                                  <span className=" w-4">
                                    <MdLabelImportant
                                      className="text-[#a048e8]"
                                      size={16}
                                    />
                                  </span>
                                  Note : {sub_child.text}
                                </p>
                              ) : sub_child.type === "list" ? (
                                <ul className="ml-10 list-disc">
                                  {sub_child.children.map(
                                    (list: any, list_index: number) => {
                                      return (
                                        <li
                                          key={list_index}
                                          className="mb-2 mt-2 font-medium"
                                        >
                                          {list.map(
                                            (
                                              list_item: any,
                                              list_item_index: number
                                            ) => {
                                              return (
                                                <div key={list_item_index}>
                                                  {list_item.type === "text" ? (
                                                    <p>{list_item.text}</p>
                                                  ) : list_item.type ===
                                                    "link" ? (
                                                    <a
                                                      href={list_item.url}
                                                      target="_blank"
                                                      className="flex items-center gap-3 text-blue-600"
                                                    >
                                                      <span className="w-[10px]">
                                                        <HiOutlineExternalLink
                                                          className="text-zinc-800"
                                                          size={16}
                                                        />
                                                      </span>
                                                      <span className="lowercase">
                                                        {list_item.text}
                                                      </span>
                                                    </a>
                                                  ) : (
                                                    false
                                                  )}
                                                </div>
                                              );
                                            }
                                          )}
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              ) : (
                                false
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
