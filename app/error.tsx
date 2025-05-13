// /app/error.tsx
"use client";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold text-stone-400">Error</h1>
      <p className="text-4xl font-medium">予期しないエラーが発生しました</p>
      <Link href="/" className="mt-4 text-xl text-lime-600 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
