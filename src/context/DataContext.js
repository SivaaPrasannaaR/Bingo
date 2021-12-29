import { useState, useContext, createContext } from 'react'

export const DataContext = createContext({})
export const useDataContext = () => {
  return useContext(DataContext)
}

export const DataContextProvider = ({ children }) => {
  const [numberOneHolder, setNumberOneHolder] = useState([])
  const [numberTwoHolder, setNumberTwoHolder] = useState([])

  const [p1Score, setP1Score] = useState(0)
  const [p2Score, setP2Score] = useState(0)

  // const [bgColor, setBgColor] = useState()

  // const [strikeNumber, setStrikeNumber] = useState(0)

  //Player info = player score and player board

  const contextValue = {
    numberOneHolder,
    setNumberOneHolder,
    numberTwoHolder,
    setNumberTwoHolder,
    p1Score,
    setP1Score,
    p2Score,
    setP2Score,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
