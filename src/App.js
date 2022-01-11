import React from 'react'
import Auth from './Screen/Login_Signup/loginIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useUserContext } from './context/UserContext'
import { BingoIndex } from './Screen/Bingo/BingoIndex'
import { HomeIndex } from './Screen/Home/HomeIndex'
import { ShooterIndex } from './Screen/ShooterGame/ShooterIndex'

function App() {
  const { user, loading, error } = useUserContext()

  return (
    <BrowserRouter>
      <div className="App">
        {error && <p className="error">{error}</p>}
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {user ? (
              <Switch>
                <Route exact path="/">
                  <HomeIndex />
                </Route>
                <Route exact path="/bingogame">
                  <BingoIndex />
                </Route>
                <Route exact path="/shootergame">
                  <ShooterIndex />
                </Route>
              </Switch>
            ) : (
              <Auth />
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
