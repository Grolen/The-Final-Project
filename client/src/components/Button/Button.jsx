import React from 'react'
import MuiButton from '@mui/material/Button'

const Button = ({
  buttonContent: {
    width = '150px',
    height = '50px',
    color = 'secondary',
    backgroundColor = 'white',
    boxShadow = '',
    fontSize = '13px',
  },
  title,
}) => {
  const styledButton = {
    margin: '20px',
    width: width,
    height: height,
    color: color,
    backgroundColor: backgroundColor,
    boxShadow: boxShadow,
    fontStyle: `normal`,
    borderRadius: 0,
    fontWeight: 700,
    fontSize: fontSize,
    lineHeight: `22px`,
    padding: `8px 26px`,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: backgroundColor,
    },
  }
  return (
    <>
      <MuiButton sx={styledButton}>{title}</MuiButton>
    </>
  )
}

export default Button
