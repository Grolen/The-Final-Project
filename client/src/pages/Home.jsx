import React from 'react'
// import axios from 'axios'
import DropDown from '../components/DropDown/DropDown'
// import NavigatePanel from '../components/NavigatePanel/NavigatePanel'
import ActualCard from '../components/ActualCard/ActualCard'

const Home = () => {
  const options = [
    {
      value: 'Nike Vista Lite',
      label: 'Nike Vista Lite',
    },
    {
      value: 'Nike AF1 Shadow SE',
      label: 'Nike AF1 Shadow SE',
    },
    {
      value: 'Nike x Off-White',
      label: 'Nike x Off-White',
    },
  ]

  const prices = [
    {
      value: 5600,
      label: 5600,
    },
    {
      value: 600,
      label: 600,
    },
    {
      value: 2600,
      label: 2600,
    },
    {
      value: 3600,
      label: 3600,
    },
    {
      value: 8600,
      label: 8600,
    },
  ]

  const size = [
    {
      value: 38,
      label: 38,
    },
    {
      value: 39,
      label: 39,
    },
    {
      value: 40,
      label: 40,
    },
    {
      value: 41,
      label: 41,
    },
    {
      value: 42,
      label: 42,
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/*<NavigatePanel />*/}
      <DropDown placeholder="Select Brand" options={options} />
      <DropDown placeholder="Select Size" options={size} />
      <DropDown placeholder="Select Price" options={prices} />
      <ActualCard />
    </div>
  )
}

export default Home
