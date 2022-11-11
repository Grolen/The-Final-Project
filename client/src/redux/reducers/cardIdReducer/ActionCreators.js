import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const findOneCard = createAsyncThunk(
  'card/fetchOne',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('./products.json')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload this card')
    }
  }
)
