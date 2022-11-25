import React from 'react'
import AppRouter from './components/AppRouter'
import NavigatePanel from './components/NavigatePanel/NavigatePanel'
import { useAuth } from './hooks/useAuth'
import { AuthContext } from './context/AuthContext'
// import Header from './components/Header/Header'
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
        {/*{isAuthenticated && <Header />}*/}
        <AppRouter />
      </div>
    </AuthContext.Provider>
  )
}

export default App
