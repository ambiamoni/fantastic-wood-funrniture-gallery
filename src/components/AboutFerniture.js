import React from "react";
import { FiClock } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const AboutFerniture = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://birchwoodfurniture.ca/wp-content/uploads/2020/03/livingroom.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col">      
        <h2 className="mt-[50px] mb-5 text-3xl font-semibold">ABOUT OUR FERNITURE</h2>
        <div className="grid grid-cols-3">
        <div className="max-w-md grid grid-cols-1 gap-2 p-2 justify-items-center">
            <div className="text-7xl">
              <FiClock />
            </div>
            <h1 className="mb-5 text-2xl font-xl">
              OLID WOOD FURNITURE <br></br>THAT LASTS
            </h1>
            <p className="mb-5">
              Quality furnishings last generations. At Birchwood Furniture
              Galleries, you will find an endless selection of hand crafted
              legacy furniture that will last a lifetime! Made from solid wood,
              crafted with care, our furniture is furniture for life.
            </p>
          </div>
          <div className="max-w-md grid grid-cols-1 justify-items-center">
            <div className="text-7xl">
              <FaRegLightbulb />
            </div>
            <h1 className="mb-5 text-2xl font-xl">
            WHAT IS "MENNONITE FURNITURE"?
            </h1>
            <p className="mb-5">
            Handmade from Mennonite communities across Canada, many people have learned that Mennonite-made furniture is crafted by hand, one piece at a time, by artisans experienced using the practices of previous generations. We are proud to carry such furnishings from quality brands (such as Handstone).
            </p>
          </div>
          <div className="max-w-md grid grid-cols-1 justify-items-center">
            <div className="text-7xl">
              <GiSelfLove/>
            </div>
            <h1 className="mb-5 text-2xl font-xl">
            QUALITY AND COMFORT YOU WILL LOVE EVERY DAY
            </h1>
            <p className="mb-5">
            Wobbly legs, flat cushions, and sagging springs- three things you’ll neverexperience when enjoying our furniture. Made following stringent practices, you can feel confident - and comfortable - in the quality furniture you’ll find within our walls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFerniture;
