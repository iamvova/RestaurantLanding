import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__about-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} className="spoon__img" alt="" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button">Read More</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} className="spoon__img" alt="" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button">Read More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
