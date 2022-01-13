import React from 'react'
import { currentPlayer } from '../functions/AllShooterValue'
import { getImage } from '../functions/getImage'

const DisplayImage = (props) => {
  return (
    <div>
      <img src={`${getImage(props.count)}`} className="displayImg" />
    </div>
  )
}
export default DisplayImage
