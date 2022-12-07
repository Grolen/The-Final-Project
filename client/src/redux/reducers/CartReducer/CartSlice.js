import { createSlice } from '@reduxjs/toolkit'
import { cartItems } from './ActionCreator'

const initialState = {
  itemsInCart: {
    _id: '',
    customerId: {},
    products: [],
  },
  isCartLoading: false,
  cartError: '',
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [cartItems.fulfilled.type]: (state, action) => {
      state.isCartLoading = false
      state.cartError = ''
      state.itemsInCart = action.payload
    },
    [cartItems.pending.type]: (state) => {
      state.isCartLoading = true
    },
    [cartItems.rejected.type]: (state, action) => {
      state.isCartLoading = false
      state.cartError = action.payload
    },
  },
})

// export const {} = CartSlice.actions
export default CartSlice.reducer
