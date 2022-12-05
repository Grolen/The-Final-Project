import { useContext, useEffect, useState } from 'react'
import { useAuth } from './useAuth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useLoading } from './useLoading'
import CartService from '../API/CartService'

export const useCart = () => {
  const [productsInCart, setProductsInCart] = useState([])
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const logoutFunc = (event) => {
    event.preventDefault()
    auth.logout()
    auth.isAuthenticated = false
    navigate('/login')
  }

  const infoAboutUser = localStorage.getItem(`InfoAboutUser`)
  const parsed = JSON.parse(infoAboutUser)
  const actualToken = parsed.token

  const [getCart, isCartLoading, cartError] = useLoading(async () => {
    const response = await CartService.getCartInfo(actualToken)
    const products = response.products
    setProductsInCart(products)
    return response
  })

  useEffect(() => {
    getCart()
  }, [])

  return {
    productsInCart,
    setProductsInCart,
    logoutFunc,
    actualToken,
    isCartLoading,
    cartError,
  }
}
