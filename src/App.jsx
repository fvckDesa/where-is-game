import { Suspense } from "react";
// components
import { Routes, Route } from "react-router-dom";
import { Navbar, Loader } from "@src/components";
// lazy components
import {
  Home,
  Game,
  LeaderBoard,
  Table,
  LeaderBoardRoot,
  Create,
} from "@src/pages";

function App() {
  return (
    <div className="w-screen h-screen bg-alabaster">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/create" element={<Create />} />
          <Route path="/leaderboard" element={<LeaderBoard />}>
            <Route index element={<LeaderBoardRoot />} />
            <Route path=":id" element={<Table />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
