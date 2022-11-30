import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import './SecondCarousel.scss'
import { Container } from '@mui/material'
import axios from 'axios'
// import icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import images
const items = axios
  .get('/slides')
  .then((slides) => {
    console.log(slides)
  })
  .catch((err) => {
    /*Do something with error, e.g. show error to user*/
  })

// const items = [
//   {
//     image:
//       'https://cdn.discordapp.com/attachments/1043545360498442271/1044073816458010685/Rectangle_15.jpg',
//     alt: `news`,
//   },
//   {
//     image:
//       'https://cdn.discordapp.com/attachments/1043545360498442271/1044073959219548220/Rectangle_16.jpg',
//     alt: `news`,
//   },
//   {
//     image:
//       'https://cdn.discordapp.com/attachments/1043545360498442271/1044074426523713606/imgonline-com-ua-Resize-W5qKpKMDqd.jpg',
//     alt: `news`,
//   },
//   {
//     image:
//       'https://cdn.discordapp.com/attachments/1043545360498442271/1044074426523713606/imgonline-com-ua-Resize-W5qKpKMDqd.jpg',
//     alt: `news`,
//   },
// ]

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <ArrowForwardIosIcon fontSize="50px" />
    </div>
  )
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <ArrowBackIosNewIcon fontSize="50px" />
    </div>
  )
}

const SecondCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    console.log(items)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  }

  return (
    <Container>
      <div className="container">
        <div className="slider">
          <Slider {...settings}>
            {/* {items.map((item, index) => (
              <div
                className={
                  index === slideIndex ? 'slide slide-active' : 'slide'
                }
                key={index}
              >
                <img src={item.image} alt="" />
              </div>
            ))} */}
          </Slider>
        </div>
      </div>
    </Container>
  )
}

export default SecondCarousel
