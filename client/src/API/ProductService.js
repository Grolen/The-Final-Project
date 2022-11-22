import React from 'react'
import axios from 'axios'

export default class ProductService {
  static async getProductsById(itemNo) {
    const response = await axios.get(`/api/products/${itemNo}`) // incorrect link
    return response
  }

  static async getProductsBySomeParams(perPage, startPage, sort) {
    let url = `/api/products/filter?perPage=${perPage}&startPage=${startPage}`
    if (sort === 'labelFor') {
      url = `/api/products/filter?perPage=${perPage}&startPage=+currentPrice`
    }
    if (sort) {
      url = `/api/products/filter?perPage=${perPage}&startPage=${startPage}&sort=+${sort.toString()}`
    }
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    const { products, productsQuantity } = response.data
    return response.data
  }
}
