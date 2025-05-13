// /app/components/Form/NewTaskForm.tsx
"use client";

import { createTask, FormState } from "@/app/actions/task";
import { useActionState } from "react";

const NewTaskForm = () => {
  const initialState: FormState = {
    error: "",
  };
  const [state, formAction, isPending] = useActionState(
    createTask,
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
            required
            className="mt-2 block py-1.5 px-2 w-full rounded-md border-0 shadow-xs ring-1 ring-inset ring-gray-300"
          />
        </div>
        <button
          type="submit"
          className="mt-8 py-2 w-full  text-white rounded-md bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold shadow-sm cursor-pointer disabled:bg-neutral-400"
          disabled={isPending} //pendingがtrueの時はボタンを無効化
        >
          作成
        </button>
        {/* エラー時のメッセージ表示 */}
        {state.error && (
          <p className="mt-4 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default NewTaskForm;
