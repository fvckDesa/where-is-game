// hooks
import { useUserContext } from "@src/contexts/UserProvider";
// assets
import Google from "@src/assets/Google.svg";

function SignLayout({ title, redirect, children }) {
  const { signInWithProvider } = useUserContext();

  function handlerProvider(name) {
    return async function () {
      await signInWithProvider(name);
      redirect();
    };
  }

  return (
    <div className="w-full h-[90%] px-6 py-10 overflow-y-scroll">
      <div className="flex flex-col justify-center items-center gap-4 max-w-md mx-auto">
        <h1 className="self-start text-3xl font-bold text-gray-700">{title}</h1>
        <div className="w-full p-8 rounded-lg bg-white shadow">
          <section>
            <button
              className="flex justify-center items-center gap-2 w-full p-2 border-2 rounded-full font-semibold hover:bg-gray-50"
              type="button"
              onClick={handlerProvider("google")}
            >
              <img className="w-6 h-6" src={Google} alt="Google logo" />
              Sign in with Google
            </button>
          </section>
          <div className="relative flex justify-center items-center my-4 text-sm">
            <div className="absolute w-full border-t border-gray-300" />
            <span className="relative px-2 bg-white text-gray-500">
              or {title} with Email
            </span>
          </div>
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
}

export default SignLayout;
