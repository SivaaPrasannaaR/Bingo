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
  const [numberOneHolder, setNumberOneHolder] = useState([])
  const [numberTwoHolder, setNumberTwoHolder] = useState([])
  // const [bgColor, setBgColor] = useState()

  // const [strikeNumber, setStrikeNumber] = useState(0)

  //Player info = player score and player board

  const contextValue = {
    numberOneHolder,
    setNumberOneHolder,
    numberTwoHolder,
    setNumberTwoHolder,
    // bgColor,
    // setBgColor,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
