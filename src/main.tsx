import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import './fonts/NeueMontreal-Medium.otf'
import './fonts/NeueMontreal-Light.otf'
import './fonts/NeueMontreal-Bold.otf'

ReactDOM.createRoot(document.getElementById('root')!).render(

 <Router>
     <App />
 </Router>
,
)
