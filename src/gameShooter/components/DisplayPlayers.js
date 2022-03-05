import React, { useCallback } from "react"
import DisplayImage from "./DisplayImage"
import { generateRandomNum } from "../functions/generateRandomNum"
// import { currentPlayer } from '../functions/AllShooterValue'

const DisplayPlayers = (props) => {
  const hardCode = {
    add: "add",
    subtract: "subtract",
  }
  const [diceNumber, setDiceNumber] = React.useState(generateRandomNum())
  const [boxCount, setBoxCount] = React.useState({
    box1Count: 0,
    box3Count: 0,
    box5Count: 0,
    box7Count: 0,
    box9Count: 0,
  })

  const updateBoxCount = (random_number) => {
    const handleBoxCount = (box, doCalc) => {
      const calcValue = doCalc === hardCode.add ? box + 1 : box - 1
      const boxValue = box > 8 ? box - 8 : calcValue
      return boxValue
    }

    if (random_number === 1) {
      setBoxCount({
        ...boxCount,
        box1Count: handleBoxCount(boxCount.box1Count, hardCode.add),
      })
    } else if (random_number === 3) {
      setBoxCount({
        ...boxCount,
        box3Count: handleBoxCount(boxCount.box3Count, hardCode.add),
      })
    } else if (random_number === 5) {
      setBoxCount({
        ...boxCount,
        box5Count: handleBoxCount(boxCount.box5Count, hardCode.add),
      })
    } else if (random_number === 7) {
      setBoxCount({
        ...boxCount,
        box7Count: handleBoxCount(boxCount.box7Count, hardCode.add),
      })
    } else if (random_number === 9) {
      setBoxCount({
        ...boxCount,
        box9Count: handleBoxCount(boxCount.box9Count, hardCode.add),
      })
    }
  }

  const handleRandomNum = () => {
    const random_number = generateRandomNum()
    setDiceNumber(random_number)

    updateBoxCount(random_number) // used to update the img count in state value

    props.changeCurrentPlayer()
  }

  return (
    <div>
      <div className="imgDiv">
        <button
          onClick={handleRandomNum}
          className="rollDiceButton"
          disabled={props.isTimeToPlay}
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
        <DisplayImage count={boxCount.box1Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={boxCount.box3Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={boxCount.box5Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={boxCount.box7Count} />
      </div>
      <div className="imgDiv">
        <DisplayImage count={boxCount.box9Count} />
      </div>
    </div>
  )
}
export default DisplayPlayers
