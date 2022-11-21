import React, { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList'
// import DropDown from '../../components/DropDown/DropDown'
import Options from '../../components/Options/Options'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
// import axios from 'axios'
// import { addCards } from '../../redux/reducers/cardsReducer/CardsSlice'
import { fetchFilteredCards } from '../../redux/reducers/filteredCardsReducer/ActionCreator'
// import filteredCardsReducer from '../../redux/reducers/filteredCardsReducer/filteredCards'
// import Selected from '../../components/Selected/Selected'
import { fetchCards } from '../../redux/reducers/cardsReducer/ActionCreators'
// import axios from 'axios'
// import filteredCards from '../../redux/reducers/filteredCardsReducer/filteredCards'
// import { fetchFilteredCards } from '../../redux/reducers/filteredCardsReducer/ActionCreator'
// import filteredCardsReducer from '../../redux/reducers/filteredCardsReducer/filteredCards'
import styles from './ProductList.module.scss'

const ProductList = () => {
  // for 2 or 4 scope
  const [view, setView] = useState(false)
  // const [sort, setSort] = useState('name')

  const dispatch = useDispatch()
  const { cards, cardsLoading, cardsError } = useSelector(
    (state) => state.cardsReducer
  )

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  const changeCardSize = () => {
    setView(!view)
  }

  // console.log(typeof cards)
  // console.log(Array.isArray(cards))
  // const values = ['name', 'currentPrice', 'brand']

  return (
    <div className={styles.containerList}>
      <CardList
        cards={cards}
        cardsLoading={cardsLoading}
        cardsError={cardsError}
        view={view}
      />
      <Options sizeFirst={2} sizeSecond={4} changeCardSize={changeCardSize} />
      {/*<DropDown*/}
      {/*  labelFor="Sort By"*/}
      {/*  value={age}*/}
      {/*  onChange={handleChange}*/}
      {/*  values={values}*/}
      {/*/>*/}
      {/*<Selected value={sort} onChange={(e) => setSort(e.target.value)} />*/}
    </div>
  )
}

export default ProductList
