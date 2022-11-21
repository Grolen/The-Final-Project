import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cardsReducer from './reducers/cardsReducer/CardsSlice'
import favouritesReducer from './reducers/favouritesReducer/favouritesReducer'
import filteredCardsReducer from './reducers/filteredCardsReducer/filteredCards'

const rootReducer = combineReducers({
  cardsReducer,
  favouritesReducer,
  filteredCardsReducer,
})

export const launchStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
