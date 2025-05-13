// /app/api/expired/route.ts
import { TaskDocument, TaskModel } from "@/app/models/task";
import { connectDB } from "@/app/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      //現在の日付を取得、日本語形式で
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-"); //フォーマット変換

  try {
    await connectDB(); //DB接続を確立
    const expiredTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate }, //$ltは、mongoDBでより小さいを意味する
    }); //未完了のタスクを取得
    return NextResponse.json({
      message: "タスク取得成功",
      tasks: expiredTasks,
    }); //JSON形式で返す
  } catch (error) {
    console.log(error); //エラーをコンソールに出力
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};
export const dynamic = "force-dynamic"; //動的にすることで、毎回DBからデータを取得するようにする
