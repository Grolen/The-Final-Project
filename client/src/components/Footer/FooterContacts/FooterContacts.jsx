import React from 'react'
import { Box, Typography, ListItem, List, Grid } from '@mui/material'
import footerContactsStyles from './Style'
import InstagramComponent from './images/Instagram'
import FacebookComponent from './images/Facebook'

const FooterContacts = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        width: 140,
        textAlign: 'center',
        backgroundColor: '#0000',
      }}
    >
      <Grid container spacing={3} sx={{ margin: 'none' }}>
        <Grid item xl={12}>
          <Typography variant="h3" sx={footerContactsStyles.h4}>
            ДЕЛТА СПОРТ
          </Typography>
        </Grid>
        <Grid item xl={6}>
          <InstagramComponent />
        </Grid>
        <Grid item xl={6}>
          <FacebookComponent />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterContacts
