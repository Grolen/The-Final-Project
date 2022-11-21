import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import thunk from 'redux-thunk'

export const fetchFilteredCards = createAsyncThunk(
  'filterCards/fetchThem',
  async (_, thunkAPI, sort) => {
    try {
      let URL = `/api/products/filter?sort=+name`
      if (sort) {
        URL = `/api/products/filter?sort=+${sort}`
      }
      const response = await axios.get(URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload filtered cards')
    }
  }
)

// `/api/products/filter/?sort=+currentPrice`
//   /api/products
