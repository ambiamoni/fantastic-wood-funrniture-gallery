import React from "react";
import Button from "./Button.js";


const Features = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://birchwoodfurniture.ca/wp-content/uploads/2020/03/livingroom.jpg" />
          <div className="text-left ml-3">
            <h1 className="text-3xl text-[#547e7e] font-semibold mb-1 underline underline-offset-1 ">
              LIVING ROOM
            </h1>
            <p className="py-6 leading-10 text-xl">
              Comfort knows no bounds: relax on your made-to-order chaise
              lounge, or cuddle up to long-lasting relaxation on your customized
              sofa. You will find it in our showroom.
            </p>
            <Button>
              KNOW DETAILS
            </Button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-[#f4f4f4]">
        <div className="hero-content flex-col lg:flex-row">
         
          <div className="text-left ml-3">
            <h1 className="text-3xl text-[#547e7e] font-semibold mb-1 underline underline-offset-1  ">
              DINNING ROOM
            </h1>
            <p className="py-6 leading-10 text-xl">
              Comfort knows no bounds: relax on your made-to-order chaise
              lounge, or cuddle up to long-lasting relaxation on your customized
              sofa. You will find it in our showroom.
            </p>
            <Button>
              KNOW DETAILS
            </Button>
          </div>
          <img src="	https://birchwoodfurniture.ca/wp-content/uploads/2020/03/diningroom.jpg" />
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="	https://birchwoodfurniture.ca/wp-content/uploads/2020/03/bedroom.jpg" />
          <div className="text-left ml-3">
            <h1 className="text-3xl text-[#547e7e] font-semibold mb-1 underline underline-offset-1  ">
              BED ROOM
            </h1>
            <p className="py-6 leading-10 text-xl">
              Comfort knows no bounds: relax on your made-to-order chaise
              lounge, or cuddle up to long-lasting relaxation on your customized
              sofa. You will find it in our showroom.
            </p>
            <Button>
              KNOW DETAILS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
