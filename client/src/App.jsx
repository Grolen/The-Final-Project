import React from 'react'
import BasketBoard from './pages/Basket board/BasketBoard'
// import AppRouter from './components/AppRouter'
//import Footer from './components/Footer/FooterMainStructure/Footer.jsx'
// import NavigatePanel from './components/NavigatePanel/NavigatePanel'
// import CardList from './components/CardList/CardList'
// import { useAuth } from './hooks/useAuth'
//import Preloader from './components/Preloader/Preloader'
// import BasketPage from './pages/Basket page/BasketPage'

// import { AuthContext } from './context/AuthContext'
import './styles/App.scss'

function App() {
  // const { token, logout, login, ready } = useAuth()
  // const isAuthenticated = !!token
  return (
    <div className="text-bg-info">
      <BasketBoard />
    </div>
  )
}

export default App
