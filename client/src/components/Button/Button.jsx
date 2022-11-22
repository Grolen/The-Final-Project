import React from 'react'
import MuiButton from '@mui/material/Button'

const Button = ({ buttonContent, title }) => {
  return (
    <>
      <MuiButton sx={buttonContent}>{title}</MuiButton>
    </>
  )
}

export default Button
