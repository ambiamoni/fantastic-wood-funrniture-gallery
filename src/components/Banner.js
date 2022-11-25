import React from 'react';
import Button from './Button.js';

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-20" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Ko289acalSrEKwYI5sb20u2WQa7KS9L-_0Ug4u2iEmc=")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content grid grid-cols-1">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">LOCALLY-MADE <br></br> QUALITY FURNITURE.</h1>
            <p className="mb-5">FIND A SEAT IN OUR SE CALGARY SHOWROOM!</p>
           
          </div>
          <div className='flex gap-3'>         
          
          <Button>VIEW OUR CATALOGUE</Button>
          <Button>CONTACT US</Button>
          
           </div>
        </div>
      </div>
    );
};

export default Banner;