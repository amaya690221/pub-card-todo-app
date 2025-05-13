// /app/components/SideMenu/NavItem.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  link: string;
  icon: React.ReactNode;
};

const NavItem = ({ label, link, icon }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={link}
      className={`flex items-center p-2 text-neutral-500 hover:bg-neutral-200 hover:text-black ${
        pathName === link ? "bg-neutral-100 border-r-4 border-r-lime-300" : ""
      }`}
    >
      <div className="mr-4">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};
export default NavItem;
