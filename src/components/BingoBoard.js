import React from 'react'
import { useDataContext } from '../context/DataContext'
import Card from './Card'

const BingoBoard = () => {
  const { numberOneHolder, setNumberOneHolder } = useDataContext()
  console.log('BingoBoard', numberOneHolder)
  return (
    <div className="bingoBoardContainer">
      <div className="wrapper">
        {numberOneHolder.map((item) => {
          return (
            <Card
              key={item.num}
              val={item}
              numberOneHolder={numberOneHolder}
              setNumberOneHolder={setNumberOneHolder}
              bgColor={item.numColor}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BingoBoard
