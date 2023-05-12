import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'

const Jumbotron = () => {

    {/* scroll down or top on click */}
    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section")
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth',
        })
    }

  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img src={Iphone} className='logo' alt="iPhone 14 Pro" />
        <p className='text'>
            Big and Bigger
        </p>
        <span className='description'>From $50/mo. for 12mo. or $98 before trade-in</span>
        <ul className='links'>
            <li><button className='button'>Buy</button></li>
            <li><a onClick={handleLearnMore} className='link'>learn more</a></li>
        </ul>
        <img src={HoldingIphone} className='iphone-img' alt="iPhone" />
    </div>
  )
}

export default Jumbotron