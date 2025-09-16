import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/strore.tsx'
import { GlobalProvider } from './GlobalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GlobalProvider>

    <BrowserRouter>
    <Provider store={store}>

    <App />
    </Provider>
    </BrowserRouter>
      </GlobalProvider>
  </StrictMode>,
)
