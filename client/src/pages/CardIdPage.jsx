import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../hooks/useLoading'
import ProductService from '../API/ProductService'
import Preloader from '../components/Preloader/Preloader'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ErrorComponent from '../components/UI/ErrorComponent/ErrorComponent'

const CardIdPage = () => {
  const params = useParams()
  const [card, setCard] = useState({})
  const [gertCard, isCardLoading, cardError] = useLoading(
    async (myCustomParam) => {
      const response = await ProductService.getProductsById(myCustomParam)
      setCard(response.data)
    }
  )

  useEffect(() => {
    gertCard(params.myCustomParam)
  }, [])

  return (
    <div>
      <Breadcrumb />
      <h1>Opened card with myCustomParam = {params.myCustomParam}</h1>
      {isCardLoading ? <Preloader /> : <div>This is CardIdPage</div>}
    </div>
  )
}

export default CardIdPage
