import navigationData from "@/data/NavigationData";

export default function TopSocialLinks() {
  return (
    <div className=" flex space-x-2 ml-4">
        {navigationData.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-theme_color hover:text-gray-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
    </div>
  )
}
