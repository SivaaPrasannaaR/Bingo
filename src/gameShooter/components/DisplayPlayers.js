import React from "react"
import DisplayImage from "./DisplayImage"
import { generateRandomNum } from "../functions/generateRandomNum"
// import { currentPlayer } from '../functions/AllShooterValue'

const DisplayPlayers = (props) => {
  const [box1Count, setBox1Count] = React.useState(0)
  const [box3Count, setBox3Count] = React.useState(0)
  const [box5Count, setBox5Count] = React.useState(0)
  const [box7Count, setBox7Count] = React.useState(0)
  const [box9Count, setBox9Count] = React.useState(0)

  const handleBox1Count = {
    add: () =>
      setBox1Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState + 1
      ),

    subtract: () =>
      setBox1Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState - 1
      ),
  }
  const handleBox3Count = {
    add: () =>
      setBox3Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState + 1
      ),

    subtract: () =>
      setBox3Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState - 1
      ),
  }
  const handleBox5Count = {
    add: () =>
      setBox5Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState + 1
      ),

    subtract: () =>
      setBox5Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState - 1
      ),
  }
  const handleBox7Count = {
    add: () =>
      setBox7Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState + 1
      ),

    subtract: () =>
      setBox7Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState - 1
      ),
  }
  const handleBox9Count = {
    add: () =>
      setBox9Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState + 1
      ),

    subtract: () =>
      setBox9Count((prevState) =>
        prevState > 8 ? prevState - 8 : prevState - 1
      ),
  }

  const [diceNumber, setDiceNumber] = React.useState(generateRandomNum())

  const handleRandomNum = () => {
    const random_number = generateRandomNum()
    setDiceNumber(random_number)

    if (random_number === 1) {
      handleBox1Count.add()
    } else if (random_number === 3) {
      handleBox3Count.add()
    } else if (random_number === 5) {
      handleBox5Count.add()
    } else if (random_number === 7) {
      handleBox7Count.add()
    } else if (random_number === 9) {
      handleBox9Count.add()
    }

    props.changeCurrentPlayer()
  }

  return (
    <div>
      <div className="imgDiv">
        <button
          onClick={handleRandomNum}
          className="rollDiceButton"
          disabled={props.isTimeToPlay}
          // disabled={isButtonDisabled}
          style={
            props.isTimeToPlay
              ? { backgroundColor: "red" }
              : { backgroundColor: "teal" }
          }
        >
          {diceNumber}
        </button>
      </div>
      <div className="imgDiv">
        <DisplayImage count={box1Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={box3Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={box5Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={box7Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={box9Count} />
      </div>
    </div>
  )
}
export default DisplayPlayers
