import React from "react"
import DisplayPlayers from "./DisplayPlayers"

export const Players = (props) => {
  const [currentPlayer, setCurrentPlayer] = React.useState(1)

  const changeCurrentPlayer = () => {
    setCurrentPlayer((prevState) =>
      prevState > props.playerCount - 1
        ? prevState - props.playerCount + 1
        : prevState + 1
    )
  }

  return (
    <div>
      <div className="displayMultiPlayer">
        <div
          className="shooterWrapper"
          style={{ gridTemplateColumns: `repeat(${props.playerCount}, auto)` }}
        >
          {Array.from(new Array(props.playerCount)).map((_, index) => {
            return (
              <DisplayPlayers
                key={index + 1}
                currentPlayer={currentPlayer}
                isTimeToPlay={index + 1 != currentPlayer}
                changeCurrentPlayer={changeCurrentPlayer}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
