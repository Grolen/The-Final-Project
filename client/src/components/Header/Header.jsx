import React, { useContext, useEffect } from 'react'
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
import { useLoading } from '../../hooks/useLoading'
import CartService from '../../API/CartService'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const logoutFunc = (event) => {
    event.preventDefault()
    auth.logout()
    auth.isAuthenticated = false
    navigate('/login')
  }

  console.log(token)

  const [getCart, isCartLoading, cartError] = useLoading(async () => {
    const response = await CartService.getCartInfo(token)
    console.log(response.products)
    return response
  })

  const linksAndDescription = [
    { link: '/men', description: 'men' },
    { link: '/women', description: 'women' },
    { link: '/children', description: 'children' },
    { link: '/brands', description: 'brands' },
    { link: '/news', description: 'news' },
  ]

  useEffect(() => {
    getCart()
  }, [])

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
            {linksAndDescription.map((element) => {
              const { link, description } = element
              return (
                <Link to={link} style={{ textDecoration: 'none' }}>
                  <Typography variant="body">{description}</Typography>
                </Link>
              )
            })}
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
              to="/wishlist"
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
              to="/cart"
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
