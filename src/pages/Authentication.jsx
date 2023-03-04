// layout
import { SettingsField } from "@src/layouts";
// components
import { SignField } from "@src/components";
// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
// firebase
import {
  updateUserPassword,
  getUserProviders,
  linkWithNewProvider,
  unlinkProvider,
  linkWithNewPassword,
  reauthenticateUser,
} from "@src/firebase/auth";
// data
import { PROVIDERS } from "@src/data/providers";
// utils
import { includeNumber, includeUppercase } from "@src/utils/form";

function Authentication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const [userProviders, setUserProviders] = useState(() => getUserProviders());

  async function handlerChangePassword({ oldPassword, newPassword }) {
    if (userProviders.includes("password")) {
      await updateUserPassword(oldPassword, newPassword);
      return;
    }
    try {
      await linkWithNewPassword(newPassword);
    } catch (error) {
      if (error.code === "auth/requires-recent-login") {
        await reauthenticateUser();
        await linkWithNewPassword(newPassword);
      }
    }
    reset({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }

  return (
    <>
      <SettingsField
        title={
          userProviders.includes("password")
            ? "change password"
            : "add password"
        }
        className="flex flex-col gap-4 w-2/3"
        onSubmit={handleSubmit(handlerChangePassword)}
      >
        {userProviders.includes("password") && (
          <SignField
            label="Old password"
            type="password"
            error={errors.oldPassword?.message}
            {...register("oldPassword", {
              required: "This field is required",
            })}
          />
        )}
        <SignField
          label="New password"
          type="password"
          error={errors.newPassword?.message}
          {...register("newPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must have minimum 8 characters",
            },
            validate: {
              includeNumber,
              includeUppercase,
              diff: (newPassword) =>
                newPassword !== getValues("oldPassword") ||
                "The new password must be different from old password",
            },
          })}
        />
        <SignField
          label="Confirm new password"
          type="password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (confirmPassword) =>
              confirmPassword === getValues("newPassword") ||
              "The passwords do not match",
          })}
        />
        <button
          className="w-fit px-4 py-2 rounded-lg bg-tiber-500 text-alabaster-500 transition-colors hover:bg-tiber-600 disabled:bg-slate-600"
          type="submit"
        >
          {userProviders.includes("password")
            ? "Change password"
            : "Add password"}
        </button>
      </SettingsField>
      <SettingsField title="sign-in methods" className="flex flex-col gap-4">
        {PROVIDERS.map(({ logo, name, provider }) => (
          <div key={provider} className="flex items-center gap-2">
            <div className="flex justify-center items-center gap-2 w-32 p-2 rounded-lg font-semibold bg-white cursor-pointer hover:bg-gray-50">
              <img className="w-6 h-6" src={logo} alt={name} />
              {name}
            </div>
            <button
              type="button"
              className={`w-32 p-2 ${
                userProviders.includes(provider)
                  ? "text-red-500"
                  : "text-tiber-500"
              } font-semibold hover:underline`}
              onClick={() =>
                userProviders.includes(provider)
                  ? unlinkProvider(provider).then(() =>
                      setUserProviders((prev) =>
                        prev.filter((p) => p !== provider)
                      )
                    )
                  : linkWithNewProvider(provider).then(() =>
                      setUserProviders((prev) => prev.concat(provider))
                    )
              }
            >
              {userProviders.includes(provider) ? "Disconnect" : "Connect"}
            </button>
          </div>
        ))}
      </SettingsField>
    </>
  );
}

export default Authentication;
