import { lazy } from "react";
// components
import { Routes, Route } from "react-router-dom";
// lazy components
const Home = lazy(() => import("@pages/Home"));
const Game = lazy(() => import("@pages/Game"));
const Score = lazy(() => import("@pages/Score"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:image" element={<Game />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}

export default App;
