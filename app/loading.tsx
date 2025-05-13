// /app/loading.tsx
const loading = () => {
  return (
    <div
      className="h-full flex justify-center items-center"
      aria-label="読込中"
    >
      <div className="animate-spin h-10 w-10 border-4 border-lime-400 rounded-full border-t-transparent"></div>
    </div>
  );
};

export default loading;