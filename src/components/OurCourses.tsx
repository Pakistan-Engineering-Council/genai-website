import { CustomCarousel } from "./CustomCarousel"
import { OurCoursesCardsData } from "./constants"


const OurCourses = () => {
    return (
        <section className="flex flex-col gap-10 items-center justify-center w-full mt-10">
            {/* heading */}
            <div className="flex flex-col items-center justify-center gap-5 w-full px-10 md:px-0">
                <span className="text-base my-3 font-bold uppercase text-custom-color">
                    Our Courses
                </span>
                <h2>
                    Explore Our Popular Onsite Courses
                </h2>
            </div>
            {/* courses card */}


            <CustomCarousel data={OurCoursesCardsData} />

        </section>
    )
}

export default OurCourses