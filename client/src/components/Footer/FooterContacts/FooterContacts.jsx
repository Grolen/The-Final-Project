import React from 'react'
import { Box, Typography, ListItem, List } from '@mui/material'
import { Link } from 'react-router-dom'
import footerContactsStyles from './Style'
import InstagramComponent from './images/Instagram'

const FooterContacts = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#000000',
      }}
    >
      <List>
        <ListItem disablePadding={true}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h3" sx={footerContactsStyles.h4}>
              ДЕЛТА СПОРТ
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerContactsStyles.p}>
              Оплата
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerContactsStyles.p}>
              FFFFFFFFf
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <InstagramComponent />
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default FooterContacts
