import React from 'react'
import { Paper, Typography, Button } from '@mui/material'

export const CatalogHoverItem = (props) => {
  const { topSpacing, buttonSpacing } = props

  return (
    <Paper
      className="hoverCatalog"
      variant="outlined"
      sx={{
        display: 'block',
        ml: '11px',
        position: 'absolute',
        border: 'none',
        top: `${topSpacing}`,
        background: 'none',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: 'black',
          fontSize: '16px',
          fontFamily: 'Helvetica',
        }}
      >
        Новая коллекция
      </Typography>
      <Typography
        variant="h4"
        sx={{
          mt: '10px',
          color: 'black',
          fontSize: '28px',
          fontFamily: 'Helvetica',
        }}
      >
        <strong>KISS MY AIRS</strong>
      </Typography>
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'black',
          p: '2px 26px',
          borderRadius: '0px',
          mt: '22px',
          left: ` ${buttonSpacing}`,
        }}
      >
        ПОДРОБНЕЕ
      </Button>
    </Paper>
  )
}
