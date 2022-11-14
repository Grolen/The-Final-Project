import React from 'react'
import AppRouter from './components/AppRouter'
import NavigatePanel from './components/NavigatePanel/NavigatePanel'
import CardList from './components/CardList/CardList'
import { useAuth } from './hooks/useAuth'
// import Preloader from './components/Preloader/Preloader'
import { AuthContext } from './context/AuthContext'
import './styles/App.scss'

function App() {
  const { token, logout, login, ready } = useAuth()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
        ready,
      }}
    >
      <div className="text-bg-info">
        {isAuthenticated && <NavigatePanel startFrom="Home" />}
        <AppRouter />
      </div>
    </AuthContext.Provider>
  )
}

export default App
