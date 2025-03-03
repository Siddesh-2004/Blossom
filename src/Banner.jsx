import './Banner.css';
import React, { useEffect, useState } from 'react';


   
    function Banner( {banners} ) {
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.images.length);
        }, 3000);
      },[]);

      return (
        <div className="main">
          <img src={banners.images[currentIndex]} className="slide" alt="banner" />
        </div>
      );
    }
    
 
export default Banner;
