// types
import PropTypes from "prop-types";
// hooks
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// firebase
import { setGameScore } from "@appFirebase/database";
// utils
import { formatTimer } from "@utils";

function GameOver({ score }) {
  const [name, setName] = useState("");
  const { id: gameId } = useParams();
  const navigation = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    setGameScore(gameId, name, score);
    navigation(`/leaderboard/${gameId}`);
  }

  return (
    <div
      className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[#00000088] z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <form
        className="flex flex-col gap-2 rounded-lg bg-alabaster p-5 translate-y-[-50%]"
        onSubmit={handlerSubmit}
      >
        <h2 className="text-xl font-bold">Score: {formatTimer(score)}</h2>
        <p>Enter your name for save your score in leaderboard</p>
        <input
          type="text"
          className="p-1 rounded"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="bg-tiber text-alabaster rounded h-8">
          Submit
        </button>
      </form>
    </div>
  );
}

GameOver.propTypes = {
  score: PropTypes.number,
};

export default GameOver;
