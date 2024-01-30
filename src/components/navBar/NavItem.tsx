'use client';
import { usePathname } from "next/navigation";


export default function NavItem({navItems, link}:any) {
  const currentPath = usePathname();
  return (
        <div className={`${currentPath ==='/' ? 'hover:text-theme_color' : 'hover:text-black'} hover:text-theme_color`}>
          <a href={link} className="text-base font-semibold">
          {navItems}
          </a>

          </div>
  )
}
