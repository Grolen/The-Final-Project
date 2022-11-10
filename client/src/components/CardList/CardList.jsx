import React, { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import ProductService from '../../API/ProductService'
import Headline from '../UI/Headline/Headline'
import ActualCard from '../ActualCard/ActualCard'

const CardList = () => {
  const [cards, setCards] = useState([])
  // const [loading, setLoading] = useState(true)

  const [fetchingCards, isCardsLoading, cardError] = useFetching(async () => {
    const response = await ProductService.getProducts()
    setCards(response.data)
  })

  useEffect(() => {
    fetchingCards()
  }, [])

  if (!cards.length) return <Headline />

  return (
    <div style={{ display: 'flex' }}>
      {cards.map((card) => {
        const {
          quantity,
          enabled,
          brand,
          name,
          currentPrice,
          categories,
          imageUrls,
          id,
        } = card
        const props = {
          brand,
          name,
          currentPrice,
          categories,
          imageUrls,
          isCardsLoading,
        }
        return <ActualCard key={id} {...props} />
      })}
    </div>
  )
}

export default CardList
