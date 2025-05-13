// /app/components/TaskCard/TaskEditButton.tsx
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

type Props = {
  id: string;
};

const TaskEditButton = ({ id }: Props) => {
  return (
    <Link href={`/edit/${id}`} className="p-1  hover:bg-neutral-200 rounded">
      <FaEdit className=" hover:text-gray-600 transition duration-200 text-lg cursor-pointer" />
    </Link>
  );
};

export default TaskEditButton;
