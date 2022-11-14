import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  userId: null,
}

const storageName = 'InfoAboutUser'

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.token = action.payload.token
      state.userId = action.payload.userId
      localStorage.setItem(storageName, JSON.stringify({ userId, token }))
    },
    logoutCustomer: (state) => {
      state.token = null
      state.userId = null
    },
  },
})

export const { loginUser, logoutCustomer } = loginSlice.actions
export default loginSlice.reducer
