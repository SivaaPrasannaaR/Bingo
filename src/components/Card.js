import React from 'react'
export const GetStrikeNumber = () => {}

export default function Card(props) {
  const [bgColor, setBgColor] = React.useState(props.bgColor)

  const onClickHandler = () => {
    const updateNum = props.numberOneHolder
    updateNum.map((item) => {
      if (item.num == props.val.num) {
        item.used = true
        item.numColor = 'red'
        setBgColor(item.numColor)
      }
    })

    props.setNumberOneHolder(updateNum)
    // const kkk = props.numberOneHolder.find((p) => p.num == props.val.num).numColor
    // setBgColor(kkk)
    // console.log(props.numberOneHolder)
    // console.log(bgColor)
  }

  return (
    <div className="card">
      <div>
        <button
          className="boardButton"
          style={{ backgroundColor: bgColor }}
          onClick={onClickHandler}
        >
          {props.val.num}
        </button>
      </div>
    </div>
  )
}
