import React, { useEffect, useState } from 'react'
// import { useFetching } from '../../hooks/useFetching'
import ActualCard from '../ActualCard/ActualCard'
import Preloader from '../Preloader/Preloader'
import { useDispatch, useSelector } from 'react-redux'
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent'
import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
import DropDown from '../DropDown/DropDown'
// import Headline from '../UI/Headline/Headline'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]
const sizes = [38, 39, 40, 41, 42]
const prices = [5600, 600, 2600, 3600, 8600]

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
      <div style={{ marginRight: '20px' }}>
        <DropDown forInputLabel="Brand" names={names} />
        <DropDown forInputLabel="Size" names={sizes} />
        <DropDown forInputLabel="Price" names={prices} />
      </div>
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
