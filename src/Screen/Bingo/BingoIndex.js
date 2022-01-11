import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import ScoreBoard from '../ScoreBoard'
import BingoBoard from '../../components/BingoBoard'
import { useDataContext } from '../../context/DataContext'

export const BingoIndex = () => {
  const [displayBoard, setDisplayBoard] = useState(false)
  const { numberOneHolder, numberTwoHolder } = useDataContext()

  return (
    <>
      <Dashboard display={setDisplayBoard} />

      <div className="headBoardContainer">
        <ScoreBoard />
        <div className="boardContainer">
          {displayBoard && (
            <BingoBoard numberHolder={numberOneHolder} player={'p1'} />
          )}
          {displayBoard && (
            <BingoBoard numberHolder={numberTwoHolder} player={'p2'} />
          )}
        </div>
      </div>
    </>
  )
}
