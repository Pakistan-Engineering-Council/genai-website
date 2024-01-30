"use client";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import Hamburger from "../hamburger";
import navItems from "@/data/NavItems";
import Link from "next/link";
import Courses from "./Courses";



export default function Navabr() {


  const currentPath = usePathname();
  return (
    <div
      className={`flex items-center  overflow-hidden justify-between ${
        currentPath === "/" ? "bg-white/10" : "bg-theme_color/10"
      } shadow-lg rounded pl-2 -pr-6`}
    >
      {/* Left side buttons */}
      <div
        className={`space-x-10 flex ${
          currentPath === "/" ? "text-white" : "text-theme_color"
        } `}
      >
        {navItems.map((item, index) => (
          <NavItem key={index} navItems={item.label} link={item.link} />
        ))}

        <Courses/>



      </div>
        {/* Right side Button */}
        <div className=" hover:bg-transparent hover:text-theme_color bg-theme_color hover:font-bold text-white -mr-3 py-4 px-6 relative before:absolute before:top-0 before:-left-8 before:w-10 before:h-full hover:before:bg-transparent  before:bg-theme_color before:-skew-x-12">
            <div className=" mr-8">
              <Link href={""}>Apply Now</Link></div>
        </div>
      </div>
  );
}
