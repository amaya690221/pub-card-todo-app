// /app/components/Form/EditTaskForm.tsx
"use client";
import { useState, useActionState } from "react";
import { FormState, updateTask } from "@/app/actions/task";

type Props = {
  task: {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
  };
};

const EditTaskForm = ({ task }: Props) => {
  const [form, setForm] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    isCompleted: task.isCompleted,
  });

  // 更新処理
  const updateTaskWithId = updateTask.bind(null, task._id); //updateTask関数をtask._idでバインド
  const initialState: FormState = { error: "" };
  const [state, formAction, isPending] = useActionState(
    updateTaskWithId,
    initialState
  );

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="mt-2 block py-1.5 px-2 w-full rounded-md border-0 shadow-xs ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            className="mt-2 block py-1.5 px-2 w-full rounded-md border-0 shadow-xs ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            required
            className="mt-2 block py-1.5 px-2 w-full rounded-md border-0 shadow-xs ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            checked={form.isCompleted}
            onChange={(e) =>
              setForm({ ...form, isCompleted: e.target.checked })
            }
            className="mr-2 w-4 h-4 accent-lime-600"
          />
          <label htmlFor="isCompleted" className="text-sm">
            タスクを完了にする
          </label>
        </div>
        <button
          type="submit"
          disabled={isPending} //isPendingがtrueの時はボタンを無効化
          className="mt-8 py-2 w-full  text-white rounded-md bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold shadow-sm cursor-pointer disabled:bg-neutral-400"
        >
          編集
        </button>
        {/* エラー表示 */}
        {state.error !== "" && (
          <p className="mt-4 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default EditTaskForm;
