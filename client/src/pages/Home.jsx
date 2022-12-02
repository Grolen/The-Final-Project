import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'
import SecondCarousel from '../components/SecondCarousel/SecondCarousel'

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
      <SecondCarousel />
    </div>
  )
}

export default Home
