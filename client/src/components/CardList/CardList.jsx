import React, { useEffect, useState } from 'react'
// import { useFetching } from '../../hooks/useFetching'
import ActualCard from '../ActualCard/ActualCard'
import Preloader from '../Preloader/Preloader'
import { useDispatch, useSelector } from 'react-redux'
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent'
import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
// import Headline from '../UI/Headline/Headline'

const CardList = () => {
  const dispatch = useDispatch()
  const { cards, cardsLoading, cardsError } = useSelector(
    (state) => state.cardsReducer
  )

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  // if (!cards.length) return <Headline />
  return (
    <div style={{ display: 'flex', marginTop: '30px' }}>
      {cardsLoading && <Preloader />}
      {cardsError && <ErrorComponent error={cardsError} />}
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
          quantity,
          enabled,
        }
        return <ActualCard key={id} {...props} />
      })}
    </div>
  )
}

export default CardList
