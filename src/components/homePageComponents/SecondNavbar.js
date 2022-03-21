import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function SecondNavbar() {
  return (
        <div>
         <ul className="navbar-ul">
                    <li><Link to='/empDir' >Employee Directory </Link></li>
                    <li><Link to='/taskManagement'>Manage Tasks</Link></li>
                    <li><Link to='/uploadDoc'>Upload Documents</Link></li>
            </ul>
        </div>

  )
}

export default SecondNavbar