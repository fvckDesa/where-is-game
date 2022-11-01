// types
import PropTypes from "prop-types";
import { characterType } from "@types";
// utils
import { formatTimer } from "@utils";

function GameNavbar({ characters, timer }) {
  return (
    <header className="h-[10%] flex justify-center items-center">
      {characters.map(({ name, image, id, found }) => (
        <div className={`character ${found ? "opacity-40" : ""}`} key={id}>
          <img src={image} alt={`${name} image`} />
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
