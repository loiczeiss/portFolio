import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyContextProvider } from './components/MyContext.tsx'
import App from './App.tsx'
import './index.css'
import './fonts/NeueMontreal-Medium.otf'
import './fonts/NeueMontreal-Light.otf'
import './fonts/NeueMontreal-Bold.otf'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <MyContextProvider><App/></MyContextProvider>
,
)
