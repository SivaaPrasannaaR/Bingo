import { player } from './AssignValues'

export const updateNumberForPlayers = (value) => {
  player.p1.map((item) => {
    if (item.num === value) {
      item.used = true
      item.numColor = 'red'
    }
  })

  player.p2.map((item) => {
    if (item.num === value) {
      item.used = true
      item.numColor = 'red'
    }
  })

  return
  // console.log('updateNum 1 ', player.p1)
  // console.log('updateNum 2 ', player.p2)
}
