import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined'
// import { Avatar, Card, Switch } from 'antd'
import PropTypes from 'prop-types'
// const { Meta } = Card

const ActualCard = (props) => {
  const {
    enabled,
    quantity,
    brand,
    currentPrice,
    categories,
    imageUrls,
    isCardsLoading,
    name,
  } = props
  return (
    <>
      <Card
        style={{ marginRight: '20px' }}
        variant="outlined"
        sx={{ width: 320 }}
      >
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <Typography level="body2">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        >
          {/*<BookmarkAdd />*/}
        </IconButton>
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box sx={{ display: 'flex' }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {currentPrice}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', fontWeight: 600 }}
          >
            Explore
          </Button>
        </Box>
      </Card>
    </>
  )
}

ActualCard.propTypes = {
  brand: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  imageUrls: PropTypes.array.isRequired,
  isCardsLoading: PropTypes.bool.isRequired,
}

ActualCard.defaultProps = {
  element: 'Posts',
  brand: 'Nike',
  currentPrice: 7000,
  categories: 'for men',
  imageUrls: [],
  isCardsLoading: false,
}

export default ActualCard
