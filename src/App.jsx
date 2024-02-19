import React, { useState } from "react";
import RollGame from "./components/RollGame";
import StartGame from "./components/StartGame";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleGameStarted = () => {
    setGameStarted(!gameStarted);
  };
  return (
    <main className="min-h-[856px] max-h-[1024px] max-w-[1440px] flex justify-center px-[5%] py-[2%]">
      {gameStarted ? <RollGame /> : <StartGame toggle={toggleGameStarted} />}
    </main>
  );
}

export default App;
