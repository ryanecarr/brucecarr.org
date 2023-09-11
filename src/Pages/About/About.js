import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../../images/b1.jpg';

const About = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-sm-12 col-lg-4 text-center'>
          <img
            src={profilePhoto}
            alt='Bruce Carr'
            className='img-fluid mb-2 img-thumbnail profile shadow-sm'
          />
        </div>
        <div className='col-sm-12 col-lg-8'>
          <div className='pb-5 home-about-box'>
            <p className='fw-bold lead mb-2'>A Bit About Me</p>
            <p class='lh-base'>
              I am a sculptor who creates objects for you to fall in love with.
            </p>
            <p class='lh-base'>
              I attempt to create a connection and appreciation for Mother
              Nature's ability to emotionally nourish our souls and with the
              belief that we are all connected.
            </p>
            <p class='lh-base'>
              The materials on their own are insignificant, but when connected,
              come together to tell a story waiting to be told.
            </p>
            <p class='lh-base'>
              After having work in art galleries/exhibitions in Florida and
              Colorado, my work is now exclusively at Mary Leslie Art Studio &
              Gallery, Salida Co.
            </p>
            <p className='lh-base'>
              <a
                href='https://marylesliestudio.com/'
                target='_blank'
                rel='noreferrer'
                className='d-block'
              >
                marylesliestudio.com
              </a>
            </p>
            <div className='d-flex mt-5 mx-auto'>
              <Link
                to='/gallery'
                className='flex-fill mx-2'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <button type='button' className='btn btn-dark w-100'>
                  My gallery
                </button>
              </Link>
              <Link
                to='/contact'
                className='flex-fill mx-2'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <button type='button' className='btn btn-dark w-100'>
                  Contact me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
