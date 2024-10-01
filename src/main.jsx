import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const leads = [
  {name: "Thais de Jesus Santos", email: "thais@gmail.com", numPhone: "79996622447"},
  {name: "Lucas Honorato Sacramento dos Santos", email: "lucas@gmail.com", numPhone: "11940427778"},
  {name: "Thais de Jesus Santos", email: "thais@gmail.com", numPhone: "79996622447"},
  {name: "Lucas Honorato Sacramento dos Santos", email: "lucas@gmail.com", numPhone: "11940427778"},
  {name: "Thais de Jesus Santos", email: "thais@gmail.com", numPhone: "79996622447"},
  {name: "Lucas Honorato Sacramento dos Santos", email: "lucas@gmail.com", numPhone: "11940427778"}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App leads={leads}/>
  </StrictMode>,
)
