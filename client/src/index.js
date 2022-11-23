import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { launchStore } from './redux/index'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import theme from './muiTheme/theme'
// import 'antd/dist/antd.css'
import './styles/index.scss'

const store = launchStore()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
)
