import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import HomeIcon from '@mui/icons-material/Home'
// import styles from './MainCarousel.module.scss'

const MainCarousel = () => {
  const items = [
    {
      id: 1,
      name: 'Random Name #1',
      image: '#',
    },
    {
      id: 2,
      name: 'Random Name #2',
      description: '#',
    },
  ]

  return (
    <Carousel
      IndicatorIcon={<HomeIcon />}
      navButtonsProps={{
        style: {
          backgroundColor: 'black',
          borderRadius: 0,
        },
      }}
    >
      {items.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  )
}

export default MainCarousel
