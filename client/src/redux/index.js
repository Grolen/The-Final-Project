import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './reducers/favouritesReducer/favouritesReducer'

const rootReducer = combineReducers({
  favouritesReducer,
})

export const launchStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
