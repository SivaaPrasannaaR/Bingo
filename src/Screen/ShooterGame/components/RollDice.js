import React, { useState } from 'react'
import {
  handleBox1Count,
  handleBox3Count,
  handleBox5Count,
  handleBox7Count,
  handleBox9Count,
} from './DisplayPlayers'

const RollDice = () => {
  const [diceNumber, setDiceNumber] = useState(1)
  const generateRandomNum = () => {
    let randNum = Math.floor(Math.random() * 10) + 1
    const random_number = randNum % 2 === 0 ? randNum - 1 : randNum
    setDiceNumber(random_number)

    if (random_number === 1) {
      handleBox1Count()
    } else if (random_number === 3) {
      handleBox3Count()
    } else if (random_number === 5) {
      handleBox5Count()
    } else if (random_number === 7) {
      handleBox7Count()
    } else if (random_number === 9) {
      handleBox9Count()
    }
  }

  return (
    <div className="displayPlayers">
      <button onClick={generateRandomNum} className="rollDiceButton">
        {diceNumber}
      </button>
    </div>
  )
}
export default RollDice
