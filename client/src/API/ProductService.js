import axios from 'axios'

// not finished function
export class ProductService {
  static async getProducts() {
    return axios
      .get('/products')
      .then((c) => {})
      .catch((err) => {
        console.log(err.message)
      })
  }
}
