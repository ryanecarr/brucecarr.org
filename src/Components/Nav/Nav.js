import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <div className='py-3'>
      <div className='container'>
        <div className='d-flex flex-column justify-content-center align-items-center pb-3'>
          <h1 className='display-5 mb-0'>Bruce Carr</h1>
          <p className='fw-lighter fs-4 mb-4'>- Sculptor -</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <Link
            to='/'
            style={{ textDecoration: 'none', color: 'black' }}
            className={`px-3 ${
              location.pathname === '/' && 'text-decoration-underline'
            }`}
          >
            home
          </Link>
          <div className='vr'></div>
          <Link
            to='/about'
            style={{ textDecoration: 'none', color: 'black' }}
            className={`px-3 ${
              location.pathname === '/about' && 'text-decoration-underline'
            }`}
          >
            about
          </Link>
          <div className='vr'></div>
          <Link
            to='/gallery'
            style={{ textDecoration: 'none', color: 'black' }}
            className={`px-3 ${
              location.pathname === '/gallery' && 'text-decoration-underline'
            }`}
          >
            gallery
          </Link>
          <div className='vr'></div>
          <Link
            to='/contact'
            style={{ textDecoration: 'none', color: 'black' }}
            className={`px-3 ${
              location.pathname === '/contact' && 'text-decoration-underline'
            }`}
          >
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
