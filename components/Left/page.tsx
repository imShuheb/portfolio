import Link from 'next/link';
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Left() {
  return (
    <div className='left'>
      <ul>
        <li> <Link href={'/'}> <FaGithub size={20} /></Link></li>
        <li> <Link href={'/'}> <FaInstagram size={20} /></Link></li>
        <li> <Link href={'/'}> <FaLinkedin size={20} /></Link></li>
        <li> <Link href={'/'}> <FaFacebook size={20} /></Link></li>
        <li> <Link href={'/'}> <FaTwitter size={20} /></Link></li>
      </ul>
    </div>
  )
}

export default Left
