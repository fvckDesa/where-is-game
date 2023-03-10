// types
import PropTypes from "prop-types";
import { reactChildrenType } from "@src/types";
// components
import { Ring } from "@uiball/loaders";

function ButtonLoader({ isLoading, className, children }) {
  return (
    <button className={`flex justify-center items-center ${className}`} type="submit">
      {isLoading ? (
        <Ring size={30} lineWeight={5} speed={2} color="white" />
      ) : (
        children
      )}
    </button>
  );
}

ButtonLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: reactChildrenType,
};

export default ButtonLoader;
