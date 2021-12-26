import React, { useState } from 'react'
import Auth from './Screen/Login_Signup/loginIndex'
import Dashboard from './components/Dashboard'
import BingoBoard from './components/BingoBoard'
import { useUserContext } from './context/UserContext'
import ScoreBoard from './components/ScoreBoard'

function App() {
  const { user, loading, error } = useUserContext()
  const [displayBoard, setDisplayBoard] = useState(true)

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
                <ScoreBoard />
                {displayBoard && <BingoBoard />}
              </div>
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
