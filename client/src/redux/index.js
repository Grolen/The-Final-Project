import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cardsReducer from './reducers/cardsReducer/CardsSlice'

const rootReducer = combineReducers({
  cardsReducer,
})

export const launchStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
