import { Popper, Input, Box, Dialog } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

export const CustomLink = styled(Link)(() => ({
  textDecoration: 'none',
  textTransform: 'uppercase',
  textAlign: 'center',
  margin: '10px',
  width: '94%',
  fontFamily: ['Abel', 'san-serif'].join(','),
  fontSize: 18,
  lineHeight: '32px',
  borderRadius: 4,
  paddingBottom: 15,
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 15,
  color: '#FFFFFF',
  backgroundColor: '#373F41',
  border: '1px solid transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#373F41',
    border: '1px solid #373F41',
  },
}))

export const HeaderLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  textTransform: 'uppercase',
  justifyContent: 'space-between',
  alignItems: 'top',
  width: '20%',
  [theme.breakpoints.down('md')]: {
    width: '35%',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
