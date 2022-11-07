import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'

export const privateRoutes = [
  { path: '/', element: Home },
  { path: '/list', element: ProductList },
  { path: '/details', element: ProductDetails },
  { path: '/cart', element: CartPage },
]

export const publicRoutes = [{ path: '/login', element: LoginPage }]
