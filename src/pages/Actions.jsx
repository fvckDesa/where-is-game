import { verifyEmail } from "@src/firebase/auth";
import { TitleLayout } from "@src/layouts/";
import {
  getActionName,
  getIllustration,
  getResultText,
} from "@src/utils/auth-actions";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Ring } from "@uiball/loaders";

function Actions() {
  const [searchParams] = useSearchParams();
  const [isSuccessful, setIsSuccessful] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (searchParams.get("mode") === "verifyEmail") {
      verifyEmail(searchParams.get("oobCode"))
        .then(() => setIsSuccessful(true))
        .catch(() => setIsSuccessful(false))
        .finally(() => setIsLoading(false));
    }
  }, []);
  return (
    <TitleLayout title={getActionName(searchParams.get("mode"))}>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          className="w-48 h-48"
          src={getIllustration(searchParams.get("mode"))}
          alt="illustration"
        />
        {isLoading ? (
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        ) : (
          <>
            <span className="font-semibold text-lg text-center">
              {getResultText(searchParams.get("mode"), isSuccessful)}
              <br />
              {!isSuccessful && "The code has expired"}
            </span>
            <Link
              to="/"
              replace
              className="flex justify-center items-center gap-2 w-32 p-2 rounded-lg font-semibold bg-tiber-500 text-white cursor-pointer hover:bg-tiber-600"
            >
              Back Home
            </Link>
          </>
        )}
      </div>
    </TitleLayout>
  );
}

export default Actions;
