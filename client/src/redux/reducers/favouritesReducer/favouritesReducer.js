import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInWishlist: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setItemInWishlist: (state, action) => {
      state.itemsInWishlist.push(action.payload)
    },
    deleteItemsFromWishlist: (state, action) => {
      state.itemsInWishlist = state.itemsInWishlist.filter(
        (card) => card.id !== action.payload
      )
    },
  },
  extraReducers: {},
})

export const { setItemInWishlist, deleteItemsFromWishlist } =
  wishlistSlice.actions
export default wishlistSlice.reducer
