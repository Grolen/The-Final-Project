import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cardsReducer from './reducers/cardsReducer/CardsSlice'
import cardIdReducer from './reducers/cardIdReducer/CardIdReducer'

const rootReducer = combineReducers({
  cardsReducer,
  cardIdReducer,
})

export const launchStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
