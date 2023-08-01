// Nav Icon
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// Next Router
import { useRouter } from "next/router";
import Link from "next/link";

// Nav Data
const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4
    fixed bottom-0 h-max xl:h-screen mt-auto xl:right-[2%] z-50 top-0
    w-full xl:w-16 xl:max-w-md"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between
      xl:justify-center gap-y-10 px-4 py-8 md:px-40 xl:px-0 h-[80px] bg-white/10
      xl:h-max backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent
            transition-all duration-300`}
            href={link.path}
            key={index}
          >
            {/* Tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* Triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent
                border-y-[6px] border-r-0 absolute -right-2"
                ></div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
