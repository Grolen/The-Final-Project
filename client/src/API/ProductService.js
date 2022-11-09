import axios from 'axios'

export default class ProductService {
  static async getProducts(perPage = 10, page = 1) {
    const response = await axios.get('/products', {
      params: {
        _limit: perPage,
        _page: page,
      },
    })
    return response
  }
}
