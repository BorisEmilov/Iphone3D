import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={Logo} alt="apple" />
                </li>
                <li>
                    <a href="#" className='link-styled'>Store</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Mac</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Ipad</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Iphone</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Watch</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Airpods</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Tv & Home</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Entretainment</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Accesories</a>
                </li>
                <li>
                    <a href="#" className='link-styled'>Suport</a>
                </li>
                <li>
                    <img src={Search} alt="search" />
                </li>
                <li>
                    <img src={Store} alt="search" />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav