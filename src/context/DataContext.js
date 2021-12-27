import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react'

export const DataContext = createContext({})
export const useDataContext = () => {
  return useContext(DataContext)
}

export const DataContextProvider = ({ children }) => {
  const bingo = 'BINGO'

  const [numberOneHolder, setNumberOneHolder] = useState([])
  const [numberTwoHolder, setNumberTwoHolder] = useState([])

  const nLen = 5

  let nextPlayer

  //Player info = player score and player board
  let player = {
    nextPlayer: 1,
    strikeNumber: 0,

    p1Score: 0,
    p2Score: 0,

    p1Board: [],
    p2Board: [],
  }

  //Row and Column Setup to check score
  let rowColCheck = {
    p1Row: [],
    p1Column: [],

    p2Row: [],
    p2Column: [],
  }

  //Diagonal Setup to check score
  let checkDiagonal = {
    d1: false,
    d2: false,

    p1d1: 0,
    p1d2: 0,

    p2d1: 0,
    p2d2: 0,
  }

  const contextValue = {
    bingo,
    numberOneHolder,
    setNumberOneHolder,
    numberTwoHolder,
    setNumberTwoHolder,
    nLen,
    nextPlayer,
    player,
    rowColCheck,
    checkDiagonal,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
