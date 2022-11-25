import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#86b2b2] text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">FANTASTICWOOD <span className="text-sm mt-2 pr-10">FURNITURE GALLERY</span></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal pl-0 pr-5 font-medium">
          <li className="">
            <Link to='/about'>ABOUT US</Link>
          </li>
         
          <li>
            <Link to='/about'>CATALOGUE</Link>
          </li>
          <li>
            <Link to='/about'>INSTOCK</Link>
          </li>
          <li tabIndex={0}>
            <Link to='/products'>
              PRODUCTS
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-base-100 border-solid border-2 divide-y divide-dashed text-black mt-1 text-center">
              <li className="hover:bg-cyan-100 hover:text-white">
                <Link to='/bedroom'>BEDROOM</Link>
              </li>
              <li className="hover:bg-cyan-100 hover:text-white">
                <Link to='/dinning'>DINNING</Link>
              </li>
              <li className="hover:bg-cyan-100 hover:text-white">
                <Link to='/dinning'>FEATURE PIECES</Link>
              </li>
              <li className="hover:bg-cyan-100 hover:text-white">
                <Link to='/dinning'>HOME ENTERTAINMENT</Link>
              </li>
              <li className="hover:bg-cyan-100 hover:text-white">
                <Link to='/dinning'>RESALE PRODUCT</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/login'>LOGIN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
