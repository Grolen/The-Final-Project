import React, { useEffect, useState } from 'react'
// import { useFetching } from '../../hooks/useFetching'
import ActualCard from '../ActualCard/ActualCard'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
//import { useDispatch, useSelector } from 'react-redux'
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent'
// import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
// import DropDown from '../DropDown/DropDown'
// import Headline from '../UI/Headline/Headline'
import PropTypes from 'prop-types'
// import Headline from '../UI/Headline/Headline'
// import DropDown from '../DropDown/DropDown'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
// import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
import styles from './CardList.module.scss'

// const sizes = [38, 39, 40, 41, 42]

const CardList = ({ view, cards, cardsLoading, cardsError }) => {
  const dispatch = useDispatch()
  const names = cards.map((card) => {
    return card.name
  })
  // no sizes in DB

  // const sizes = cards.map((card) => {
  //   return card.name
  // })

  const prices = cards.map((card) => {
    return card.currentPrice
  })

  // if (!cards.length) return <Headline />
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.cardList}>
        <h1> Shoes </h1>
        {/*<DropDown labelFor="Choose Brand" values={names} />*/}
        {/*<DropDown forInputLabel="Size" names={sizes} />*/}
        {/*<DropDown labelFor="Choose Price" values={prices} />*/}
      </div>
      <div className={styles.containerCards}>
        <InfiniteScroll
          // next={}
          hasMore={true}
          loader={<h1> Wait to load more! </h1>}
          dataLength={cards.length}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
              card,
            }
            return <ActualCard key={myCustomParam} {...props} />
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

CardList.propTypes = {
  view: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
  cardsLoading: PropTypes.bool.isRequired,
  cardsError: PropTypes.string.isRequired,
}

CardList.defaultProps = {
  view: false,
  cards: [],
  cardsLoading: false,
  cardsError: '',
}

export default CardList
