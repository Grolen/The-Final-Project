import React from 'react'

const Selected = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="name">name</option>
      <option value="currentPrice">currentPrice</option>
      <option value="brand">brand</option>
    </select>
  )
}

export default Selected
