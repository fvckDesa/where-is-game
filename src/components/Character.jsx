// types
import PropTypes from "prop-types";

function Character({ name, image, className = "", style = {} }) {
  return (
    <div
      className={`${className} flex justify-center items-center w-12 h-12 rounded-full border-2 border-tiber bg-alabaster`}
      style={style}
    >
      <img
        className="object-cover"
        src={image}
        alt={`${name} character image`}
      />
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Character;
