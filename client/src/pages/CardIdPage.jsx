import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import cardIdReducer from '../redux/reducers/cardIdReducer/CardIdReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { findOneCard } from '../redux/reducers/cardIdReducer/ActionCreators'
import Preloader from '../components/Preloader/Preloader'
// import setCurrentCard from '../redux/reducers/currentCardReducer'

const CardIdPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { card, isCardLoading, cardError } = useSelector(
    (state) => state.cardIdReducer
  )

  useEffect(() => {
    dispatch(findOneCard(params.id))
  }, [])

  // const redirectToCard = () => {
  //   dispatch(setCurrentCard(card))
  //  navigate(`/list/${card.id}`)
  // }

  return (
    <div>
      <h1> The page with ID = {params.id} </h1>
      {isCardLoading ? <Preloader /> : <div>This is CardIdPage</div>}
    </div>
  )
}

export default CardIdPage
