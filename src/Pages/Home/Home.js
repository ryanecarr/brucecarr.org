import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from '../../Data/seo';

const Home = () => {
  const currentSEO = SEO.find((item) => item.page === 'home');

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Helmet>
      <div className='bg-image'></div>
    </>
  );
};

export default Home;
