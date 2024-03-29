// components
import { SignField } from "@src/components";
// hooks
import { useRedirect } from "@src/hooks";
import { useState, useEffect } from "react";
// firebase
import { reauthenticateWithPassword } from "@src/firebase/auth";
import { updateUser } from "@src/firebase/database/users";

function ConfirmAuth() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { redirect, next, data } = useRedirect();

  function handlerChange(e) {
    setPassword(e.target.value);
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    try {
      const { user } = await reauthenticateWithPassword(password);
      await updateUser(user.uid, data);
      redirect();
    } catch (err) {
      setError("Wrong password");
    }
  }

  useEffect(() => {
    if (next === "/") redirect();
  }, []);

  return (
    <div className="flex flex-col gap-10 h-[90%] max-w-md mx-auto">
      <h1 className="self-start text-3xl font-bold text-gray-700 mt-10">
        Confirm Access
      </h1>
      <form
        className="flex flex-col gap-8 p-8 rounded-lg bg-white"
        onSubmit={handlerSubmit}
      >
        <SignField
          label="Password"
          type="password"
          onChange={handlerChange}
          value={password}
        />
        <div className="flex-1">
          <button className="flex justify-center items-center w-full px-5 py-2 rounded-full transition-colors bg-tiber-500 text-white hover:bg-tiber-600">
            Confirm password
          </button>
          {error && <div className="mt-2 text-red-500">{error}</div>}
        </div>
      </form>
    </div>
  );
}

export default ConfirmAuth;
