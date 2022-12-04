import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './reducers/favouritesReducer/wishlistReducer'

const rootReducer = combineReducers({
  favouritesReducer,
})

export const launchStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
