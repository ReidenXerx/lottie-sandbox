// src/App.tsx
import { Container } from "@mui/material"
import React, { useState } from "react"
import BattleAnimation from "./components/BattleAnimation"
import BattleButton from "./components/BattleButton"
import BattleOutcome from "./components/BattleOutcome"

const App: React.FC = () => {
  const [isBattleStarted, setIsBattleStarted] = useState(false)
  const [outcome, setOutcome] = useState<"Victory" | "Defeat" | null>(null)

  const handleStartBattle = () => {
    setIsBattleStarted(true)
    // Reset outcome
    setOutcome(null)
  }

  const handleAnimationEnd = () => {
    setIsBattleStarted(false)
    // Randomly decide the outcome
    setOutcome(Math.random() < 0.5 ? "Victory" : "Defeat")
  }

  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", paddingTop: "50px" }}
    >
      <BattleButton onStartBattle={handleStartBattle} />
      {isBattleStarted && (
        <BattleAnimation
          isPlaying={isBattleStarted}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      <BattleOutcome outcome={outcome} />
    </Container>
  )
}

export default App
