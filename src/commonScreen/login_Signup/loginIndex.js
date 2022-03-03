import React, { useState } from 'react'
import Signin from './signin'
import Signup from './signup'
import { useUserContext } from '../../context/UserContext'
import styles from './LoginFormCard.module.scss'

const Auth = () => {
  const [index, setIndex] = useState(false)
  const toggleIndex = () => {
    setIndex((prevState) => !prevState)
  }

  const { socialMediaAuth, googleProvider } = useUserContext()

  const handleSocialMediaOnClick = async (provider) => {
    const res = await socialMediaAuth(provider)
    console.log(res)
  }

  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex} className={styles.ppp}>
        {!index ? 'New user? Click here ' : 'Already have an acount?'}
      </p>
      <button
        onClick={() => handleSocialMediaOnClick(googleProvider)}
        className={styles.loginWithGoogleBtn}
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Auth
