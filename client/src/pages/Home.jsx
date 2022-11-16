import Button from '../components/Button/Button'
import React from 'react'
import Footer from '../components/Footer/FoterMainStructure/Footer'
import MainPageImages from '../components/MainPageImages/MainPageImages'
import Header from '../components/Header/Header'
import MainCarousel from '../components/MainCarousell/MainCarousell'

const Home = () => {
  const mainButton = {
    width: '150px',
    height: '44px',
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '-3px 3px 4px #00FF38',
    fontSize: '22px',
  }

  const blackBGButton = {
    width: '221px',
    height: '44px',
    color: 'white',
    backgroundColor: 'black',
  }

  const greyBGButton = {
    width: '435px',
    height: '60px',
    color: 'white',
    backgroundColor: '#B7B7B7',
    fontSize: '20px',
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      <Header />
      Home Page!!!
      <MainCarousel />
      <MainPageImages />
      <MainCarousel />
      <Footer />
    </div>
  )
}

export default Home
