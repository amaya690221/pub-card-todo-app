// /app/edit/[id]/page.tsx
import EditTaskForm from "@/app/components/Form/EditTaskForm";
import { TaskDocument } from "@/app/models/task";

type Params = {
  params: Promise<{
    //Next.js15ではPromise必要
    id: string;
  }>;
};

//タスク取得処理
const getTask = async (id: string): Promise<TaskDocument> => {
  try {
    const response = await fetch(`${process.env.API_URL}/${id}`, {
      cache: "no-store", //キャッシュを無効にする
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.task as TaskDocument;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // 必要に応じて再スロー
  }
};

const EditTaskPage = async ({ params }: Params) => {
  const { id } = await params; //{id}の形式で、await付与
  const idTask = await getTask(id);
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-center text-2xl font-bold">タスクの編集</h2>
      {idTask && <EditTaskForm task={idTask} />}
    </div>
  );
};

export default EditTaskPage;
