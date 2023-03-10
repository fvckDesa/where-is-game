// components
import { Character } from "@src/components";
// hooks
import { useState, useEffect } from "react";
import { useUserContext } from "@src/contexts/UserProvider";
// firebase
import { getGameFromId, deleteGame } from "@src/firebase/database/games";
import { createUserRef } from "@database/users";
import { onSnapshot } from "firebase/firestore";
// assets
import calendar from "@src/assets/calendar.svg";
import trash_can from "@src/assets/trash-can.svg";

function PlayerGames() {
  const { user } = useUserContext();
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!user) {
      setGames([]);
      return;
    }

    return onSnapshot(createUserRef(user.id), async (doc) => {
      if (!doc.exists()) {
        setGames([]);
        return;
      }
      setGames(
        (await Promise.all(doc.data().games.map(getGameFromId))).filter(Boolean)
      );
    });
  }, [user?.id]);

  function handlerDelete(id) {
    return async function (e) {
      e.stopPropagation();
      deleteGame(id);
    };
  }

  return (
    <ul className="flex flex-col gap-4 w-full">
      {games.map((game) => (
        <li
          key={game.id}
          className="flex items-center w-full px-6 py-4 rounded-lg bg-white text-lg"
        >
          <div className="flex-1 flex items-center gap-4">
            <button
              className="p-2 rounded transition-colors hover:bg-slate-200"
              onClick={handlerDelete(game.id)}
            >
              <img className="w-6 h-6" src={trash_can} alt="trash can icon" />
            </button>
            <span>{game.name}</span>
          </div>
          <div className="flex-1 flex items-center gap-4">
            <img className="w-8 h-8" src={calendar} alt="calendar icon" />
            <span>{game.createdAt.toDate().toLocaleDateString()}</span>
          </div>
          <div className="relative flex-1 flex justify-end gap-1 w-36 h-12">
            {game.characters.map(({ id, image, name }, i) => (
              <Character
                key={id}
                name={name}
                image={image}
                className="absolute top-0"
                style={{ right: `${30 * i}px`, zIndex: 3 - i }}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PlayerGames;
