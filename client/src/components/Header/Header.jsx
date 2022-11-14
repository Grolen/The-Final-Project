import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
} from '@mui/material/'
import { HeaderLinks, CustomLink } from './components/style'
import Logo from './components/logoSvg'
import BagPopper from './components/Basket'
import FavoritePopper from './components/Favorite'
import LogInPopper from './components/logIn'

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Link to={'/'}>
              <Logo />
            </Link>
            <List variant=" ">
              <ListItem>
                {' '}
                <Link to="/mens" style={{ textDecoration: 'none' }}>
                  <Typography variant="body">mens</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/womens">
                  <Typography variant="body">womens</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/childrens">
                  <Typography variant="body">childrens</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/brends">
                  <Typography variant="body">brends</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/news">
                  <Typography variant="body">news</Typography>
                </Link>
              </ListItem>
            </List>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
