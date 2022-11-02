function format(time) {
  return String(time).padStart(2, "0");
}

export function formatTimer(timer) {
  let s = timer;
  const h = Math.floor(s / 3600);
  s %= 3600;
  const m = Math.floor(s / 60);
  s %= 60;
  return `${format(h)}:${format(m)}:${format(s)}`;
}

export function createCoordInRange(range) {
  return function isCoordInRange(coord, mainCoord) {
    return coord >= mainCoord - range && coord <= mainCoord + range;
  };
}
