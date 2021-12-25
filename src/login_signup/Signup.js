import React, { useRef, useState } from 'react'
// import InputText from '../components/InputText'
import {
  // createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
// import { auth } from '../utils/firebase'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  // const confirmPasswordRef = useRef()

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     )
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // const login = async () => {}
  // const logout = async () => {}

  return (
    <div>
      <div>
        <button className="signinwithgoogle" type="submit">
          Sign In With Google
        </button>
      </div>
      <div>
        <h3>Create User</h3>
        <input
          className="email"
          type="email"
          placeholder="Email..."
          onChange={(event) => setRegisterEmail(event.target.value)}
          ref={emailRef}
          required
        />
        <input
          className="pass"
          type="password"
          placeholder="Password..."
          onChange={(event) => setRegisterPassword(event.target.value)}
          ref={passwordRef}
        />
        <button className="signupbutton" type="submit">
          Sign Up
        </button>
      </div>

      <div>
        <h3>Login</h3>
        <input
          className="email"
          type="email"
          placeholder="Email..."
          ref={emailRef}
          onChange={(event) => setLoginEmail(event.target.value)}
          required
        />
        <input
          className="pass"
          type="password"
          placeholder="Password..."
          onChange={(event) => setLoginPassword(event.target.value)}
          ref={passwordRef}
        />
        <button className="signupbutton" type="submit">
          Login
        </button>
      </div>
      <h4>User Logged in: </h4>
      {/* {auth.email} */}
    </div>
  )
}
