import React from 'react'
import AppRouter from './components/AppRouter'
import NavigatePanel from './components/NavigatePanel/NavigatePanel'
import './styles/App.scss'

function App() {
  return (
    <div className="text-bg-info">
      <NavigatePanel startFrom="Home" />
      <AppRouter />
    </div>
  )
}

export default App
