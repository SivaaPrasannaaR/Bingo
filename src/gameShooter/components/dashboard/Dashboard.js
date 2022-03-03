import React from 'react'
import { useUserContext } from '../../../context/UserContext'

const Dashboard = ({ setDisplayBoard }) => {
  const { user, logoutUser } = useUserContext()

  return (
    <div className="dashboardContainer">
      <div>
        <h2>Name : {user.displayName}</h2>
      </div>
      <div>
        <h2>Email : {user.email}</h2>
      </div>
      <button onClick={logoutUser} className="logoutButton">
        Log out
      </button>
    </div>
  )
}

export default Dashboard
