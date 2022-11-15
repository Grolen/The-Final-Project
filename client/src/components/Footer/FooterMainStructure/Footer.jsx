import React from 'react'
import FooterShopInfo from '../FooterShopInfo/FooterShopInfo'
import FooterAboutCompany from '../FooterAboutCompany/FooterAboutCompany'
import { Grid, Box } from '@mui/material'
import FooterHelpInfo from '../FooterHelpInfo/FooterHelpInfo'
import FooterBrends from '../FooterBrends/FooterBrends'
import FooterContacts from '../FooterContacts/FooterContacts'

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxHeight: 500,
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          maxHeight: 410,
          height: '100vh',
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="space-evenly"
          alignItems="start"
        >
          <Grid item xs="auto" justify="center" alignItems="center">
            <FooterAboutCompany />
          </Grid>
          <Grid item xs="auto" justify="center" alignItems="center">
            <FooterHelpInfo />
          </Grid>
          <Grid item xs="auto" justify="center" alignItems="center">
            <FooterBrends />
          </Grid>
          <Grid item xs="auto" justify="center" alignItems="center">
            <FooterContacts />
          </Grid>
        </Grid>
      </div>
      <FooterShopInfo />
    </Box>
  )
}

export default Footer
