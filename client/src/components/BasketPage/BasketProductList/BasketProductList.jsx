import { Box, Grid } from '@material-ui/core'
import React from 'react'
import BascetCard from '../BascetCard/BascetCard'

const BasketProductList = () => {
  return (
    <Box sx={{ marginTop: '3rem' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xl={12}
        rowSpacing={12}
      >
        <Grid>
          <BascetCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BasketProductList
