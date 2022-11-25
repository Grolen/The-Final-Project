import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Tooltip,
  Badge,
} from '@mui/material/'
import Logo from './components/logoSvg'

import { HeaderLinks, IconsButtonContainer } from './components/styles'
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material'

const Header = () => {
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
