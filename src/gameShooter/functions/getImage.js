import img_0 from '../../assets/gameShooter/img_0.png'
import img_1 from '../../assets/gameShooter/img_1.png'
import img_2 from '../../assets/gameShooter/img_2.png'
import img_3 from '../../assets/gameShooter/img_3.png'
import img_4 from '../../assets/gameShooter/img_4.png'
import img_5 from '../../assets/gameShooter/img_5.jpg'
import img_6 from '../../assets/gameShooter/img_6.jpg'
import img_7 from '../../assets/gameShooter/img_7.jpg'
import img_8 from '../../assets/gameShooter/img_8.jpg'

export const getImage = (count) => {
  let currentImg

  if (count === 0) {
    currentImg = img_0
  } else if (count === 1) {
    currentImg = img_1
  } else if (count === 2) {
    currentImg = img_2
  } else if (count === 3) {
    currentImg = img_3
  } else if (count === 4) {
    currentImg = img_4
  } else if (count === 5) {
    currentImg = img_5
  } else if (count === 6) {
    currentImg = img_6
  } else if (count === 7) {
    currentImg = img_7
  } else if (count === 8) {
    currentImg = img_8
  } else {
    currentImg = img_0
  }

  return currentImg
}

//   switch (props.count) {
//     case 0:
//       setBoxImg(img_0)
//       break
//     case 1:
//       setBoxImg(img_1)
//       break
//     case 2:
//       setBoxImg(img_2)
//       break
//     case 3:
//       setBoxImg(img_3)
//       break
//     case 4:
//       setBoxImg(img_4)
//       break
//     case 5:
//       setBoxImg(img_6)
//       break
//     case 6:
//       setBoxImg(img_6)
//       break
//     case 7:
//       setBoxImg(img_7)
//       break
//     case 8:
//       setBoxImg(img_8)
//       break
//     default:
//       setBoxImg(img_0)
//       break
//
