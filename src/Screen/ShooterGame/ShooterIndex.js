import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import ShowNumbers from './components/ShowNumbers'
import { Players } from './components/Players'

export const ShooterIndex = () => {
  const [display, setDisplay] = useState(false)
  const [playerCount, setPlayerCount] = useState(2)

  const addPlayerCount = () => {
    setPlayerCount((prevState) => prevState + 1)
  }
  const subPlayerCount = () => {
    setPlayerCount((prevState) => prevState - 1)
  }
  const handleSubmit = () => {
    setDisplay(true)
  }

  return (
    <>
      <Dashboard />
      {display ? (
        <div className="headContainer">
          <div className="displayNumbers">
            <ShowNumbers />
          </div>
          <Players playerCount={playerCount} />
        </div>
      ) : (
        <div>
          <h1>Player Count: {playerCount}</h1>
          <div>
            <button onClick={addPlayerCount} className="rollDiceButton">
              +
            </button>
            <button onClick={subPlayerCount} className="rollDiceButton">
              -
            </button>
          </div>
          <button onClick={handleSubmit} className="rollDiceButton">
            Submit
          </button>
        </div>
      )}
    </>
  )
}
