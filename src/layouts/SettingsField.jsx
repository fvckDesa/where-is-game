// types
import PropTypes from "prop-types";
import { reactChildrenType } from "@src/types";

function SettingsField({ title, className = "", onSubmit, children }) {
  return (
    <div>
      <div className="pb-2 border-b-2 border-tiber-500">
        <h1 className="text-2xl font-medium capitalize">{title}</h1>
      </div>
      <form className={`p-8 ${className}`} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

SettingsField.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: reactChildrenType,
};

export default SettingsField;
