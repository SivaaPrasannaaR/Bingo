import React from 'react'

// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import Signup from './login_signup/Signup'

// const firestore = firebaseConfig.firestore()

// eslint-disable-next-line react-hooks/rules-of-hooks
// const [user] = useAuthState(auth)

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section> */}
      <Signup />
    </div>
  )
}
// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider()
//     auth.signInWithPopup(provider)
//   }
//   return <button onClick={signInWithGoogle}>Sign in with Google</button>
// }

// function SignOut() {
//   return (
//     auth.currentUser && <button onClick={() => auth.SignOut}>Sign Out</button>
//   )
// }

// function ChatRoom() {
//   const messagesRef = firestore.collection('messages')
//   const query = messagesRef.orderBy('createdAt').limit(25)

//   const [messages] = useCollectionData(query, { idField: 'id' })
//   return (
//     <div>
//       {messages &&
//         messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//     </div>
//   )
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message

//   // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

//   return (
//     <>
//       {/* <div className={`message ${messageClass}`}> */}
//       {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
//       <p>{text}</p>
//       {/* </div> */}
//     </>
//   )
// }

export default App
