// /app/expired/page.tsx
import Header from "../components/Header";
import TaskCard from "../components/TaskCard/TaskCard";
import { TaskDocument } from "../models/task";

//期限超過タスク取得
const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  try {
    const response = await fetch(`${process.env.API_URL}/expired`, {
      cache: "no-store", //キャッシュを無効にする
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); //APIから期限超過タスクを取得
    return data.tasks as TaskDocument[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // 必要に応じて再スロー
  }
};

const ExpiredTaskPage = async () => {
  const expiredTasks = await getExpiredTasks();
  return (
    <div className="text-gray-800 pt-0 sm:pt-8 p-8 h-full">
      <Header title="期限超過タスク" />

      {/* タスクカード表示 */}
      <div className="mt-4 flex flex-wrap gap-4 justify-start mx-auto pb-16">
        {expiredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
