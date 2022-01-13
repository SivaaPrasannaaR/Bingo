import React, { useState } from 'react'
import { AssignOrderValueToArray } from '../../../generalFunction/AssignValueToArray'
import DisplayPlayers from './DisplayPlayers'

export const Players = (props) => {
  let arr = AssignOrderValueToArray(props.playerCount)

  // const [currentPlayer, setCurrentPlayer] = useState(1)

  return (
    <div>
      <div className="displayMultiPlayer">
        <div
          className="shooterWrapper"
          style={{ gridTemplateColumns: `repeat(${props.playerCount}, auto)` }}
        >
          {arr.map((item, index) => {
            return (
              <DisplayPlayers
                player={item}
                key={index + 1}
                playerCount={props.playerCount}
                // currentPlayer={currentPlayer}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
