import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const wishlistItems = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/products', 'POST', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload cards')
    }
  }
)
