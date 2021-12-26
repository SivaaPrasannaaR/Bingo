import React from 'react'
import { useUserContext } from '../context/UserContext'
import BingoBoard from './BingoBoard'
import { GenerateBingoNumbers } from './GenerateBingoNumbers'

const Dashboard = (props) => {
  const { user, logoutUser } = useUserContext()
  const { numberHolder, setNumberHolder } = useUserContext()

  const generateBoard = () => {
    setNumberHolder(GenerateBingoNumbers())
    props.display(true)
  }
  return (
    <div className="dashboardContainer">
      <div>
        <h2>Name : {user.displayName}</h2>
      </div>
      <div>
        <h2>Email : {user.email}</h2>
      </div>
      <button onClick={generateBoard} className="logoutButton">
        Generate Board
      </button>
      <button onClick={logoutUser} className="logoutButton">
        Log out
      </button>
    </div>
  )
}

export default Dashboard
