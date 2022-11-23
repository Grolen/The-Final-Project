import React, { useEffect, useState } from 'react'
// import { useFetching } from '../../hooks/useFetching'
import ActualCard from '../ActualCard/ActualCard'
import Preloader from '../Preloader/Preloader'
import { useDispatch, useSelector } from 'react-redux'
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent'
import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
import DropDown from '../DropDown/DropDown'
// import Headline from '../UI/Headline/Headline'
import PropTypes from 'prop-types'
import styles from './CardList.module.scss'
import { useNavigate } from 'react-router-dom'

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

const CardList = ({ view }) => {
  const dispatch = useDispatch()
  const { cards, cardsLoading, cardsError } = useSelector(
    (state) => state.cardsReducer
  )

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  // if (!cards.length) return <Headline />
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '30px',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ marginRight: '20px' }}>
        <h1> Shoes </h1>
        <DropDown forInputLabel="Brand" names={names} />
        <DropDown forInputLabel="Size" names={sizes} />
        <DropDown forInputLabel="Price" names={prices} />
      </div>
      <div className={styles.containerCards}>
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
            myCustomParam,
          } = card
          const props = {
            view,
            brand,
            name,
            currentPrice,
            categories,
            imageUrls,
            quantity,
            enabled,
            myCustomParam,
          }
          return <ActualCard key={myCustomParam} {...props} />
        })}
      </div>
    </div>
  )
}

export default CardList
