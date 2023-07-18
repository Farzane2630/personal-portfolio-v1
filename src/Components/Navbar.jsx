import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLanguage} from "react-icons/md"

export default function Navbar() {
  return (
   <nav class="navbar">

   <ul class="navbar-list">

     <li class="navbar-item">
       <button class="navbar-link" data-nav-link>
         <Link className="link" to='/'>
           About
         </Link>
       </button>
     </li>

     <li class="navbar-item">
       <button class="navbar-link" data-nav-link>
         <Link className="link" to="/resume">
           Resume
         </Link>
       </button>
     </li>

     <li class="navbar-item">
       <button class="navbar-link" data-nav-link>
         <Link className="link" to="/portfolio">
           Portfolio
         </Link>
       </button>
     </li>

     <li class="navbar-item">
       <button class="navbar-link" data-nav-link>
         <Link className="link" to="/contact">
           Contact
         </Link>
       </button>
     </li>
     <li class="navbar-item">
       <button class="navbar-link" data-nav-link style={{display: "flex", alignItems: "center", columnGap: 4}}>
         <MdOutlineLanguage fontSize="17px" />
         German
       </button>
     </li>

   </ul>

 </nav>
  )
}
