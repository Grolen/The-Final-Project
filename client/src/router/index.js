import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProductList from '../pages/ProductList/ProductList'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'
import CardIdPage from '../pages/CardIdPage/CardIdPage'
import WishList from '../pages/WishList/WishList'

export const privateRoutes = [
  { path: '/', element: Home },
  { path: '/list', element: ProductList },
  { path: '/details', element: ProductDetails },
  { path: '/cart', element: CartPage },
  { path: '/list/:itemNo', element: CardIdPage },
  { path: '/wishlist', element: WishList },
]

export const publicRoutes = [{ path: '/login', element: LoginPage }]
