import { DotWave } from "@uiball/loaders";

function Loader() {
  return (
    <div className="w-full h-[90%] flex justify-center items-center">
      <DotWave size={47} speed={1} color="black" />
    </div>
  );
}

export default Loader;
