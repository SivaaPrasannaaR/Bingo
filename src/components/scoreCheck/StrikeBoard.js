import { useDataContext } from '../../context/DataContext'

export const StrikeBoard = (props) => {
  const { player } = useDataContext()

  let nLen = 5

  let strike = props.strike
  let st = props.strikeNumber

  for (let i = 0; i < nLen; i++)
    for (let j = 0; j < nLen; j++)
      if (strike[i][j] == st) {
        strike[i][j] = 0
        break
      }

  return strike
}
