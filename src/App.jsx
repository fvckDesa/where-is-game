import { Suspense, lazy } from "react";
// components
import { Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import Loader from "@components/Loader";
// lazy components
const Home = lazy(() => import("@pages/Home"));
const Game = lazy(() => import("@pages/Game"));
const LeaderBoard = lazy(() => import("@pages/LeaderBoard"));
const Table = lazy(() => import("@pages/Table"));
const LeaderBoardRoot = lazy(() => import("@pages/LeaderBoardRoot"));

function App() {
  return (
    <div className="w-screen h-screen bg-alabaster">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
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
