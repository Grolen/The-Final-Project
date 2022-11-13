import React from 'react'
import AppRouter from './components/AppRouter'
import NavigatePanel from './components/NavigatePanel/NavigatePanel'
import CardList from './components/CardList/CardList'
import './styles/App.scss'
// import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <div className="text-bg-info">
      <NavigatePanel startFrom="Home" />
      <AppRouter />
    </div>
  )
}

export default App
