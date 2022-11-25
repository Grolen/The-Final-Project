import axios from 'axios'

export default class ProductService {
  static async getProductsById(itemNo) {
    const response = await axios.get(`/api/products/${itemNo}`)
    return response
  }

  static async getProductsBySomeParams(perPage, startPage, sort) {
    let url = `/api/products/filter?perPage=${perPage}&startPage=${startPage}`
    if (sort === 'labelFor') {
      url = `/api/products/filter?sort=+currentPrice`
    }
    if (sort) {
      url = `/api/products/filter?perPage=${perPage}&startPage=${startPage}&sort=+${sort}`
    }
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    const { products, productsQuantity } = response.data
    return response.data
  }

  static async getFilteredByParam(sort) {
    let url = `/api/products/filter?+currentPrice`
    if (sort === 'labelFor') {
      url = `/api/products/filter?+name`
    }
    const response = await axios.get(`/api/products/filter?+${sort}`)
    console.log(response)
    return response
  }
}
