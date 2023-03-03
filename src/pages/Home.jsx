// components
import { GameCard } from "@src/components";
// hooks
import { useAllGames } from "@src/hooks";

function Home() {
  const games = useAllGames();
  return (
    <div className="w-full h-[90%] px-8 pb-6 overflow-y-auto bg-alabaster-500">
      <ul className="flex justify-center items-center flex-wrap gap-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} baseUrl="game" />
        ))}
      </ul>
    </div>
  );
}

export default Home;
