import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import thunk from 'redux-thunk'

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('./products.json')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload cards')
    }
  }
)
