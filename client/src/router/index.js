import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'
import CardIdPage from '../pages/CardIdPage'

export const privateRoutes = [
  { path: '/', element: Home },
  { path: '/list', element: ProductList },
  { path: '/details', element: ProductDetails },
  { path: '/cart', element: CartPage },
  { path: '/list/:id', element: CardIdPage },
]

export const publicRoutes = [{ path: '/login', element: LoginPage }]
