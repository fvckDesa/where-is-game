// types
import PropTypes from "prop-types";
import { gameType } from "@types";
// hooks
import { useCharacters } from "@hooks/useCharacters";
// components
import { Link } from "react-router-dom";
import Character from "@components/Character";

function GameCard({ game: { id, name, image }, baseUrl, isActive = false }) {
  const characters = useCharacters(id);
  return (
    <li
      key={id}
      className="flex justify-center items-center w-[250px] h-[300px] overflow-hidden relative rounded-xl cursor-pointer group bg-tiber"
    >
      <Link className="w-full h-full" to={`/${baseUrl}/${id}`}>
        <img
          src={image}
          alt={`${name} game image`}
          className="w-full object-cover"
        />
        <div
          className={`absolute ${
            isActive ? "top-0" : "top-full"
          } flex justify-center items-end p-5 w-full h-full text-white shadow-game transition-all duration-300 group-hover:top-0`}
        >
          {name}
        </div>
        <div className="absolute top-3 right-3 flex justify-end gap-1">
          {characters.map(({ id, image, name }, i) => (
            <Character
              key={id}
              name={name}
              image={image}
              className="absolute top-0"
              style={{ right: `${30 * i}px`, zIndex: 3 - i }}
            />
          ))}
        </div>
      </Link>
    </li>
  );
}

GameCard.propTypes = {
  game: gameType.isRequired,
  baseUrl: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default GameCard;
