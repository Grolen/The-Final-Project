import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import basketLayoutStyle from './Style'
import ClearIcon from '@mui/icons-material/Clear'

const BasketLayout = () => {
  return (
    <Box style={basketLayoutStyle.div}>
      <Box style={basketLayoutStyle.div2}>
        <Grid
          container
          rowSpacing={1}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid xl={8}>
            <Typography style={basketLayoutStyle.h4}>КОРЗИНА</Typography>
          </Grid>
          <Grid xl={4}>
            <Button>
              <Box sx={basketLayoutStyle.div3}>
                <ClearIcon color="#000000" style={{ fontSize: 59 }} />
              </Box>
            </Button>
          </Grid>
          <Grid container xl={12} rowSpacing={12}>
            <Typography variant="p" sx={basketLayoutStyle.p}>
              Ваша корзина пуста.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default BasketLayout
