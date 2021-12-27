import React from 'react'
import { useDataContext } from '../../context/DataContext'
import { GetStrikeNumber } from '../Card'
import { CreatePlayerBoard } from '../functions/CreatePlayerBoard'
import { CheckRowAndColumForBingos } from './CheckRowAndColumForBingos'
import { DiagonalCheck } from './DiagonalCheck'
import { StrikeBoard } from './StrikeBoard'

export const ScoreCheckMain = () => {
  const {
    numberOneHolder,
    setNumberOneHolder,
    numberTwoHolder,
    setNumberTwoHolder,
    player,
  } = useDataContext()

  console.log('DashBoard', numberOneHolder)
  player.p1Board = CreatePlayerBoard(numberOneHolder)
  player.p2Board = CreatePlayerBoard(numberTwoHolder)
  console.log(player.p1Board)
  console.log('DashBoard 2', numberOneHolder)

  for (let i = 0; i < 25; i++) {
    player.strikeNumber = GetStrikeNumber()

    StrikeBoard(player.p1Board, player.strikeNumber)
    StrikeBoard(player.p2Board, player.strikeNumber)

    player.nextPlayer = 1
    DiagonalCheck(player.p1Board, player.nextPlayer)
    player.nextPlayer = 2
    DiagonalCheck(player.p2Board, player.nextPlayer)

    player.nextPlayer = 1
    CheckRowAndColumForBingos(player.p1Board, player.nextPlayer)
    player.nextPlayer = 2
    CheckRowAndColumForBingos(player.p2Board, player.nextPlayer)

    if (player.p1Score == 5) break
    else if (player.p2Score == 5) break
    else if (player.p1Score == 5 && player.p2Score == 5) break
  }
  return <div></div>
}
