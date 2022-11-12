import { forwardRef } from "react";
// types
import PropTypes from "prop-types";

const SignField = forwardRef(
  ({ label, name, type, error, value, onChange, className = "" }, ref) => {
    return (
      <div>
        <label
          className={`block w-full mb-1 ${error ? "text-red-500" : ""}`}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          ref={ref}
          className={`${className} w-full px-5 py-2 border-2 ${
            error ? "!border-red-500" : "border-gray-300"
          } rounded-full transition-all focus:border-blue-600`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        {error && <div className="mt-2 text-red-500">{error}</div>}
      </div>
    );
  }
);

SignField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default SignField;
