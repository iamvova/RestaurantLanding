import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Gallery.css';


const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  
  const scrollRef = useRef(null)

  const scroll = (direction)=>{
    const {current} = scrollRef

    if(direction === 'left'){
      current.scrollLeft -= 300
    }else{
      current.scrollLeft += 300
    }
  }
  
  return(
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title='instagram' />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color: '#aaa', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery-img">
        <div className="app__gallery-img_container" ref={scrollRef}>
          {galleryImages.map((image, index )=>(
            <div key={`gallery_img-${index + 1}`} className="flex__center app__gallery-img_card">
              <img src={image} alt="image" />
              <BsInstagram className='gallary__img-icon' />
            </div>
          ))}
        </div>
        <div className="app__gallery-img_arrow">
          <BsArrowLeftShort className='gallery__arrow-icons' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icons' onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
