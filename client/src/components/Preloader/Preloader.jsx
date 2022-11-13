import React from 'react'

const Preloader = () => {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h2>Preloader :</h2>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Preloader
