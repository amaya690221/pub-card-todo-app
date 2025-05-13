// /app/api/[id]/route.ts

import { TaskModel } from "@/app/models/task";
import { connectDB } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest, //_requestは使用しないが、Next.jsの仕様で必要、使用しないので、_をつける
  { params }: { params: Promise<{ id: string }> } //paramsはPromiseであることを明示する,Next.js15での変更点
) => {
  try {
    await connectDB(); //DB接続を確立
    const task = await TaskModel.findById((await params).id); //Next.js15での変更に伴い、paramsの前にawaitを付与

    if (!task) {
      return NextResponse.json(
        { message: "タスクが存在しません" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "タスク取得成功", task }); //JSON形式で返す
  } catch (error) {
    console.log(error); //エラーをコンソールに出力
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic"; //動的にすることで、毎回DBからデータを取得するようにする
