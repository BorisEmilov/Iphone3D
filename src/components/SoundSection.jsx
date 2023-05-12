import React from 'react'

const SoundSection = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section")
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div className='sound-section wrapper'>
        <div className='body'>
            <div className='sound-section-content content'>
                <h2 className='title'>New sound sistem</h2>
                <p className='text'>Fell the base</p>
                <span className='description'></span>
                <ul className='links'>
                    <li><button className='button'>Buy</button></li>
                    <li><a onClick={handleLearnMore} className='link'>Learn More</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SoundSection