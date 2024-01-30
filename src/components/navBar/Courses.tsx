import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { AdvanceCourses, Courseslist } from "@/data/NavItems";
import { ChevronDown } from "lucide-react";

export default function Courses() {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger className=" focus:outline-0 text-base font-semibold"><div className="flex">Courses <ChevronDown /></div></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Core Courses</DropdownMenuLabel>
                <DropdownMenuSeparator />
               { Courseslist.map((course,index) => (
                    <DropdownMenuItem key={course.label}>{course.label}</DropdownMenuItem>
                ))}
                <DropdownMenuLabel>Advanced Courses</DropdownMenuLabel>
                <DropdownMenuSeparator />
               { AdvanceCourses.map((adcourse,index) => (
                    <DropdownMenuItem key={adcourse.label}>{adcourse.label}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}
