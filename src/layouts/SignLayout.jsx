// hooks
import { useUserContext } from "@src/contexts/UserProvider";
// assets
import Google from "@src/assets/Google.svg";
import Github from "@src/assets/Github.svg";

const PROVIDERS = [
  {
    name: "Google",
    logo: Google,
    provider: "google",
  },
  {
    name: "Github",
    logo: Github,
    provider: "github",
  },
];

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
          <section className="grid grid-cols-2 gap-2">
            {PROVIDERS.map(({ name, logo, provider }) => (
              <button
                key={name}
                className="flex justify-center items-center gap-2 w-full p-2 border-2 rounded-full font-semibold hover:bg-gray-50 odd:last:col-span-full"
                type="button"
                onClick={handlerProvider(provider)}
              >
                <img className="w-6 h-6" src={logo} alt={`${name} logo`} />
                {name}
              </button>
            ))}
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
