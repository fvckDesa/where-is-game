import PropTypes from "prop-types";
// firebase
import { Timestamp } from "firebase/firestore";

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

export const gameType = PropTypes.exact({
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  createdAt: PropTypes.instanceOf(Timestamp),
});

export const htmlElementType = PropTypes.instanceOf(HTMLElement);

export const reactChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);
