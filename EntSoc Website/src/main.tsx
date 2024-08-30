import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #root': {
        backgroundColor: 'white', 
        color: 'black',
        height: '100%',
        margin: 0,
        padding: 0
      }
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme = {theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
