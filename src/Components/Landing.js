import React from 'react'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Navbar from './MyNavbar'

export default function Landing() {
  return (
    <div className='bgimage'>
      <Navbar/>            
    </div>
  )
}

