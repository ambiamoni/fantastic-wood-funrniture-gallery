import React from "react";


const Contact = () => {
  return (
    <div
      className="hero min-h-screen mt-20"
      style={{
        backgroundImage: `url(" https://www.emohdesign.com/image/cache/catalog/Homepage%20sliders/SEN%20walnut%20slider_1500x790-1500x790.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col">
        <h2 className="mt-[50px] mb-5 text-3xl font-semibold">CONTACT US</h2>
      <div className="flex">
     
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
