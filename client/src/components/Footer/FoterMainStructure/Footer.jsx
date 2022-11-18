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
      <Box
        sx={{
          width: '100vw',
          maxHeight: 410,
          height: '100vh',
          backgroundColor: '#000000',
          display: 'flex',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={3}>
            <FooterAboutCompany />
          </Grid>
          <Grid item xs={3}>
            <FooterHelpInfo />
          </Grid>
          <Grid item xs={3}>
            <FooterBrends />
          </Grid>
          <Grid item xs={3}>
            <FooterContacts />
          </Grid>
        </Grid>
      </Box>
      <FooterShopInfo />
    </Box>
  )
}

export default Footer
