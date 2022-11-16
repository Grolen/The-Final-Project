import React, { useState } from 'react'
import CardList from '../../components/CardList/CardList'
import styles from './ProductList.module.scss'

const ProductList = () => {
  // for 2 or 4 scope
  const [view, setView] = useState(false)

  const changeCardSize = () => {
    setView(!view)
  }

  return (
    <div className="text-center text-warning">
      <div className={styles.containerForSize}>
        <span> view </span>
        <span className={styles.sizeChanger} onClick={changeCardSize}>
          2
        </span>
        <span className={styles.sizeChanger} onClick={changeCardSize}>
          4
        </span>
      </div>
      <CardList view={view} />
    </div>
  )
}

export default ProductList
