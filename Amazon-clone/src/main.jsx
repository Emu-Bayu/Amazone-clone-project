import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Dataprovider } from './components/Dataprovider/Dataprovider.jsx'
import { reducer,initialstate } from './Utility/Reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider reducer={reducer} initialstate={initialstate} >
    <App />
    </Dataprovider>
    
  </StrictMode>,
)
