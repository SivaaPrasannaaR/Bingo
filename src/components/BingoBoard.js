import React from 'react'
import Card from './Card'

const BingoBoard = (props) => {
  // console.log('BingoBoard', props.numberHolder)
  const decidePlayer = props.player === 'p1' ? true : false

  return (
    <div className="bingoBoardContainer">
      <div className="wrapper">
        {props.numberHolder.map((item, index) => {
          return (
            <Card
              key={item.num}
              id={index}
              val={item}
              decidePlayer={decidePlayer}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BingoBoard
