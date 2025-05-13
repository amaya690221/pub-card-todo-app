// /app/new/page.tsx
import NewTaskForm from "../components/Form/NewTaskForm";

const NewTaskPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-center text-2xl font-bold">タスクの作成</h2>
      <NewTaskForm />
    </div>
  );
};

export default NewTaskPage;
