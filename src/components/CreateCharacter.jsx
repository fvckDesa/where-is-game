// types
import PropTypes from "prop-types";
// components
import Character from "./Character";
import DropImage from "./DropImage";
// hooks
import { useEffect, useRef } from "react";
// assets
import EmptyCharacter from "@assets/EmptyCharacter.svg";

function CreateCharacter({
  character,
  isSelected,
  onChange,
  onSelect,
  hasError,
}) {
  const {
    name,
    image,
    coords: { x, y },
  } = character;
  const inputRef = useRef();

  useEffect(() => {
    () => URL.revokeObjectURL(image.url);
  }, [image.file]);

  function handlerClick() {
    inputRef.current.click();
  }

  function changeFile(file) {
    onChange({ image: { file, url: URL.createObjectURL(file) } });
  }

  function handlerFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    changeFile(file);
  }

  function handlerNameChange(e) {
    onChange({ name: e.target.value });
  }

  return (
    <li className="relative">
      <DropImage
        className={`px-2 border-4 rounded-xl ${
          hasError ? "border-solid border-red-600" : "border-transparent"
        }`}
        dragOverClass="border-white border-dashed"
        onDrop={changeFile}
      >
        <div className="flex items-center gap-4">
          <div
            className={`cursor-pointer transition-all duration-300 border-2 rounded-full ${
              isSelected ? "border-cyan-300" : "border-transparent"
            } hover:grayscale`}
            onClick={handlerClick}
          >
            <input
              ref={inputRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handlerFileChange}
            />
            <Character
              className="overflow-hidden"
              image={image.url || EmptyCharacter}
              name={name}
            />
          </div>
          <input
            className="text-tiber p-1 rounded"
            type="text"
            placeholder="Character name..."
            value={name}
            onChange={handlerNameChange}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>x: {x ? Math.round(x) : "unset"}</span>
          <span>y: {y ? Math.round(y) : "unset"}</span>
        </div>
        <button
          type="button"
          className="absolute bottom-0 right-0 flex"
          onClick={() => onSelect({ x, y })}
        >
          <lord-icon
            src="https://cdn.lordicon.com/iltqorsz.json"
            trigger="click"
            colors="primary:#ffffff,secondary:#ff0000"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
        </button>
      </DropImage>
    </li>
  );
}

CreateCharacter.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.shape({
      file: PropTypes.instanceOf(File),
      url: PropTypes.string,
    }),
    coords: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  hasError: PropTypes.bool,
};

export default CreateCharacter;
