import React from 'react'
import Dashboard from '../Dashboard'
import ShowNumbers from './components/ShowNumbers'
import DisplayPlayers from './components/DisplayPlayers'
import RollDice from './components/RollDice'

export const ShooterIndex = () => {
  return (
    <>
      <Dashboard />
      <div className="showDice">
        <RollDice />
      </div>
      <div className="headContainer">
        <div className="displayNumbers">
          <ShowNumbers />
        </div>
        <div className="displayNumbers">
          <DisplayPlayers />
        </div>
      </div>
    </>
  )
}
