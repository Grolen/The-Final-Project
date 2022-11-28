import { Box, Button, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import BascetCard from '../BasketCard/BasketCard'
import BascetBorderLayoutStyle from './Style'

const BascetBorderLayout = () => {
  return (
    <>
      <Box sx={BascetBorderLayoutStyle.div}>
        <Typography variant="h2" style={BascetBorderLayoutStyle.h2}>
          КОРЗИНА
        </Typography>
      </Box>
      <Box style={BascetBorderLayoutStyle.wrapper}>
        <Box mt={3} ml={2} mb={4}>
          <Typography variant="h4" style={BascetBorderLayoutStyle.h4}>
            Ваши товары:
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={1}
        >
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xl={6} lg={6} md={6} sn={12}>
                <BascetCard />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sn={12}>
                <BascetCard />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sn={12}>
                <BascetCard />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sn={12}>
                <BascetCard />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sn={12}>
                <BascetCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box mt={7} mb={7}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item>
                  <Box pr={1} pl={1} pt={2} pb={2}>
                    <Link href="#" sx={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        style={BascetBorderLayoutStyle.button}
                      >
                        Ввернуться на главную
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item>
                  <Box pr={1} pl={1} pt={2} pb={2}>
                    <Link href="#" sx={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        style={BascetBorderLayoutStyle.button}
                      >
                        Оформить заказ
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BascetBorderLayout
