import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import Button from '../Button/Button'
import { Box, Container } from '@mui/system'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MainCarousel = () => {
  var items = [
    {
      image:
        'https://media.discordapp.net/attachments/1043545360498442271/1043545432682401853/Rectangle_7.jpg',
      alt: `news`,
    },
    {
      image:
        'https://media.discordapp.net/attachments/1043545360498442271/1043545433013760080/Rectangle_76.jpg',
      alt: `news`,
    },
  ]

  return (
    <Container
      sx={{
        position: 'relative',
      }}
    >
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
      <Box
        sx={{
          position: 'absolute',
          right: 80,
          top: 446,
          width: 500,
          height: 250,
          paddingLeft: 2,
          background: ' rgba(0, 0, 0, 0.25)',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: 45,
            color: '#fff',
            textShadow: '0px 5px 4px rgba(0, 0, 0, 0.55)',
            marginTop: 19,
            marginBottom: 50,
          }}
        >
          НОВАЯ КОЛЛЕКЦИЯ СОВМЕСТНО В VISA
        </h1>
        <Button></Button>
      </Box>
    </Container>
  )
}
export default MainCarousel
