// hooks
import { useLeaderboard } from "@src/hooks";
import { useParams } from "react-router-dom";
// utils
import { formatTimer } from "@src/utils";

function Table() {
  const { id: gameId } = useParams();
  const leaderboard = useLeaderboard(gameId);
  return (
    <ul className="w-full h-full overflow-y-auto relative">
      <li className="tableItem sticky top-0 left-0 bg-tiber-500 text-white">
        <div>Pos</div>
        <div>Name</div>
        <div>Score</div>
        <div>Date</div>
      </li>
      {leaderboard.map(({ id, name, score, date }, i) => (
        <li key={id} className="tableItem border-2 border-t-0 border-slate-600">
          <div>{i + 1}</div>
          <div>{name}</div>
          <div>{formatTimer(score)}</div>
          <div>{date?.toDate().toLocaleDateString()}</div>
        </li>
      ))}
    </ul>
  );
}

export default Table;
