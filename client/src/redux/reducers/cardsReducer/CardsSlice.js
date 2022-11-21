import { createSlice } from '@reduxjs/toolkit'
import { fetchCards } from './ActionCreators'

const initialState = {
  cards: [],
  cardsLoading: false,
  cardsError: '',
}

export const CardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCards: (state, action) => {
      state.cards.push(action.payload)
    },
  },
  extraReducers: {
    [fetchCards.fulfilled.type]: (state, action) => {
      state.cardsLoading = false
      state.cardsError = ''
      state.cards = action.payload
    },
    [fetchCards.pending.type]: (state) => {
      state.cardsLoading = true
    },
    [fetchCards.rejected.type]: (state, action) => {
      state.cardsLoading = false
      state.cardsError = action.payload
    },
  },
})

export const { addCards } = CardsSlice.actions
export default CardsSlice.reducer
