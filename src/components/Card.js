import React from 'react'
import { useDataContext } from '../context/DataContext'

export default function Card(props) {
  const [bgColor, setBgColor] = React.useState('')
  const { createUser, updateUser } = useDataContext()

  // const [numberHolder, setNumberHolder] = React.useState(props.val)

  const onClickHandler = () => {
    setBgColor('red')
    props.val.used = true
    console.log('props.val.num', props.val.num)
    console.log('props.val.used', props.val.used)
    updateUser(props.val.num, props.val.used)
  }

  return (
    <div className="card">
      <div key={props.val.num}>
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
