import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'
import Footer from '../components/Footer/FooterMainStructure/Footer'

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <MainCarousel />
      <Footer />
    </div>
  )
}

export default Home
