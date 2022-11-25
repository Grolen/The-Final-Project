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
import basketCardStyle from './Style'

function BascetCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Grid container spacing={2}>
        <Grid item>
          <CardMedia component="img" height="120" image="#" alt="#" />
        </Grid>
        <Grid item>
          <CardContent>
            <Typography sx={basketCardStyle.h5_1}>
              NIKE WMNS METCON 5 AMP /
            </Typography>
            <Typography sx={basketCardStyle.h5_2}>
              Pink Gradient / 3 560 ГРН
            </Typography>
            <Typography>Размер : 5.5</Typography>
            <Grid container spacing={2}>
              <Grid item xl={6}>
                <Box style={basketCardStyle.box}>
                  <Typography>1</Typography>
                </Box>
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
      {/* <CardMedia component="img" height="120" image="#" alt="#" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default BascetCard
