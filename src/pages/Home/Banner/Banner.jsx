import React from 'react';

const Banner = () => {
    return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/1d4e83c0-3048-4549-980f-fc22f369625f.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/ae8daa4f-96fd-4b08-a08c-30addeafaece.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/b566b2ca-2bcb-496b-923b-da95198c5f62.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/1a783b92-14a3-4bf3-bf94-5db85ff3fa20.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;