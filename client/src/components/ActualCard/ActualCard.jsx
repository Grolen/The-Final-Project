import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import CardSmaller from '../CardSmaller/CardSmaller'
import CardBigger from '../CardBigger/CardBigger'
import { useLoading } from '../../hooks/useLoading'
import ProductService from '../../API/ProductService'

const ActualCard = (props) => {
  const navigate = useNavigate()
  const [actualCard, setActualCard] = useState({})
  const [getCard, isCardLoading, cardError] = useLoading(
    async (myCustomParam) => {
      const response = await ProductService.getProductsById(myCustomParam)
      setActualCard(response.data)
    }
  )
  const {
    view,
    enabled,
    quantity,
    brand,
    currentPrice,
    categories,
    imageUrls,
    name,
    myCustomParam,
    card,
  } = props

  const redirectToCard = () => {
    navigate(`/list/${myCustomParam}`)
  }

  return (
    <div>
      {view ? (
        <CardBigger {...props} redirectToCard={redirectToCard} />
      ) : (
        <CardSmaller {...props} redirectToCard={redirectToCard} />
      )}
    </div>
  )
}

ActualCard.propTypes = {
  brand: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  imageUrls: PropTypes.array.isRequired,
  isCardsLoading: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired,
  enabled: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  view: PropTypes.bool.isRequired,
  myCustomParam: PropTypes.string.isRequired,
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
