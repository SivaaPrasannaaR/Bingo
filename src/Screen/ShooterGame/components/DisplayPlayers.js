import React, { useState } from 'react'
import img_0 from '../../../assets/img_4.png'
import DisplayImage from './DisplayImage'

export let handleBox1Count
export let handleBox3Count
export let handleBox5Count
export let handleBox7Count
export let handleBox9Count

const DisplayPlayers = () => {
  // const [box1Count, setBox1Count] = useState(0)
  // const [box3Count, setBox3Count] = useState(0)
  // const [box5Count, setBox5Count] = useState(0)
  // const [box7Count, setBox7Count] = useState(0)
  // const [box9Count, setBox9Count] = useState(0)

  let box1Count = 0
  let box3Count = 0
  let box5Count = 0
  let box7Count = 0
  let box9Count = 0

  handleBox1Count = () => {
    // setBox1Count((prevState) => prevState + 1)
    // console.log('1 called')
    box1Count = box1Count + 1
  }
  handleBox3Count = () => {
    // setBox3Count((prevState) => prevState + 1)
    box3Count = box3Count + 1
  }
  handleBox5Count = () => {
    // setBox5Count((prevState) => prevState + 1)
    box5Count = box5Count + 1
  }
  handleBox7Count = () => {
    // setBox7Count((prevState) => prevState + 1)
    box7Count = box7Count + 1
  }
  handleBox9Count = () => {
    // setBox9Count((prevState) => prevState + 1)
    box9Count = box9Count + 1
  }

  return (
    <div className="displayPlayers">
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
