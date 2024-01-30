import Image from "next/image"
import { LACardType } from "../types"


const LACard = ({ imgUrl, imgAlt, article, heading }: LACardType) => {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-5 rounded-none bg-white p-5 hover:bg-custom-color group hover:text-white ease-in duration-200">
            <div className="">
                <Image src={imgUrl} alt={imgAlt} width={50} height={50} className="pt-2 group-hover:invert ease-in duration-200" />
            </div>
            <div className="flex flex-col gap-3 cursor-default">
                <h2 className="text-lg font-medium">
                    {heading}
                </h2>
                <p className="text-sm">
                    {article}
                </p>
            </div>
        </div>

    )
}

export default LACard



// import Image from "next/image"


// const LACard = () => {
//     return (
//         <div className="grid grid-cols-[auto,1fr] gap-5 rounded-none bg-white p-5 hover:bg-custom-color hover:text-white ease-in duration-200">
//             <div>
//                 <Image src={"/icons/online-learning.svg"} alt="Learn online" width={50} height={50} className="pt-2" />
//             </div>
//             <div className="flex flex-col gap-3">
//                 <h2 className="text-lg font-medium">
//                     Online Course
//                 </h2>
//                 <p className="text-sm">
//                     Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
//                 </p>
//             </div>
//         </div>

//     )
// }

// export default LACard