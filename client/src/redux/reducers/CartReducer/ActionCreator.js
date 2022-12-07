import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const cartItems = createAsyncThunk(
  'cart/getCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/cart', {
        headers: {
          Authorization: `${
            JSON.parse(localStorage.getItem(`InfoAboutUser`)).token
          }`,
        },
      })
      return response.data
    } catch (e) {
      return rejectWithValue('Cannot upload Items In Cart')
    }
  }
)
