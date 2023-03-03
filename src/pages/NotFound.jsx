import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 w-full h-[90%] pt-10">
      <h1 className="text-2xl">Page Not Found</h1>
      <Link
        to="/"
        className="flex justify-center items-center gap-2 w-32 p-2 rounded-lg font-semibold bg-tiber-500 text-white cursor-pointer hover:bg-tiber-600"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;
