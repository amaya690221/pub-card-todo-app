// /app/completed/page.tsx
import Header from "../components/Header";
import TaskCard from "../components/TaskCard/TaskCard";
import { TaskDocument } from "../models/task";

//完了タスク取得
const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  try {
    const response = await fetch(`${process.env.API_URL}/completed`, {
      cache: "no-store", //キャッシュを無効にする
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); //APIから完了済タスクを取得
    return data.tasks as TaskDocument[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // 必要に応じて再スロー
  }
};

const CompletedTaskPage = async () => {
  const completedTasks = await getCompletedTasks();
  return (
    // <div className="text-gray-800 p-8 h-full">
    <div className="text-gray-800 pt-0 sm:pt-8 p-8 h-full">
      <Header title="完了したタスク" />

      {/* タスクカード表示 */}
      <div className="mt-4 flex flex-wrap gap-4 justify-start mx-auto pb-16">
        {completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskPage;
