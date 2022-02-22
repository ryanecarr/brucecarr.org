import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-white px-2 py-3'>
      <div className='container-fluid'>
        <div>
          <span className='fs-2 fw-bold text-white-50 text-uppercase'>
            Bruce Carr
          </span>
          <div className='fs-2 mx-1 d-inline'>|</div>
          <span className='fs-3'>Sculptor</span>
        </div>
        <button
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
        <div className='collapse navbar-collapse fs-5 mt-3' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </li>
            <div className='mx-2 d-none d-lg-inline'>|</div>
            <li className='nav-item'>
              <Link
                to='/gallery'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Gallery
              </Link>
            </li>
            <div className='mx-2 d-none d-lg-inline'>|</div>
            <li className='nav-item'>
              <Link
                to='/contact'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
