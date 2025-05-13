// /app/actions/task.ts
"use server";

import { redirect } from "next/navigation";
import { connectDB } from "../utils/database";
import { Task, TaskModel } from "../models/task";

export type FormState = {
  error: string;
};

//タスク作成処理
export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string, //string型を強制
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await connectDB(); //DB接続を確立
    await TaskModel.create(newTask);
  } catch {
    state.error = "タスクの作成に失敗しました"; //エラーをstateに格納
    return state;
  }

  redirect("/"); //タスク作成後、トップページにリダイレクト、tray-catchの外に記述
};

//タスク更新処理
export const updateTask = async (
  id: string, //idが必要
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string, //string型を強制
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get("isCompleted")),
  };

  try {
    await connectDB(); //DB接続を確立
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch {
    state.error = "タスクの更新に失敗しました"; //エラーをstateに格納
    return state;
  }

  redirect("/"); //タスク更新後、トップページにリダイレクト、tray-catchの外に記述
};

//タスク削除処理
export const deleteTask = async (
  id: string, //idが必要
  state: FormState
) => {
  try {
    await connectDB(); //DB接続を確立
    await TaskModel.deleteOne({ _id: id });
  } catch {
    state.error = "タスクの削除に失敗しました"; //エラーをstateに格納
    return state;
  }

  redirect("/"); //タスク更新後、トップページにリダイレクト、tray-catchの外に記述
};
