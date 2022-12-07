import React from 'react'
import styles from './MainCatalog.module.scss'
import { Container, Grid } from '@mui/material'

const MainCatalog = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787225132515399/Rectangle_9.jpg"
              alt="#"
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787223412846663/Rectangle_11.jpg"
              alt="#"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787237501513869/Rectangle_10.jpg"
              alt="#"
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787206845341758/Rectangle_12.jpg"
              alt="#"
            />
          </div>
        </div>
      </Grid>
    </Container>
  )
}

export default MainCatalog
