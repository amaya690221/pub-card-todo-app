// /app/components/TaskCard/TaskDeleteButton.tsx
"use client";
import { useActionState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteTask, FormState } from "@/app/actions/task";

type Props = {
  id: string;
};

//タスク削除処理
const TaskDeleteButton = ({ id }: Props) => {
  const deleteTaskWithId = deleteTask.bind(null, id); //deleteTask関数をidでバインド
  const initialState: FormState = { error: "" };
  const [state, formAction, isPending] = useActionState(
    deleteTaskWithId,
    initialState
  );

  //stateが更新されたら、エラーをアラートで表示
  useEffect(() => {
    if (state && state.error !== "") {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="hover:text-gray-600 transition duration-200 text-lg cursor-pointer  hover:bg-neutral-200 disabled:bg-gray-400 p-1 rounded"
        disabled={isPending} //isPendingがtrueの時はボタンを無効化
      >
        <FaRegTrashAlt />
      </button>
      {/* idをhiddenで送信 */}
      <input type="hidden" name="id" value={id} />
    </form>
  );
};

export default TaskDeleteButton;
