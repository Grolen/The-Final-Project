import React, { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import ProductService from '../../API/ProductService'

const CardList = () => {
  const [cards, setCards] = useState([])

  const [fetchingCards, isCardsLoading, cardError] = useFetching(async () => {
    const cards = await ProductService.getProducts()
    setCards(cards)
  })

  useEffect(() => {
    fetchingCards()
  }, [])

  // no cards

  console.log(cards)

  return <div></div>
}

export default CardList
