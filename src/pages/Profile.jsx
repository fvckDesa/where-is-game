// components
import { DropImage, SignField } from "@src/components";
import { SettingsField } from "@src/layouts";
// hooks
import { useForm } from "react-hook-form";
import { useUserContext } from "@src/contexts/UserProvider";
import { emailValidation } from "@src/utils/form";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// assets
import ProfileImage from "@src/assets/Profile.svg";
// firebase
import { updateUser } from "@database/users";
import { reauthenticateUser } from "@src/firebase/auth";

function Profile() {
  const { user } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const profilePictureRef = useRef();
  const [profilePicture, setProfilePicture] = useState({
    file: null,
    url: null,
  });
  const navigate = useNavigate();

  const { ref, ...rest } = register("profilePicture", {
    onChange: (e) => handlerFile(e.target.files[0]),
    value: profilePicture.file,
  });

  useEffect(() => {
    return () => URL.revokeObjectURL(profilePicture.url);
  }, [profilePicture.file]);

  useEffect(() => {
    setValue("name", user.name);
    setValue("email", user.email);
    if (profilePicture.file == null) {
      setProfilePicture((prev) => ({
        ...prev,
        url: user.profilePicture,
      }));
    }
  }, [user]);

  async function update(user, data) {
    try {
      await updateUser(user, data);
    } catch (error) {
      console.error("Somethings was wrong updating user", error);
    }
  }

  async function onSubmit(data) {
    const bindUpdate = update.bind(null, user.id, {
      ...data,
      profilePicture: profilePicture.file,
    });
    try {
      await bindUpdate();
    } catch (err) {
      if (err.code !== "auth/requires-recent-login") {
        console.error(err);
        return;
      }
      reauthenticateUser(() => {
        navigate("/confirmAuth", {
          state: {
            next: "/settings/profile",
            onAuth: bindUpdate,
          },
        });
      });

      await bindUpdate();
    }
  }

  function handlerFile(file) {
    if (!file) return;
    setProfilePicture({
      file,
      url: URL.createObjectURL(file),
    });
  }

  const handlerOpen = useCallback(
    () => profilePictureRef.current.click(),
    [profilePictureRef]
  );

  return (
    <SettingsField title="public profile" onSubmit={handleSubmit(onSubmit)}>
      <main className="flex">
        <div className="flex-[0.6] flex flex-col gap-4">
          <SignField
            label="Name"
            type="text"
            error={errors.name?.message}
            {...register("name", {
              required: "This field is required",
            })}
          />
          <SignField
            label="Email"
            type="text"
            error={errors.email?.message}
            {...register("email", {
              required: "This field is required",
              validate: emailValidation,
            })}
          />
        </div>
        <div className="flex-[0.4] flex flex-col justify-between items-center">
          <DropImage
            className="flex justify-center items-center w-40 h-40 rounded-full border border-gray-500 overflow-hidden transition-all"
            onDrop={handlerFile}
            dragOverClass="ring ring-offset-2 ring-gray-500"
          >
            <img
              className="w-full h-full object-cover cursor-pointer transition-all hover:grayscale"
              src={profilePicture.url || ProfileImage}
              alt="profile picture"
              referrerPolicy="no-referrer"
              onClick={handlerOpen}
            />
            <input
              className="hidden"
              type="file"
              accept="image/*"
              ref={(e) => {
                ref(e);
                profilePictureRef.current = e;
              }}
              {...rest}
            />
          </DropImage>
        </div>
      </main>
      <footer className="flex mt-8">
        <button
          className="flex-[0.2] px-4 py-2 rounded-lg bg-tiber-500 text-alabaster-500 transition-colors hover:bg-tiber-600"
          type="submit"
        >
          Update Profile
        </button>
      </footer>
    </SettingsField>
  );
}

export default Profile;
