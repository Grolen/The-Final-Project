import React from 'react'
import AppRouter from './components/AppRouter'
import NavigatePanel from './components/NavigatePanel/NavigatePanel'
import CardList from './components/CardList/CardList'
import './styles/App.scss'

function App() {
  return (
    <div className="text-bg-info">
      <NavigatePanel startFrom="Home" />
      <AppRouter />
      <CardList />
    </div>
  )
}

export default App
