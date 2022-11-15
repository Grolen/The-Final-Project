import React from 'react'
import { Box, Typography, ListItem, List, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import footerBrendStyles from './Style'
import AdidasComponent from './images/Adidas'
import NikeComponent from './images/Nike'
import VansComponent from './images/Vans'
import PumaComponent from './images/Puma'
import NewBalanceComponent from './images/NewBalance'
import JordanBrandComponent from './images/JordanBrand'

const FooterBrends = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        // justifyContent: 'space-around',
        backgroundColor: '#000000',
        alignItems: 'flex-start',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xl={12}>
          <Typography variant="h3" sx={footerBrendStyles.h4}>
            БРЕНДЫ
          </Typography>
        </Grid>
        <Grid item xs="4" style={{ textAlign: 'center' }}>
          <AdidasComponent />
        </Grid>
        <Grid item xs="4" style={{ textAlign: 'center' }}>
          <NikeComponent />
        </Grid>
        <Grid item xs="4" style={{ textAlign: 'center' }}>
          <VansComponent />
        </Grid>
        <Grid item xs="4" style={{ textAlign: 'center' }}>
          <PumaComponent />
        </Grid>
        <Grid item xs="4" style={{ textAlign: 'center' }}>
          <NewBalanceComponent />
        </Grid>
        <Grid item xs="4" style={{ textAlign: 'center' }}>
          <JordanBrandComponent />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterBrends
