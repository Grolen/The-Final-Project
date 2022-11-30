import React from 'react'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer/FooterMainStructure/Footer.jsx'
// import NavigatePanel from './components/NavigatePanel/NavigatePanel'
// import CardList from './components/CardList/CardList'
// import { useAuth } from './hooks/useAuth'
import Preloader from './components/Preloader/Preloader'
import MainCarousel from './components/MainCarousel/MainCarousel'
// import { AuthContext } from './context/AuthContext'
import './styles/App.scss'

function App() {
  // const { token, logout, login, ready } = useAuth()
  // const isAuthenticated = !!token
  return (
    <div className="text-bg-info">
      <MainCarousel />
      <AppRouter />
      <Preloader />
      <Footer />
    </div>
  )
}

export default App
