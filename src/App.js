import React, { useState } from 'react'
import Auth from './Screen/Login_Signup/loginIndex'
import Dashboard from './Screen/Dashboard'
import ScoreBoard from './Screen/ScoreBoard'
import BingoBoard from './components/BingoBoard'
import { useUserContext } from './context/UserContext'
import { useDataContext } from './context/DataContext'

function App() {
  const { user, loading, error } = useUserContext()
  const [displayBoard, setDisplayBoard] = useState(false)
  const {
    numberOneHolder,
    numberTwoHolder,
    setNumberOneHolder,
    setNumberTwoHolder,
  } = useDataContext()

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {user ? (
            <>
              <Dashboard display={setDisplayBoard} />
              <div className="boardContainer">
                {/* <h2>Player 1</h2> */}
                {displayBoard && (
                  <BingoBoard numberHolder={numberOneHolder} player={'p1'} />
                )}
                {/* <h2>Player 2</h2> */}
                {displayBoard && (
                  <BingoBoard numberHolder={numberTwoHolder} player={'p2'} />
                )}
              </div>
              <ScoreBoard />
            </>
          ) : (
            <Auth />
          )}
        </>
      )}
    </div>
  )
}

export default App
