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

  const [recNumber, setRecNumber] = useState(0)

  const [bgColor, setBgColor] = useState(true)

  const contextValue = {
    numberOneHolder,
    setNumberOneHolder,
    numberTwoHolder,
    setNumberTwoHolder,
    p1Score,
    setP1Score,
    p2Score,
    setP2Score,
    recNumber,
    setRecNumber,
    bgColor,
    setBgColor,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
