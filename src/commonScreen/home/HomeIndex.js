import React from 'react'

export const HomeIndex = () => {
  const navBingo = () => {
    // window.open('/bingo')
    window.location.href = '/bingogame'
    // window.location.replace('/bingo')
  }
  const navShooter = () => {
    // window.open('/bingo')
    window.location.href = '/shootergame'
    // window.location.replace('/bingo')
  }
  return (
    <>
      <button onClick={navBingo} className="logoutButton">
        Bingo Board
      </button>
      <button onClick={navShooter} className="logoutButton">
        Stick Man Shooter
      </button>
    </>
  )
}
