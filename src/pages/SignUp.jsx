// layout
import { SignLayout } from "@src/layouts/";
// components
import { SignField } from "@src/components";
import { Link } from "react-router-dom";
// hooks
import { useRedirect } from "@src/hooks";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUserContext } from "@src/contexts/UserProvider";
// firebase
import { isEmailInUsed } from "@src/firebase/auth";
// utils
import {
  emailValidation,
  includeNumber,
  includeUppercase,
} from "@src/utils/form";
// hoc
import withoutAuth from "@src/hoc/withoutAuth";

function SignUp() {
  const { signUp } = useUserContext();
  const { next, redirect } = useRedirect();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const [signUpError, setSignUpError] = useState();

  const password = watch("password");

  async function onSubmit({ email, password, name, profilePicture = [] }) {
    try {
      await signUp({
        email,
        password,
        name,
        profilePicture: profilePicture[0],
      });
      redirect();
    } catch (error) {
      console.error(error);
      setSignUpError(error);
    }
  }

  return (
    <SignLayout title="Sign Up" redirect={redirect}>
      <form
        className="flex flex-col justify-center gap-6 text-gray-700"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SignField
          label="Profile Picture"
          className="file:bg-tiber-500 file:text-white file:border-none file:rounded-full file:px-4 file:py-2 border-none !p-0"
          type="file"
          {...register("profilePicture")}
        />
        <SignField
          label="Name"
          type="text"
          error={errors.name?.message}
          {...register("name", { required: "This field is required" })}
        />
        <SignField
          label="Email"
          type="text"
          error={errors.email?.message}
          {...register("email", {
            required: "This field is required",
            validate: {
              ...emailValidation,
              emailInUsed: async (email) =>
                (await isEmailInUsed(email)) || "This email is already in use",
            },
          })}
        />
        <SignField
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must have minimum 8 characters",
            },
            validate: {
              includeNumber,
              includeUppercase,
            },
          })}
        />
        <SignField
          label="Confirm Password"
          type="password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (confirmPassword) =>
              confirmPassword === password || "The passwords do not match",
          })}
        />
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
            <span>Sign Up</span>
          )}
        </button>
        {signUpError && (
          <p className="-mt-4 text-red-500">
            Oops, there was an error signing up
          </p>
        )}
        <p>
          Already have an account?{" "}
          <Link
            className="text-tiber-500 underline font-medium transition-colors hover:text-tiber-400"
            to="/auth/signIn"
            state={{ next }}
          >
            Sign In
          </Link>
        </p>
      </form>
    </SignLayout>
  );
}

export default withoutAuth(SignUp);
