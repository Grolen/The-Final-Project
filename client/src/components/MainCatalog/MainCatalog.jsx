import React from 'react'
import styles from './MainCatalog.module.scss'
import { Container, Grid, Paper } from '@mui/material'
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
              '.divMain': { display: 'none' },
              ':hover': {
                img: { opacity: 0.23 },
              },
              ':hover .divMain': {
                display: 'block',
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787225132515399/Rectangle_9.jpg"
              alt="#"
            />
            <div className="divMain">
              <CatalogHoverItem buttonSpacing="75%" topSpacing="58%" />
            </div>
          </Paper>
          <Paper
            sx={{
              boxShadow: 0,
              position: 'relative',
              '.divMain': { display: 'none' },
              ':hover': {
                img: { opacity: 0.23 },
              },
              ':hover .divMain': {
                display: 'block',
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787223412846663/Rectangle_11.jpg"
              alt="#"
            />
            <div className="divMain">
              <CatalogHoverItem buttonSpacing="75%" topSpacing="80%" />
            </div>
          </Paper>
        </Grid>
        <Grid>
          <Paper
            sx={{
              marginBottom: 2,
              boxShadow: 0,
              marginLeft: '11px',
              position: 'relative',
              '.divMain': { display: 'none' },
              ':hover': {
                img: { opacity: 0.23 },
              },
              ':hover .divMain': {
                display: 'block',
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787237501513869/Rectangle_10.jpg"
              alt="#"
            />
            <div className="divMain">
              <CatalogHoverItem buttonSpacing="130%" topSpacing="70%" />
            </div>
          </Paper>
          <Paper
            sx={{
              display: 'block',
              boxShadow: 0,
              marginLeft: '11px',
              position: 'relative',
              '.divMain': { display: 'none' },
              ':hover': {
                img: { opacity: 0.23 },
              },
              ':hover .divMain': {
                display: 'block',
              },
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1043545360498442271/1049787206845341758/Rectangle_12.jpg"
              alt="#"
            />
            <div className="divMain">
              <CatalogHoverItem buttonSpacing="130%" topSpacing="70%" />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainCatalog
