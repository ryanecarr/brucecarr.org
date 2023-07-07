import React from 'react';
import art01 from '../../images/art01.jpg';
import art02 from '../../images/art02.jpg';
import art03 from '../../images/art03.jpg';
import art04 from '../../images/art04.jpg';
import art05 from '../../images/art05.jpg';
import art06 from '../../images/art06.jpg';
import art07 from '../../images/horse2.jpg';
import art08 from '../../images/art08.jpg';
import art09 from '../../images/art09.jpg';
import art10 from '../../images/art10.jpg';
import art11 from '../../images/art11.jpg';
import art12 from '../../images/newhorse2.jpeg';
import art13 from '../../images/IMG_20230626_163804.jpg';
import art14 from '../../images/IMG_20230626_163838.jpg';
import art15 from '../../images/IMG_20230626_163846.jpg';
import art16 from '../../images/IMG_20230703_164958.jpg';

const Gallery = () => {
  return (
    <div className='container-fluid mt-3'>
      <div className='row'>
        <div className='col-lg-4 col-md-12 mb-4'>
          <img src={art12} className='img-fluid mb-4' alt='' />
          <img src={art02} className='img-fluid mb-4' alt='' />
          <img
            src={art01}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.3s'
          />
          <img
            src={art09}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.5s'
          />
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <img
            src={art03}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.1s'
          />
          <img
            src={art05}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.4s'
          />
          <img
            src={art07}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.2s'
          />
          <img
            src={art10}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.2s'
          />
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <img
            src={art06}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.2s'
          />
          <img
            src={art04}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.5s'
          />
          <img
            src={art08}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.2s'
          />
          <img
            src={art11}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.5s'
          />
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <img
            src={art14}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.2s'
          />
          <img
            src={art15}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.5s'
          />
          <img
            src={art13}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.2s'
          />
          <img
            src={art16}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.5s'
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
