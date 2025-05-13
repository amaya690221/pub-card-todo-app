// /app/page.tsx
import Header from "./components/Header";
import TaskCard from "./components/TaskCard/TaskCard";
import { TaskDocument } from "./models/task";

//すべてのタスク取得
const getAllTasks = async (): Promise<TaskDocument[]> => {
  try {
    const response = await fetch(`${process.env.API_URL}`, {
      cache: "no-store", //キャッシュを無効にする
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json(); //APIから全てのタスクを取得
    return data.tasks as TaskDocument[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // 必要に応じて再スロー
  }
};

export default async function Home() {
  const allTasks = await getAllTasks();
  console.log("allTasks", allTasks);

  return (
    <div className="text-gray-800 pt-0 sm:pt-8 p-8 h-full">
      <Header title="すべてのタスク" />

      {/* タスクカード表示 */}
      <div className="mt-4 flex flex-wrap gap-4 justify-start mx-auto pb-16">
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
