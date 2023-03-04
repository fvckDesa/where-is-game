// types
import PropTypes from "prop-types";
import { reactChildrenType } from "@src/types";
// layout
import { TitleLayout } from "./";
// hooks
import { useUserContext } from "@src/contexts/UserProvider";
// data
import { PROVIDERS } from "@src/data/providers";

function SignLayout({ title, redirect, children }) {
  const { signInWithProvider } = useUserContext();

  function handlerProvider(name) {
    return async function () {
      await signInWithProvider(name);
      redirect();
    };
  }

  return (
    <TitleLayout title={title}>
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
    </TitleLayout>
  );
}

SignLayout.propTypes = {
  title: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
  children: reactChildrenType.isRequired,
};

export default SignLayout;
