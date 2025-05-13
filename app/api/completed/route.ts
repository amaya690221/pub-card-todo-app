// /app/api/completed/route.ts

import { TaskDocument, TaskModel } from "@/app/models/task";
import { connectDB } from "@/app/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB(); //DB接続を確立
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: true, //完了済のタスクを取得
    });
    return NextResponse.json({
      message: "タスク取得成功",
      tasks: completedTasks,
    }); //JSON形式で返す
  } catch (error) {
    console.log(error); //エラーをコンソールに出力
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};
export const dynamic = "force-dynamic"; //動的にすることで、毎回DBからデータを取得するようにする
