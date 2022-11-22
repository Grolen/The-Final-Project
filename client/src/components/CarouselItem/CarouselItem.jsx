import React from 'react'
import { Paper } from '@mui/material'

const CarouselItem = (props) => {
  const { item } = props
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.alt}
        style={{ width: '100%', height: '704px', objectFit: 'cover' }}
      />
    </Paper>
  )
}
export default CarouselItem
