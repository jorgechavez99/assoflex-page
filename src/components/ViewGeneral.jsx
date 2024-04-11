import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import ImageGallery from 'react-image-gallery'

const ViewGeneral = () => {

  const images = [
    {
      original: "/assets/head2.png"
    },
    {
      original: "/assets/head3.png"
    }

  ]


  return (
    <div className='viewGeneral-container'>
      <NavBar />
      <div className='slide-container'>
      <ImageGallery items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        autoPlay={true}
        slideInterval={5000}
      />
      </div>
      
      <h1>-</h1>
      <Footer />
    </div>
  )
}

export default ViewGeneral
