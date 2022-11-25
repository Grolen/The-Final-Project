import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { basketLayoutStyle } from './Style'
import ClearIcon from '@mui/icons-material/Clear'
import BasketProductList from '../BasketProductList/BasketProductList'

const BasketLayout = () => {
  const cardShow = false

  return (
    <Grid container style={basketLayoutStyle.div}>
      <Grid style={basketLayoutStyle.div2}>
        <Grid
          container
          rowSpacing={1}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid xl={8}>
            <Typography variant="h3" sx={basketLayoutStyle.h3}>
              КОРЗИНА
            </Typography>
          </Grid>
          <Grid xl={4}>
            <Button>
              <ClearIcon
                color="#000000"
                size={'2px'}
                style={{ fontSize: 59 }}
              />
            </Button>
          </Grid>
          {cardShow ? (
            <Grid container xl={12} rowSpacing={12}>
              <Typography variant="string" sx={basketLayoutStyle.p}>
                Ваша корзина пуста.
              </Typography>
            </Grid>
          ) : (
            <Grid container xl={12} rowSpacing={12}>
              <BasketProductList />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" style={basketLayoutStyle.button}>
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </Grid>
    </Grid>
  )
}

export default BasketLayout
