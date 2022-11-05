// types
import PropTypes from "prop-types";
import { reactChildrenType } from "@src/types";
// hooks
import { useState } from "react";

function DropImage({ className, dragOverClass, onDrop, children }) {
  const [isDragOver, setIsDragOver] = useState(false);

  function handlerDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  }

  function handlerDragLeave(e) {
    e.preventDefault();
    setIsDragOver(false);
  }

  function handlerDrop(e) {
    e.preventDefault();
    onDrop(e.dataTransfer.files[0]);
    setIsDragOver(false);
  }

  return (
    <div
      className={`${className} ${isDragOver ? dragOverClass : ""}`}
      onDragOver={handlerDragOver}
      onDragLeave={handlerDragLeave}
      onDragEnd={handlerDragLeave}
      onDrop={handlerDrop}
    >
      {children}
    </div>
  );
}

DropImage.propTypes = {
  className: PropTypes.string,
  dragOverClass: PropTypes.string,
  onDrop: PropTypes.func,
  children: reactChildrenType,
};

export default DropImage;
