import { createSlice } from '@reduxjs/toolkit'
import { findOneCard } from './ActionCreators'

const initialState = {
  card: {},
  isCardLoading: false,
  cardError: '',
}

export const CardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [findOneCard.fulfilled.type]: (state, action) => {
      state.isCardLoading = false
      state.cardError = ''
      state.card = action.payload
    },
    [findOneCard.pending.type]: (state) => {
      state.isCardLoading = true
    },
    [findOneCard.rejected.type]: (state, action) => {
      state.isCardLoading = false
      state.cardError = action.payload
    },
  },
})

export default CardSlice.reducer
