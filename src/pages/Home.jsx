import { useAllGames } from "@hooks/useAllGames";
import GameCard from "@components/GameCard";

function Home() {
  const games = useAllGames();
  return (
    <div className="h-auto overflow-y-auto bg-alabaster">
      <ul className="flex justify-center items-center flex-wrap gap-5 overflow-y-auto">
        {games.map((game) => (
          <GameCard key={game.id} game={game} baseUrl="game" />
        ))}
      </ul>
    </div>
  );
}

export default Home;
