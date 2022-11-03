// hooks
import { useAllGames } from "@hooks/useAllGames";
// components
import GameCard from "@components/GameCard";
import { Outlet, useParams } from "react-router-dom";

function LeaderBoard() {
  const games = useAllGames();
  const { id: gameId } = useParams();
  return (
    <div className="flex flex-col w-full h-[90%] px-4">
      <ul className="carousel w-full snap-proximity snap-x overflow-auto flex justify-center items-center gap-8">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            baseUrl="leaderboard"
            isActive={gameId === game.id}
          />
        ))}
      </ul>
      <div className="w-full h-[40%] max-w-[800px] m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default LeaderBoard;
