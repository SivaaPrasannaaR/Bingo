import React from 'react'
import { useDataContext } from '../context/DataContext'
import { useUserContext } from '../context/UserContext'
import { CreatePlayerBoard } from './functions/CreatePlayerBoard'
import { GenerateBingoNumbers } from './functions/GenerateBingoNumbers'
import { ScoreCheckMain } from './scoreCheck/ScoreCheckMain'

const Dashboard = (props) => {
  const { user, logoutUser } = useUserContext()
  const { setNumberOneHolder, setNumberTwoHolder } = useDataContext()

  const generateBoard = async () => {
    setNumberOneHolder(GenerateBingoNumbers())
    setNumberTwoHolder(GenerateBingoNumbers())

    props.display(true)

    // ScoreCheckMain()
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
