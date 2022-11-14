import axios from 'axios'

export const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzI3YWYwY2RjZTFiMjBhNGQ1NTIwYyIsImZpcnN0TmFtZSI6IllhIiwibGFzdE5hbWUiOiJPbiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg0NDg0MDksImV4cCI6MTY2ODQ4NDQwOX0.3ZQWQjPIHeGcPO5vjkihmnTLzkdCCIAZ17sd93Dnte4'

export default class ProductService {
  static async getProducts() {
    const response = await axios.get('/api/products')
    return response
  }
}
