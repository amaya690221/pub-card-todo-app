// /src/components/Header.tsx
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex flex-col justify-start items-start sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold flex items-center">{title}</h1>
      <Link
        href="/new"
        className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-lg shadow-sm text-white bg-neutral-800 hover:bg-neutral-700"
      >
        <IoAddCircleOutline className="size-5" />
        <div>新しいタスク</div>
      </Link>
    </header>
  );
};

export default Header;
