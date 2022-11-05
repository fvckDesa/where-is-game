// types
import PropTypes from "prop-types";
import { characterType } from "@src/types";
// utils
import { formatTimer } from "@src/utils";
// components
import Character from "@src/components/Character";

function GameNavbar({ characters, timer }) {
  return (
    <header className="h-[10%] flex justify-center items-center gap-4">
      {characters.map(({ name, image, id, found }) => (
        <div
          className={`flex justify-center items-center gap-1 ${
            found ? "opacity-40" : ""
          }`}
          key={id}
        >
          <Character name={name} image={image} />
          <span>{name}</span>
        </div>
      ))}
      <h1>{formatTimer(timer)}</h1>
    </header>
  );
}

GameNavbar.propTypes = {
  characters: PropTypes.arrayOf(characterType).isRequired,
  timer: PropTypes.number.isRequired,
};

export default GameNavbar;
