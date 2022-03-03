import React from 'react'
import { getImage } from '../functions/getImage'

const DisplayImage = (props) => {
  return (
    <div>
      <img src={`${getImage(props.count)}`} className="displayImg" />
    </div>
  )
}
export default DisplayImage
