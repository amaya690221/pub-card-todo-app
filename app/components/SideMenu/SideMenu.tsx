// /src/components/SideMenu/SideMenu.tsx
import NavList from "./NavList";

const SideMenu = () => {
  return (
    <div className=" bg-white border-gray-300 m-4 rounded-lg border pt-5 sm:w-56  ">
      <h1 className="px-4 text-2xl font-bold">タスク管理</h1>
      <NavList />
    </div>
  );
};

export default SideMenu;
