import axios from 'axios'

export default class ProductService {
  static async getProductsById(myCustomParam) {
    const response = await axios.get(`/api/products/${myCustomParam}`)
    return response
  }
}

// const response = await axios.post('/api/products', {
//   headers: { Authorization: `Bearer ${TOKEN}` },
//   body: {
// })
// return response
// console.log(response)
