import NavBar from "@/components/navBar";
import TopHeader from "@/components/topHeader";
import OfferingCard from "../../components/OfferingCard";
import Image from "next/image";
import LearnAnyThing from "@/components/LearnAnyThing";
import OurCourses from "@/components/OurCourses";
import HeroSection from "@/components/heroSection/page";
import Footer from "@/components/footer/page";
import Hamburger from "@/components/hamburger";


const Home = () => {
  return (
    <div className="top-0">
      <div className=" md:mx-8">
      <div className="hidden md:flex md:flex-col">
      <TopHeader/>
      <NavBar />
      </div>
      <div className="md:hidden">
        <Hamburger/>
      </div>
      <HeroSection />
      </div>
      <div className=" bg-gray-100 rounded">
        <LearnAnyThing />
        <OfferingCard />
        <OurCourses />
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;
