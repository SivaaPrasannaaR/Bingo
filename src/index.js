import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import { UserContextProvider } from './context/UserContext'
import { DataContextProvider } from './context/DataContext'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
