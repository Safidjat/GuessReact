import { createRoot } from 'react-dom/client'
import './index.css'
import './font.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {  ThemeProvider } from '@mui/material/styles'
import theme from './themes/grid-theme.js'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}> 
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
