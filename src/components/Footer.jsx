import React from 'react'
import { FaRegEnvelope } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";

function Footer() {

  return (
    <section className='footer'>
        <ul className='footer_lista'>
            <li className='footer_elemento'> FAQ </li>
            <li className='footer_elemento'> Privacy </li>
            <li className='footer_elemento'> Terms </li>
            <li className='footer_elemento'> Security </li>
        </ul>

        <div className='footer_icono'>
            <p> <FaRegEnvelope /> </p>
            <p> <FaTwitter /> </p>

        </div>


    </section> 
    
  )
}

export default Footer