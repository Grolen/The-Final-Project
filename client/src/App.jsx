import React from 'react'
import AppRouter from './components/AppRouter'
import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <div className="text-bg-info">
      <AppRouter />
      <Preloader />
    </div>
  )
}

export default App
