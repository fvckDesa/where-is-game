import SelectOption from "@assets/selectOption.svg";

function LeaderBoardRoot() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <img
        className="h-[150px]"
        src={SelectOption}
        alt="select option illustration"
      />
      <h1 className="text-xl text-tiber font-semibold">
        Select one game for see its leaderboard
      </h1>
    </div>
  );
}

export default LeaderBoardRoot;
