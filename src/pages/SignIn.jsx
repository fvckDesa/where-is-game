// layout
import { SignLayout } from "@src/layouts/";
// components
import { SignField } from "@src/components";
import { Link } from "react-router-dom";
// hooks
import { useRedirect } from "@src/hooks";
import { useForm } from "react-hook-form";
import { useState } from "react";
// firebase
import { useUserContext } from "@src/contexts/UserProvider";
// utils
import { emailValidation, getSignInErrorMessage } from "@src/utils/form";
// hoc
import withoutAuth from "@src/hoc/withoutAuth";

function SignIn() {
  const { signInUserWithEmailAndPassword } = useUserContext();
  const { redirect, next } = useRedirect();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [signInError, setSignInError] = useState();

  async function onSubmit({ email, password, remember }) {
    try {
      await signInUserWithEmailAndPassword(email, password, remember);
      redirect();
    } catch (error) {
      setSignInError(getSignInErrorMessage(error.message));
    }
  }

  return (
    <SignLayout title="Sign In" redirect={redirect}>
      <form
        className="flex flex-col justify-center gap-6 text-gray-700"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SignField
          label="Email"
          type="text"
          error={errors.email?.message}
          {...register("email", {
            required: "This field is required",
            validate: emailValidation,
          })}
        />
        <SignField
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register("password", {
            required: "This field is required",
          })}
        />
        <div className="flex items-center gap-2">
          <input
            className="w-4 h-4 cursor-pointer accent-tiber-500"
            type="checkbox"
            defaultChecked
            {...register("remember")}
          />
          <p>Remember me</p>
        </div>
        <button
          className={`flex justify-center items-center px-5 py-2 rounded-full transition-colors bg-tiber-500 text-white ${
            isSubmitting ? "" : "hover:bg-tiber-600"
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-6 h-6 rounded-full border-4 border-gray-400 border-t-white animate-spin" />
          ) : (
            <span>Sign in</span>
          )}
        </button>
        {signInError && <p className="-mt-4 text-red-500">{signInError}</p>}
        <p>
          Not registered yet?{" "}
          <Link
            className="text-tiber-500 underline font-medium transition-colors hover:text-tiber-400"
            to="/auth/signUp"
            state={{ next }}
          >
            Create an Account
          </Link>
        </p>
      </form>
    </SignLayout>
  );
}

export default withoutAuth(SignIn);
