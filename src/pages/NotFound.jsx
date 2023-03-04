// layout
import { TitleLayout } from "@src/layouts";
// components
import { Link } from "react-router-dom";
// assets
import not_found from "@src/assets/not-found.svg";

function NotFound() {
  return (
    <TitleLayout title="Page not found">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          className="w-48 h-48"
          src={not_found}
          alt="not found illustration"
        />
        <Link
          to="/"
          className="flex justify-center items-center gap-2 w-32 p-2 rounded-lg font-semibold bg-tiber-500 text-white cursor-pointer hover:bg-tiber-600"
          replace
        >
          Back Home
        </Link>
      </div>
    </TitleLayout>
  );
}

export default NotFound;
