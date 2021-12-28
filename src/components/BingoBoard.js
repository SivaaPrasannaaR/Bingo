import React from 'react'
import { useDataContext } from '../context/DataContext'
import Card from './Card'

const BingoBoard = () => {
  const { numberOneHolder, setNumberOneHolder } = useDataContext()
  console.log('BingoBoard', numberOneHolder)

  // const [bgColor, setBgColor] = React.useState('teal')

  // const onClickHandler = (val) => {
  //   const updateNum = numberOneHolder
  //   updateNum.map((item) => {
  //     if (item.num == val.num) {
  //       item.used = true
  //       item.numColor = 'red'
  //       setBgColor(item.numColor)
  //     }
  //   })
  //   console.log('updateNum', updateNum)
  //   setNumberOneHolder(updateNum)
  // setBgColor(
  //   props.numberOneHolder.find((p) => p.num == props.val.num).numColor
  // )
  // const kkk = props.numberOneHolder.find((p) => p.num == props.val.num).numColor
  // setBgColor(props.numberOneHolder.find((p) => p.num == props.val.num).numColor)
  // console.log(props.numberOneHolder)
  // console.log(bgColor)
  // }
  return (
    <div className="bingoBoardContainer">
      <div className="wrapper">
        {numberOneHolder.map((item, id) => {
          return (
            <Card
              key={item.num}
              val={item}
              numberOneHolder={numberOneHolder}
              setNumberOneHolder={setNumberOneHolder}
              bgColor={item.numColor}
            />
            // <div className="card">
            //   <button
            //     className="boardButton"
            //     style={
            //       { backgroundColor: bgColor }
            //       // item.used
            //       //   ? { backgroundColor: bgColor }
            //       //   : { backgroundColor: 'teal' }
            //     }
            //     onClick={() => onClickHandler(item)}
            //   >
            //     {item.num}
            //   </button>
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default BingoBoard
