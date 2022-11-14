import React, { useState } from 'react'
import { privateRoutes, publicRoutes } from '../router'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'

const AppRouter = () => {
  // auth
  const [auth, setAuth] = useState(true)
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default AppRouter
