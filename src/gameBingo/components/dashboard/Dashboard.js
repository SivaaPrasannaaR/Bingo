import React from 'react'
import { useDataContext } from '../../../context/DataContext'
import { useUserContext } from '../../../context/UserContext'

import { GenerateBingoNumbers } from '../../functions/GenerateBingoNumbers'
import { toDisplayPayerBoard } from '../../functions/toDisplayPayerBoard'
import { player } from '../../functions/AssignValues'

const Dashboard = ({ setDisplayBoard }) => {
  const { user, logoutUser } = useUserContext()
  const { setNumberOneHolder, setNumberTwoHolder } = useDataContext()

  const generateBoard = async () => {
    player.p1 = GenerateBingoNumbers()
    player.p2 = GenerateBingoNumbers()
    await setNumberOneHolder(player.p1)
    await setNumberTwoHolder(player.p2)

    toDisplayPayerBoard(setDisplayBoard, 'p1')
    // setBgColor(!bgColor)
  }

  const logoutAccount = () => {}

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
