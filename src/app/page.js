"use client";
import { useState } from "react";
import Questions from "./components/Question";
import Results from "./components/Results";

export default function Home() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div>
      {!showResults ? <Questions onComplete={() => setShowResults(true)} /> : <Results />}
    </div>
  );
}
