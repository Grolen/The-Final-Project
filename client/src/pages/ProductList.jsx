import React, { useState } from 'react'
import CardList from '../components/CardList/CardList'

const ProductList = () => {
  // for 2 or 4 scope
  // const [view, setView] = useState(2);
  return (
    <div className="text-center text-warning">
      <CardList />
    </div>
  )
}

export default ProductList
