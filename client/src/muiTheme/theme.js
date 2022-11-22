import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00FF38',
    },
    text: {
      primary: '#FFFFFF',
    },
  },

  typography: {
    body: {
      fontSize: '1.25rem',
      fontStyle: 'Regular',
      textAlign: 'center',
      fonWeight: '400',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      '&:hover': {
        color: '#868686',
      },
    },
  },
})

export default theme
