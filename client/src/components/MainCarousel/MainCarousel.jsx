import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import { Container } from '@mui/system'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import axios from 'axios'

const MainCarousel = () => {
  var items = [
    {
      image: '#',
    },
    {
      image:
        'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
    },
  ]

  return (
    <Container>
      <Carousel
        PrevIcon={<ArrowBackIosNewIcon fontSize="large" />}
        NextIcon={<ArrowForwardIosIcon fontSize="large" />}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            color: 'black',
            opacity: 1,
            borderRadius: 0,
            marginLeft: 100,
            marginRight: 100,
            paddingTop: 18,
            paddingBottom: 18,
            paddingLeft: 22,
            paddingRight: 22,
          },
        }}
        indicatorIconButtonProps={{
          style: {
            display: 'none',
          },
        }}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
      <div></div>
    </Container>
  )
}
export default MainCarousel
