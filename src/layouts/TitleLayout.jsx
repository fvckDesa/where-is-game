// types
import PropTypes from "prop-types";
import { reactChildrenType } from "@src/types";

function TitleLayout({ title, children }) {
  return (
    <div className="w-full h-[90%] px-6 py-10 overflow-y-scroll">
      <div className="flex flex-col justify-center items-center gap-4 max-w-md mx-auto">
        <h1 className="self-start text-3xl font-bold text-gray-700 capitalize">
          {title}
        </h1>
        <div className="w-full p-8 rounded-lg bg-white shadow">{children}</div>
      </div>
    </div>
  );
}

TitleLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: reactChildrenType.isRequired,
};

export default TitleLayout;
