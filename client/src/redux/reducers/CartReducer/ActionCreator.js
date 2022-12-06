import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const cartItems = createAsyncThunk(
  'cart/getCart',
  async (_, thunkAPI, actualToken) => {
    try {
      const response = await axios.get('/api/cart', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEyNDY1MjViMjMxNDE4NDc4MDY1NyIsImZpcnN0TmFtZSI6IkFpbSIsImxhc3ROYW1lIjoiQm90IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3MDMyOTYzOCwiZXhwIjoxNjcwMzY1NjM4fQ.h9GQcCwCBVuDORo7VRO1nFnFNSVt34c8O-RbL9IicdA',
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot upload Items In Cart')
    }
  }
)

// some comments

// const [getCart, isCartLoading, cartError] = useLoading(async () => {
//   const response = await CartService.getCartInfo(actualToken)
//   const products = response.products
//   setProductsInCart(products)
//   return response
// })

// useEffect(() => {
//   getCart()
// }, [])

// return {
//   productsInCart,
//   setProductsInCart,
//   logoutFunc,
//   actualToken,
//   isCartLoading,
//   cartError,
// }

// const initialArray = [
//     {
//         _id: '638ccada32dd4b080807f4t5',
//         product: {
//             enabled: false,
//             imageUrls: [
//                 'https://airmax.in.ua/image/cache/catalog/airmax720/bright_crimson_black/krossovki_nike_air0_cool_grey_bright_crimson_black_ck0897_001_1-700x700-product_popup.jpg',
//                 'https://realstore.com.ua/image/catalog/allproductpic/Shoes/nike/Nike%20Air%20Max%20720%20ISPA%2e%20Black/krossovki-nike-air-max-720-ispa-white-black%20(2).jpg',
//                 'https://megasport.ua/api/s3/images/megasport-dev/products/3555570144/09_20203_aq3196_100_2_15965389105.jpg',
//                 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fsbrvtqgej4ufyllfjsk/air-max-720-er-older-shoe-PhjNs1.png',
//             ],
//             quantity: 12,
//             _id: '6372921b1c8d1e749b332701',
//             name: 'Nike Air Max 720',
//             currentPrice: 234,
//             previousPrice: 525,
//             categories: 'for men',
//             productUrl: '/men',
//             brand: 'Nike',
//             myCustomParam: '720 nike',
//             itemNo: '235554',
//             rating: 3,
//             date: '2022-12-06T18:36:17.006Z',
//         },
//         cartQuantity: 1,
//     },
//     {
//         _id: '638ccada32ddr4080807f4t5',
//         product: {
//             enabled: true,
//             imageUrls: [
//                 'https://airmax.in.ua/imcache/catalog/airmax720/bright_crimson_black/krossovki_nike_air0_cool_grey_bright_crimson_black_ck0897_001_1-700x700-product_popup.jpg',
//                 'https://realstore.com.ua/ie/catalog/allproductpic/Shoes/nike/Nike%20Air%20Max%20720%20ISPA%2e%20Black/krossovki-nike-air-max-720-ispa-white-black%20(2).jpg',
//                 'https://megaspo.ua/api/s3/images/megasport-dev/products/3555570144/09_20203_aq3196_100_2_15965389105.jpg',
//                 'https://static.nikem/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fsbrvtqgej4ufyllfjsk/air-max-720-er-older-shoe-PhjNs1.png',
//             ],
//             quantity: 12,
//             _id: '6372921b1c8d1e749b33211',
//             name: 'Nike Air Max',
//             currentPrice: 234,
//             previousPrice: 525,
//             categories: 'for men',
//             productUrl: '/men',
//             brand: 'Nke',
//             myCustomParam: '720',
//             itemNo: '135554',
//             rating: 3,
//             date: '2022-12-06T18:36:17.006Z',
//         },
//         cartQuantity: 1,
//     },
// ]
