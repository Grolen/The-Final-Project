import React from 'react'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer/FooterMainStructure/Footer.jsx'
// import NavigatePanel from './components/NavigatePanel/NavigatePanel'
// import CardList from './components/CardList/CardList'
// import { useAuth } from './hooks/useAuth'
import Preloader from './components/Preloader/Preloader'
<<<<<<< HEAD
import BasketPage from './pages/Basket page/BasketPage'
=======
import MainCarousel from './components/MainCarousel/MainCarousel'
>>>>>>> b1bdadc4ab8951871fbe8851f1742b512171fe29
// import { AuthContext } from './context/AuthContext'
import './styles/App.scss'

function App() {
  // const { token, logout, login, ready } = useAuth()
  // const isAuthenticated = !!token
  return (
    <div className="text-bg-info">
<<<<<<< HEAD
      <BasketPage />
=======
      <MainCarousel />
      <AppRouter />
      <Preloader />
      <Footer />
>>>>>>> b1bdadc4ab8951871fbe8851f1742b512171fe29
    </div>
  )
}

export default App
