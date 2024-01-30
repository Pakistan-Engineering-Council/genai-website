'use client';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Logo from "../Logo"
import { usePathname } from "next/navigation";
import navItems from "@/data/NavItems";
import NavItem from "../navBar/NavItem";
import TopSocialLinks from "../topHeader/TopSocialLinks";
import Courses from "../navBar/Courses";
  
export default function Hamburger() {
  const currentPath = usePathname();
  return (
    <div className={`${currentPath === '/' ?'bg-white/10' :  'bg-theme_color/10'} flex justify-between items-center px-5 pb-2 mt-3 left-2 top-0  min-w-full`}>
      <div>
        <Logo/>
      </div>
<Sheet>
  <SheetTrigger><AlignJustify/></SheetTrigger>
  <SheetContent>
    <SheetHeader className=" flex items-center">
    {navItems.map((item, index) => (
      <SheetTitle key={index}>
        <NavItem  key={index} navItems={item.label} link={item.link} />
        </SheetTitle>
      ))}
      <SheetTitle><Courses/> </SheetTitle>
      <SheetTitle><TopSocialLinks/></SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
  )
}
