import * as React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { basketCardStyle, theme } from './Style'
import { ThemeProvider } from '@mui/material/styles'

function BascetCard() {
  return (
    <Grid item>
      <Card style={{ maxWidth: 545, width: '100vw' }}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia component="img" height="120" image="#" alt="#" />
          </Grid>
          <Grid item>
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" sx={basketCardStyle.h5_1}>
                  NIKE WMNS METCON 5 AMP /
                </Typography>
              </ThemeProvider>
              <Typography sx={basketCardStyle.h5_2}>
                Pink Gradient / 3 560 ГРН
              </Typography>
              <Typography>Размер : 5.5</Typography>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xl={6}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid>
                      <Button>
                        <RemoveIcon fontSize="small" />
                      </Button>
                    </Grid>
                    <Grid>
                      <Box style={basketCardStyle.box} textAlign={'center'}>
                        <Typography>1</Typography>
                      </Box>
                    </Grid>
                    <Grid>
                      <Button>
                        <AddIcon fontSize="small" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={6}>
                  <CardActions>
                    <Button size="small">
                      <ClearIcon
                        color="#000000"
                        size={'2px'}
                        style={{ fontSize: 19 }}
                      />
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default BascetCard
