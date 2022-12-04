import axios from 'axios'

export default class CartService {
  static async getCartInfo(token) {
    const response = await axios.get(`/api/cart`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data
  }
}
