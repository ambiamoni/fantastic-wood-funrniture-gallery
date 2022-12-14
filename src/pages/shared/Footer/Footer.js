import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="hero mt-20" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Ko289acalSrEKwYI5sb20u2WQa7KS9L-_0Ug4u2iEmc=")` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <footer className="footer py-20 px-20 text-white mt-4">
        <div >
          <span className="footer-title text-white">Services</span> 
          <Link to="/" className="link link-hover">Branding</Link> 
          <Link to="/" className="link link-hover">Design</Link> 
          <Link to="/" className="link link-hover">Marketing</Link> 
          <Link to="/" className="link link-hover">Advertisement</Link>
        </div> 
        <div>
          <span className="footer-title text-white">Company</span> 
          <Link to="/" className="link link-hover">Jobs</Link> 
          <Link to="/" className="link link-hover">Contact</Link> 
          <Link to="/" className="link link-hover">About us</Link> 
          <Link to="/" className="link link-hover">Press kit</Link>
        </div> 
        <div> 
          <span className="footer-title  text-white">Legal</span> 
          <Link to="/" className="link link-hover">Terms of use</Link> 
          <Link to="/" className="link link-hover">Privacy policy</Link> 
          <Link to="/" className="link link-hover">Cookie policy</Link>
        </div> 
        <div>
          <span className="footer-title text-white">Newsletter</span> 
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="pt-3 pb-3 pr-8 pl-8 bg-[#547e7e] input input-bordered  absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
};

export default Footer;