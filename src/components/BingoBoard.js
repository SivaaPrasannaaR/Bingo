import React from 'react'
import Card from './Card'
import { GenerateBingoNumbers } from './GenerateBingoNumbers'

const BingoBoard = () => {
  const [numberHolder, setNumberHolder] = React.useState(GenerateBingoNumbers())

  return (
    <div className="bingoBoardContainer">
      <div className="wrapper">
        {numberHolder.map((item) => {
          return <Card val={item} />
        })}
      </div>
    </div>
  )
}

export default BingoBoard
