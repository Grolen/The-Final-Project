import React from 'react'
import { Paper, Button } from '@mui/material'

const CarouselItem = (props) => {
  const { item } = props
  return (
    <Paper>
      <img src={item.image} style={{ width: '100%', height: '100%' }} />
    </Paper>
  )
}
export default CarouselItem
