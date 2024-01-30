import Image from "next/image"
import LACard from "./Shared/LACard"
import { LearnAnyThingCardsData } from "./constants"
import MainImage from "./../../public/assets/image-1.jpg"

const LearnAnyThing = () => {
    return (
        <section className="grid grid-cols-2 gap-5  items-center max-w-7xl mx-auto md:px-0 px-5 overflow-hidden py-16">
            <div className="hidden md:block">
                <Image src={MainImage} alt="Main Image" width={950} height={950} />
            </div>
            <div className="flex flex-col col-span-full md:col-span-1">
                <div>
                    <span className="text-base my-3 font-bold uppercase text-custom-color">
                        learn Anything
                    </span>
                    <h2>Benefits About Online Learning Expertise</h2>
                </div>
                <div className="flex flex-col gap-2 lg:mt-8 mt-4">
                    {
                        LearnAnyThingCardsData.map((data, index) => (
                            <LACard key={index} article={data.article} heading={data.heading} imgAlt={data.imgAlt} imgUrl={data.imgUrl} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LearnAnyThing