import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { ListCards } from "../components/listCards";
import useLocalStorage from "../hooks/useLocalStorage";
export default function Page() {
  const [ActualScore, setActualScore] = useLocalStorage("ActualScore", 0);
  const [MaxScore, setMaxScore] = useLocalStorage("MaxScore", 0);
  return (
    <div className="flex flex-col ">
      <Navbar
        ActualScore={ActualScore}
        setActualScore={setActualScore}
        setMaxScore={setMaxScore}
        MaxScore={MaxScore}
      />
      <ListCards
        ActualScore={ActualScore}
        setActualScore={setActualScore}
        setMaxScore={setMaxScore}
        MaxScore={MaxScore}
      />
    </div>
  );
}
