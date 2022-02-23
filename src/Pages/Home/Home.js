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
              className='img-fluid mb-3 rounded-circle img-thumbnail profile'
            />
          </div>
          <div className='col-sm-12 col-lg-6'>
            <div className='text-white px-4 pt-4 pb-5 rounded home-about-box'>
              <h1 className='display-1 fw-bolder hello text-white'>Hello</h1>
              <p className='fw-bold lead mb-2'>A Bit About Me</p>
              <p className='lh-lg'>
                I am a self taught sculptor who creates objects for you to fall
                in love with.
                <br />
                <br />I attempt to create a connection and appreciation for
                Mother Nature's ability to emotionally nourish our souls and
                with the belief that we are all connected.
                <br />
                <br />
                The materials on their own are insignificant, but when
                connected, come together to tell a story waiting to be told.
                <br />
                <br />
                After having work in art galleries/exhibitions in Florida and
                Colorado, my work is now exclusively at Mary Leslie Art Studio &
                Gallery, Salida Co.
                <br />
                <br />
                Thank you for your interest,
                <br />
                <br />
                We are all connected
              </p>
{/*               <a
                href='https://marylesliestudio.com/'
                target='_blank'
                rel='noreferrer'
                className='text-white d-block'
              >
                marylesliestudio.com
              </a> */}
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
