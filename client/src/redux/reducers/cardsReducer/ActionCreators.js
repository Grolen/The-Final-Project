import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import thunk from 'redux-thunk'

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI, perPage = 3, startPage = 1) => {
    try {
      // let perPage = 3
      // let startPage = 1
      let url = `/api/products?perPage=${perPage}&startPage=${startPage}`
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload cards')
    }
  }
)

// `/api/products/filter/?sort=+currentPrice`
//   /api/products
