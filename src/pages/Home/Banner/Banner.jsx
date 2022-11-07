import React from 'react';

const Banner = () => {
    return (
    <div className="carousel w-[90%] mx-auto">
  <div id="slide1" className="carousel-item relative w-full h-1/3">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/33f89a75-5bce-4915-8cb6-37f616c8be99.jpg" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/fe4258cd-549f-4633-ad86-e3f9f46502d0.jpg" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/b566b2ca-2bcb-496b-923b-da95198c5f62.jpg" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/tour_management/pictures/upload/1a783b92-14a3-4bf3-bf94-5db85ff3fa20.jpg" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;