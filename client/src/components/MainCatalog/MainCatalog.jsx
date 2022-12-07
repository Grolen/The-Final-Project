import React from 'react'
import styles from './MainCatalog.module.scss'
// import Button from '../Button/Button'
import { Container, Grid, Paper, Typography, Button } from '@mui/material'
import { CatalogHoverItem } from '../CatalogHoverItem/CatalogHoverItem'

const MainCatalog = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid>
          <Paper
            sx={{
              position: 'relative',
              marginBottom: 2,
              boxShadow: 0,
              ':hover': {
                img: { opacity: 0.23 },
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787225132515399/Rectangle_9.jpg"
              alt="#"
            />
            <CatalogHoverItem topSpacing="58%" />
          </Paper>
          <Paper
            sx={{
              boxShadow: 0,
              position: 'relative',
              ':hover': {
                img: { opacity: 0.23 },
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787223412846663/Rectangle_11.jpg"
              alt="#"
            />
            <CatalogHoverItem topSpacing="80%" />
          </Paper>
        </Grid>
        <Grid>
          <Paper
            sx={{
              marginBottom: 2,
              boxShadow: 0,
              marginLeft: '11px',
              position: 'relative',
              ':hover': {
                img: { opacity: 0.23 },
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787237501513869/Rectangle_10.jpg"
              alt="#"
            />
            <CatalogHoverItem topSpacing="70%" />
          </Paper>
          <Paper
            sx={{
              display: 'block',
              boxShadow: 0,
              marginLeft: '11px',
              position: 'relative',
              ':hover': {
                img: { opacity: 0.23 },
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787206845341758/Rectangle_12.jpg"
              alt="#"
            />
            <CatalogHoverItem topSpacing="70%" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainCatalog
