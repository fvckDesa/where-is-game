import PropTypes from "prop-types";

export const coordType = PropTypes.exact({
  x: PropTypes.number,
  y: PropTypes.number,
});

export const characterType = PropTypes.exact({
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  coords: coordType,
  found: PropTypes.bool,
});
