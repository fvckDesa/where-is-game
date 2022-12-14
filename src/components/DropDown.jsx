// types
import PropTypes from "prop-types";
import { characterType } from "@src/types";
// components
import Character from "@src/components/Character";

function DropDown({ characters, onSelect, onClose, x, y }) {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-10" onClick={onClose}>
      <ul
        className={`absolute bg-white rounded-lg shadow-xl overflow-hidden translate-x-[20%] translate-y-[20%]`}
        style={{ top: y, left: x }}
      >
        {characters
          .filter((character) => !character.found)
          .map(({ id, name, image, coords }) => (
            <li
              key={id}
              className="flex items-center gap-3 px-4 py-2 border-b-2 border-b-slate-400 last:border-b-0 hover:bg-slate-300 transition-colors duration-300 cursor-pointer"
              onClick={() => onSelect(id, coords)}
            >
              <Character name={name} image={image} />
              <span>{name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

DropDown.propTypes = {
  characters: PropTypes.arrayOf(characterType).isRequired,
  onSelect: PropTypes.func,
  onClose: PropTypes.func,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default DropDown;
