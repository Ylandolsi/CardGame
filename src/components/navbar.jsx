function Navbar({ ActualScore = 0, MaxScore = 0 }) {
  return (
    <div className="flex  flex-col justify-center items-center m-10 pb-4">
      <div className="font-bold text-6xl pb-5">Pokemon Card Game </div>
      <div className="text-3xl font-bold">ActualScore: {ActualScore} </div>
      <div className="text-2xl">MaxScore: {MaxScore}</div>
    </div>
  );
}
export { Navbar };
