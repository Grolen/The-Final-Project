import React from 'react'
import { Box, Typography, ListItem, List } from '@mui/material'
import { Link } from 'react-router-dom'
import footerHelpInfoStyles from './Style'

const FooterHelpInfo = () => {
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
            <Typography variant="h3" sx={footerHelpInfoStyles.h4}>
              ДЕЛТА СПОРТ
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerHelpInfoStyles.p}>
              Оплата
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerHelpInfoStyles.p}>
              Доставка
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link to="/#" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerHelpInfoStyles.p}>
              Возврат
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default FooterHelpInfo
