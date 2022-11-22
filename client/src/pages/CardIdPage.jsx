import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../hooks/useLoading'
import ProductService from '../API/ProductService'
import Preloader from '../components/Preloader/Preloader'
import ErrorComponent from '../components/UI/ErrorComponent/ErrorComponent'

const CardIdPage = () => {
  const params = useParams()
  const [card, setCard] = useState({})
  const [gertCard, isCardLoading, cardError] = useLoading(async (itemNo) => {
    const response = await ProductService.getProductsById(itemNo)
    console.log(response)
    setCard(response.data)
  })

  useEffect(() => {
    gertCard(params.itemNo)
  }, [])

  return (
    <div>
      <h1>Opened card with itemNo = {params.itemNo}</h1>
      {isCardLoading ? <Preloader /> : <div>This is CardIdPage</div>}
    </div>
  )
}

export default CardIdPage
