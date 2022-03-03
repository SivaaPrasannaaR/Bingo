import React from 'react'
import Auth from './commonScreen/login_Signup/loginIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useUserContext } from './context/UserContext'
import { BingoIndex } from './gameBingo/screen/BingoIndex.js'
import { HomeIndex } from './commonScreen/home/HomeIndex'
import { ShooterIndex } from './gameShooter/screen/ShooterIndex.js'
// import RootRouter from './router/RootRouter'

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
                {/* <Route path="/" component={RootRouter}>
                  <Suspense fallback={false}>
                    <RootRouter></RootRouter>
                  </Suspense>
                </Route> */}
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
