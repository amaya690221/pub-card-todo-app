// /app/incompleted/page.tsx
import Header from "../components/Header";
import TaskCard from "../components/TaskCard/TaskCard";
import { TaskDocument } from "../models/task";

// 未完了タスク取得
const getIncompletedTasks = async (): Promise<TaskDocument[]> => {
  try {
    const response = await fetch(`${process.env.API_URL}/incompleted`, {
      cache: "no-store", //キャッシュを無効にする
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); //APIから未完了タスクを取得
    return data.tasks as TaskDocument[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // 必要に応じて再スロー
  }
};

const IncompletedTaskPage = async () => {
  const incompletedTasks = await getIncompletedTasks();
  return (
    <div className="text-gray-800 pt-0 sm:pt-8 p-8 h-full">
      <Header title="未完了のタスク" />

      {/* タスクカード表示 */}
      <div className="mt-4 flex flex-wrap gap-4 justify-start mx-auto pb-16">
        {incompletedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default IncompletedTaskPage;
