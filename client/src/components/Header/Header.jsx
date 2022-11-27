import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Tooltip,
  Badge,
} from '@mui/material/'
import Logo from './components/logoSvg'
import { AuthContext } from '../../context/AuthContext'

import { HeaderLinks, IconsButtonContainer } from './components/styles'
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material'

const Header = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const logoutFunc = (event) => {
    event.preventDefault()
    auth.logout()
    auth.isAuthenticated = false
    navigate('/login')
  }
  return (
    <>
      <AppBar>
        <Container
          sx={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '1.25em',
          }}
        >
          <Link to={'/'}>
            <Logo />
          </Link>
          <HeaderLinks>
            <Link to="/men" style={{ textDecoration: 'none' }}>
              <Typography variant="body">men</Typography>
            </Link>
            <Link to="/women" style={{ textDecoration: 'none' }}>
              <Typography variant="body">women</Typography>
            </Link>
            <Link to="/children" style={{ textDecoration: 'none' }}>
              <Typography variant="body">children</Typography>
            </Link>
            <Link to="/brands" style={{ textDecoration: 'none' }}>
              <Typography variant="body">brands</Typography>
            </Link>
            <Link to="/news" style={{ textDecoration: 'none' }}>
              <Typography variant="body">news</Typography>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography onClick={logoutFunc} variant="body">
                Logout
              </Typography>
            </Link>
          </HeaderLinks>
          <IconsButtonContainer
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton component={Link} to="/#">
              <Tooltip>
                <PersonOutlined sx={{ color: 'primary.contrastText' }} />
              </Tooltip>
            </IconButton>
            <IconButton
              sx={{ color: 'primary.contrastText' }}
              component={Link}
              to="/#"
            >
              <Badge
                badgeContent={1}
                color="secondary"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <FavoriteBorderOutlined />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ color: 'primary.contrastText' }}
              component={Link}
              to="/#"
            >
              <Badge
                badgeContent={1}
                color="secondary"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <ShoppingBagOutlined />
              </Badge>
            </IconButton>
          </IconsButtonContainer>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
