// import React from 'react'
// import { useDataContext } from '../../context/DataContext'
// import { GetStrikeNumber } from '../Card'
// import { player } from '../functions/AssignValues'
// import { CreatePlayerBoard } from '../functions/CreatePlayerBoard'
// import { CheckRowAndColumForBingos } from './CheckRowAndColumForBingos'
// import { DiagonalCheck } from './DiagonalCheck'
// import { StrikeBoard } from './StrikeBoard'

// export const ScoreCheckMain = (strikeNum) => {
//   // console.log('DashBoard', numberOneHolder)

//   // console.log(player.p1Board)
//   // console.log('DashBoard 2', numberOneHolder)
//   // for (let i = 0; i < 25; i++) {
//   player.strikeNumber = strikeNum

//   // player.p1Board = CreatePlayerBoard(player.p1)
//   // player.p2Board = CreatePlayerBoard(player.p2)

//   // StrikeBoard(player.p1Board, player.strikeNumber)
//   // StrikeBoard(player.p2Board, player.strikeNumber)

//   player.nextPlayer = 1
//   DiagonalCheck(player.p1Board, player.nextPlayer)
//   player.nextPlayer = 2
//   DiagonalCheck(player.p2Board, player.nextPlayer)

//   player.nextPlayer = 1
//   CheckRowAndColumForBingos(player.p1Board, player.nextPlayer)
//   player.nextPlayer = 2
//   CheckRowAndColumForBingos(player.p2Board, player.nextPlayer)

//   if (player.p1Score === 5) {
//   } else if (player.p2Score === 5) {
//   } else if (player.p1Score === 5 && player.p2Score === 5) {
//   }
//   // }
//   return <div></div>
// }
