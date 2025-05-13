// /app/components/TaskCard/TaskCard.tsx
import TaskDeleteButton from "./TaskDeleteButton";
import TaskEditButton from "./TaskEditButton";

type Props = {
  task: {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
  };
};

const TaskCard = ({ task }: Props) => {
  const today = new Date();
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md border-1 border-gray-300 flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.dueDate}</div>
        <div className="flex items-center justify-between">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full ${
              task.isCompleted
                ? "bg-lime-500"
                : task.dueDate < today.toISOString().split("T")[0]
                ? "bg-amber-500"
                : "bg-stone-400"
            }`}
          >
            {task.isCompleted
              ? "完了"
              : task.dueDate < today.toISOString().split("T")[0]
              ? "期限超過"
              : "未完了"}
          </div>
          <div className="flex gap-1">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
