import React from 'react'
import { Paper, Button } from '@mui/material'
// import styles from './CarouselItem.module.scss'

const CarouselItem = ({ item }) => {
  return (
    <Paper>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <Button color="secondary" className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}
export default CarouselItem
