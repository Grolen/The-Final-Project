import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material/'
import { HeaderLinks } from './components/style'
import Logo from './components/logoSvg'
import BagPopper from './components/Basket'
import FavoritePopper from './components/Favorite'
import LogInPopper from './components/logIn'

const Header = () => {
  return (
    <>
      <AppBar>
        <Container
          sx={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link style={{ marginLeft: '-40px' }} to={'/'}>
            <Logo />
          </Link>
          <HeaderLinks>
            <Link to="/mens" style={{ textDecoration: 'none' }}>
              <Typography variant="body">mens</Typography>
            </Link>
            <Link to="/womens" style={{ textDecoration: 'none' }}>
              <Typography variant="body">womens</Typography>
            </Link>
            <Link to="/childrens" style={{ textDecoration: 'none' }}>
              <Typography variant="body">childrens</Typography>
            </Link>
            <Link to="/brends" style={{ textDecoration: 'none' }}>
              <Typography variant="body">brends</Typography>
            </Link>
            <Link to="/news" style={{ textDecoration: 'none' }}>
              <Typography variant="body">news</Typography>
            </Link>
          </HeaderLinks>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
