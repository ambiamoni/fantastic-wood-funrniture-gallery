import React from 'react';
import Button from '../Button.js';

const BedroomCard = () => {
    return (
        <div className="hero text-left pl-20 ">
        <div className="hero-contentflex grid grid-cols-1 ">
          <div>
            <img src="https://media.istockphoto.com/id/465559373/photo/old-wood-background.jpg?b=1&s=170667a&w=0&k=20&c=x4oxoo5W_QY51yFdCEg_rM6YgmvhhybsYTrGpEDF2QQ=" />
          </div>

          <div className="mt-10">
            <h1 className="text-3xl font-semibold text-[#547e7e]">
              HOW TO CHOOSE WOOD FOR <br></br>FURNITURE MAKING
            </h1>
            <p className="py-6">
              Are you interested in building your own furniture but do not know
              where to start? At Birchwood Furniture, we know everything when it
              comes to furniture including which building materials are best.
              While almost any type of wood can be used to build furniture, some
              woods are a better choice depending on your goals, your budget
            </p>
         
            <Button>
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    );
};

export default BedroomCard;