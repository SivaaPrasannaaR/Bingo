import { createContext, useContext, useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../utils/firebase_config'

export const UserContext = createContext({})

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useState(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res)
      } else {
        setUser(null)
      }
      setError('')
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const registerUser = (email, password, name) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const signInUser = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false))
  }

  const logoutUser = () => {
    signOut(auth)
  }

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  //To sign in with Social Media
  //to Signin with google
  const googleProvider = new GoogleAuthProvider()

  const socialMediaAuth = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const socialMediaUser = result.user
        setUser(socialMediaUser)
        console.log(socialMediaUser)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
      })
  }

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    socialMediaAuth,
    googleProvider,
  }
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
