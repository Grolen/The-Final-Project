import { createSlice } from '@reduxjs/toolkit'
import { fetchFilteredCards } from './ActionCreator'

const initialState = {
  filteredCards: [],
  filteredCardsLoading: false,
  filteredCardsError: '',
}

export const FilteredCardsSlice = createSlice({
  name: 'filteredCards',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilteredCards.fulfilled.type]: (state, action) => {
      state.cardsLoading = false
      state.filteredCardsError = ''
      state.filteredCards = action.payload
    },
    [fetchFilteredCards.pending.type]: (state) => {
      state.filteredCardsLoading = true
    },
    [fetchFilteredCards.rejected.type]: (state, action) => {
      state.filteredCardsLoading = false
      state.filteredCardsError = action.payload
    },
  },
})

export default FilteredCardsSlice.reducer
