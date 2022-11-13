import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'

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
    </div>
  )
}

export default Home
