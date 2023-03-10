import { Suspense } from "react";
// components
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Loader } from "@src/components";
// lazy components
import {
  Home,
  Game,
  LeaderBoard,
  Table,
  LeaderBoardRoot,
  Create,
  SignIn,
  SignUp,
  Profile,
  Authentication,
  ConfirmAuth,
  NotFound,
  Actions,
  PlayerGames,
} from "@src/pages";
import { SettingsLayout, AuthLayout } from "@src/layouts";

function App() {
  return (
    <div className="w-screen h-screen bg-alabaster-500">
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
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="confirmAuth" element={<ConfirmAuth />} />
            <Route path="actions" element={<Actions />} />
          </Route>
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="games" element={<PlayerGames />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
