// types
import PropTypes from "prop-types";
import { reactChildrenType } from "@types";

function CreateField({ label, children }) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-xl font-semibold">{label}</label>
      {children}
    </div>
  );
}

CreateField.propTypes = {
  label: PropTypes.string,
  children: reactChildrenType,
};

export default CreateField;
