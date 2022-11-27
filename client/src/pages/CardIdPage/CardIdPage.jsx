import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../../hooks/useLoading'
import ProductService from '../../API/ProductService'
import Preloader from '../../components/Preloader/Preloader'
import Button from '../../components/Button/Button'
import Typography from '@mui/joy/Typography'
import DropDown from '../../components/DropDown/DropDown'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Rating } from '@mui/material'
import styles from './CardIdPage.module.scss'

const CardIdPage = () => {
  const params = useParams()
  // const [value, setValue] = useState(4)
  const [card, setCard] = useState({})
  const [amount, setAmount] = useState(23)
  const [gertCard, isCardLoading, cardError] = useLoading(async (itemNo) => {
    const response = await ProductService.getProductsById(itemNo)
    setCard(response.data)
  })

  const blackBGButton = {
    width: '221px',
    height: '44px',
    color: 'white',
    backgroundColor: 'black',
  }

  const changeQuantFunc = (event) => {
    setAmount(event.target.value)
  }

  const {
    name,
    brand,
    currentPrice,
    previousPrice,
    quantity,
    imageUrls,
    categories,
    rating,
  } = card
  console.log(card)
  console.log(rating)

  const values = [3, 23, 12, 15, 16, 67]

  const dropDown = {
    labelFor: 'Choose quantity',
    value: amount,
    onChange: changeQuantFunc,
    values: values,
  }

  useEffect(() => {
    gertCard(params.itemNo)
  }, [])

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerForImg}>
        <img
          style={{ width: '600px', height: '500px' }}
          src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
          alt="trainers"
        />
        <Typography>{name}</Typography>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <Typography variant="h1" component="h2">
            {name}
          </Typography>
          <hr />
          <div className={styles.forWhom}>
            <Typography variant="h1" component="h2">
              {categories}
            </Typography>
            <Typography variant="h1" component="h2">
              quantity: {quantity}
            </Typography>
          </div>
        </div>
        <Typography variant="h1" component="h2">
          {currentPrice}₴
        </Typography>
        <DropDown {...dropDown} />
        <div className={styles.buttonBlock}>
          <Button buttonContent={blackBGButton} title="Add to Cart" />
          <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
        </div>
        <Typography variant="h1" component="h2">
          {/*need real text*/}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/*need real text*/}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        {isCardLoading ? <Preloader /> : <div>This is CardIdPage</div>}
      </div>
    </div>
  )
}

export default CardIdPage
