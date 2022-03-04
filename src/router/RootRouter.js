import { Route, Switch } from "react-router-dom"
import React, { lazy } from "react"
import ScrollToTop from "./ScrollTop.js"
import { Router } from "react-router-dom"

const Login = lazy(() => import("../commonScreen/login_Signup/loginIndex.js"))
const BingoGame = lazy(() => import("../gameBingo/screen/BingoIndex.js"))
const ShooterGame = lazy(() => import("../gameShooter/screen/ShooterIndex.js"))

const RootRouter = React.memo(() => {
  // const [authenticated, setAuthenticated] = useState(false);
  // useEffect(() => {
  //   const verify = async () => {
  //     const [isSuccess, _] = await verifyApi();
  //     if (isSuccess) {
  //       const t = new URLSearchParams(window.location.search).get('t');
  //       const accessToken = t ? t : LocalStorage.get(LocalStorageKey.ACCESS_TOKEN);
  //       if (accessToken) {
  //         setAuthenticated(true);
  //       }
  //     }
  //   };
  //   if (!authenticated) {
  //     verify();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [authenticated]);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/bingogame" component={BingoGame} />
        <Route exact path="/shootergame" component={ShooterGame} />
      </Switch>
    </Router>
  )
})

export default RootRouter
