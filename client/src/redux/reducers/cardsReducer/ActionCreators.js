import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import thunk from 'redux-thunk'
export const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzI3YWYwY2RjZTFiMjBhNGQ1NTIwYyIsImZpcnN0TmFtZSI6IllhIiwibGFzdE5hbWUiOiJPbiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg0NDg0MDksImV4cCI6MTY2ODQ4NDQwOX0.3ZQWQjPIHeGcPO5vjkihmnTLzkdCCIAZ17sd93Dnte4'

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/products', {
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload cards')
    }
  }
)
