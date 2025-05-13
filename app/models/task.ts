// /src/models/task.ts
import mongoose, { Document } from "mongoose";//mongooseからのインポート

export type Task = {//タスク内容の型定義
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
};

export type TaskDocument = Task &
  Document & { //Documentはmongooseが持つ型情報
    _id: string; //ID
    createdAt: Date;
    updatedAt: Date;
  };

const taskSchema = new mongoose.Schema<TaskDocument>(
    //mongoose.Schemaでスキーマを定義
  {
    title: {
      type: String, //大文字
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", taskSchema); 
  //既にTaskというモデルがあればそれを使い、なければ、taskSchemaをスキーマとして新しく作る