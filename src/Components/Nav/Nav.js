import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <div className='py-3'>
      <div className='container'>
        <div className='d-flex flex-column justify-content-center align-items-center pb-3'>
          {/* <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> */}
          <h1 className='display-5 mb-0'>Bruce Carr</h1>
          <p className='fw-lighter fs-4 mb-4'>- Sculptor -</p>
          {/*             <span className='fs-2 fw-bold text-uppercase'>Bruce Carr</span>
            <div className='fs-1 mx-1 d-inline'>|</div>
            <span className='fs-3'>Sculptor</span> */}
          {/*    </Link> */}
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
        {/*         <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse fs-5 mt-1' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                Home
              </Link>
            </li>
            <div className='mx-2 d-none d-lg-inline'>|</div>
            <li className='nav-item'>
              <Link
                to='/about'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                About
              </Link>
            </li>
            <div className='mx-2 d-none d-lg-inline'>|</div>
            <li className='nav-item'>
              <Link
                to='/gallery'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Gallery
              </Link>
            </li>
            <div className='mx-2 d-none d-lg-inline'>|</div>
            <li className='nav-item'>
              <Link
                to='/contact'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
