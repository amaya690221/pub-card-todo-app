// /app/components/SideMenu/NavList.tsx
import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import { RiCheckboxBlankLine } from "react-icons/ri";
import NavItem from "./NavItem";

type NavItemType = {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
};

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "すべてのタスク",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "完了したタスク",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5" />,
    },
    {
      id: 3,
      label: "未完了のタスク",
      link: "/incompleted",
      icon: <RiCheckboxBlankLine className="size-5" />,
    },
    {
      id: 4,
      label: "期限超過タスク",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];
  return (
    <div className="sm:mt-24">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
