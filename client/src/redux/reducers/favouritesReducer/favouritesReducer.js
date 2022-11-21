import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInFavourites: [],
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setItemInFavourites: (state, action) => {
      state.itemsInFavourites.push(action.payload)
    },
    deleteItemsFromFavourites: (state, action) => {
      state.itemsInFavourites = state.itemsInFavourites.filter(
        (card) => card.id !== action.payload
      )
    },
  },
})

export const { setItemInFavourites, deleteItemsFromFavourites } =
  favouritesSlice.actions
export default favouritesSlice.reducer
