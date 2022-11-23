import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import styles from './CardSmaller.module.scss'
import PropTypes from 'prop-types'
import ActualCard from '../ActualCard/ActualCard'

const CardSmaller = (props) => {
  const {
    enabled,
    quantity,
    brand,
    currentPrice,
    categories,
    imageUrls,
    name,
    redirectToCard,
  } = props

  return (
    <div onClick={redirectToCard} className={styles.container}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${imageUrls[3]}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name} {categories}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentPrice}₴
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

CardSmaller.propTypes = {
  brand: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  imageUrls: PropTypes.array.isRequired,
  isCardsLoading: PropTypes.bool.isRequired,
}

CardSmaller.defaultProps = {
  element: 'Posts',
  brand: 'Nike',
  currentPrice: 7000,
  categories: 'for men',
  imageUrls: [],
  isCardsLoading: false,
}

export default CardSmaller
