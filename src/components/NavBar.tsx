import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <img className="fixed w-1/12 h-auto ml-16 top-0"alt="Leap"src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/y4ciujpcknwqxtinbeyg"></img>
    
    <div className="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 flex items-center bg-white/75 backdrop-blur-lg rounded-full border border-neutral-200/50 shadow-sm gap-6">
      
      <Link to="/">
        <button>Blog</button>
      </Link>
      <Link to="/services">
        <button>Services</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
    </div>
  );
}