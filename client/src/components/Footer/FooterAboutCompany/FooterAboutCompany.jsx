import React from 'react'
import { Box, Typography, ListItem, List } from '@mui/material'
import { Link } from 'react-router-dom'
import footerAboutCompanyStyles from './Style'

const FooterAboutCompany = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#000000',
      }}
    >
      <List sx={{ paddingTop: 0 }}>
        <ListItem disablePadding={true}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h3" sx={footerAboutCompanyStyles.h4}>
              ДЕЛТА СПОРТ
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerAboutCompanyStyles.p}>
              О компании
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerAboutCompanyStyles.p}>
              Магазины
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerAboutCompanyStyles.p}>
              Карьера
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default FooterAboutCompany
