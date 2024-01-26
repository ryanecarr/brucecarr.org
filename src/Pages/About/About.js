import React from 'react';
import { Link } from 'react-router-dom';
import useAbout from '../../Hooks/useAbout';
import { Helmet } from 'react-helmet';
import SEO from '../../Data/seo';

const About = () => {
  const [about, isLoading] = useAbout();
  const currentSEO = SEO.find((item) => item.page === 'about');

  if (isLoading)
    return (
      <div className='d-flex justify-content-center mx-5 my-5'>
        <div className='spinner-border text-dark' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Helmet>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-12 col-lg-4 text-center'>
            <img
              src={about.fields.image.fields.image.fields.file.url}
              alt={about.fields.image.fields.image.fields.title}
              className='img-fluid mb-2 img-thumbnail profile shadow-sm'
            />
          </div>
          <div className='col-sm-12 col-lg-8'>
            <div className='pb-5 home-about-box'>
              <p className='display-6'>{about.fields.headline}</p>
              <p className='lh-base'>{about.fields.copy}</p>
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
    </>
  );
};

export default About;
