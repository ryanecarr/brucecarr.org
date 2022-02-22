import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import profilePhoto from '../../images/bruce.jpg';
import parallaxPhoto from '../../images/horse.jpg';

const Home = () => {
  return (
    <Parallax bgImage={parallaxPhoto} strength={100}>
      <div className='container main mt-2'>
        <div className='row p-3'>
          <div className='col-sm-12 col-lg-6 text-center'>
            <img
              src={profilePhoto}
              alt='Bruce Carr'
              className='img-fluid mb-3 rounded-circle img-thumbnail'
            />
          </div>
          <div className='col-sm-12 col-lg-6'>
            <div className='bg-dark text-white px-4 pt-4 pb-5 rounded'>
              <h1 className='display-1 fw-bolder hello text-white'>Hello</h1>
              <h5 className='fw-bold opacity-100'>A Bit About Me</h5>
              <p className='lead opacity-100'>
                I am a self taught sculptor who creates objects for you to fall
                in love with. You'll know it when you feel it. After having work
                in art galleries/exhibitions in Florida and Colorado, my work is
                now exclusively at Mary Leslie Art Studio & Gallery, Salida Co.
              </p>
              <a
                href='https://marylesliestudio.com/'
                target='_blank'
                rel='noreferrer'
                className='text-white d-block'
              >
                marylesliestudio.com
              </a>
              <div className='d-flex mt-5 mx-auto'>
                <Link
                  to='/gallery'
                  className='flex-fill mx-2'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <button type='button' className='btn btn-green w-100'>
                    My gallery
                  </button>
                </Link>
                <Link
                  to='/contact'
                  className='flex-fill mx-2'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <button type='button' className='btn btn-green w-100'>
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Home;
