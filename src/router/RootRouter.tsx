import { Route, Switch } from 'react-router-dom'
import React, { lazy } from 'react'

const Login = lazy(
  () => import('../homehub-site/login/LoginScreen/LoginScreen')
)
const Signup = lazy(
  () => import('../homehub-site/signup/SignupScreen/SignupScreen')
)

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
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  )
})

export default RootRouter
