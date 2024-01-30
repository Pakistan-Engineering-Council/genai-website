import React from 'react'
import NavBar from '../navBar'
import Hamburger from '../hamburger'
import Logo from '../Logo'
import TopSocialLinks from './TopSocialLinks'

export default function index() {
  return (
    <div className='min-w-screen flex md:flex-col md:justify-between'>
    <div className='  flex justify-between items-center mb-2'>
        {/* Logo */}
        <Logo/>
        <TopSocialLinks/>
    </div>
    </div>
  )
}
