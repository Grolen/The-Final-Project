import React from 'react'
import { Box, Typography, ListItem, List } from '@mui/material'
import { Link } from 'react-router-dom'
import footerBrendStyles from './Style'

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
      <Typography variant="h3" sx={footerBrendStyles.h4}>
        БРЕНДЫ
      </Typography>
    </Box>
  )
}

export default FooterBrends
