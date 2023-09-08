import React, { useState } from 'react';
import gallery from '../../Pages/Gallery/GalleryData';
import Art from '../../Components/Art';

const Gallery = () => {
  const [artGallery, setArtGallery] = useState(gallery);
  const [displaying, setDisplaying] = useState('Entire Gallery');

  const filterGallery = (event) => {
    let filtered;
    const { selectedIndex, value } = event.target;
    const displaying = event.target[selectedIndex].getAttribute('displaying');

    if (selectedIndex === 0) {
      filtered = gallery;
    } else {
      filtered = gallery.filter((el) => el.type === value);
    }
    setArtGallery(filtered);
    setDisplaying(displaying);
  };

  return (
    <div className='container px-4 py-4'>
      <div className='row justify-content-left mb-4'>
        <div className='col col-md-3 col-lg-3'>
          <div className='form-group'>
            <label for='formControlSelect' className='mb-2'>Filter by category</label>
            <select
              className='form-control'
              id='formControlSelect'
              onChange={filterGallery}
            >
              <option displaying='Entire Gallery' value='all'>
                All
              </option>
              <option displaying='Large Horses' value='large'>
                Large Horses
              </option>
              <option displaying='Small Horses' value='small'>
                Small Horses
              </option>
              <option displaying='Architectural Sculptures' value='sculpture'>
                Architectural Sculptures
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3>{displaying}</h3>
        </div>
      </div>
      <div className='row g-4 py-3 row-cols-1 row-cols-md-2 row-cols-lg-3'>
        {artGallery.map((a) => (
          <Art
            key={a.name}
            name={a.name}
            status={a.status}
            desc={a.description}
            price={a.price}
            image={a.image}
            category={a.category}
          />
        ))}
      </div>
    </div>
    /*
    <div className='container-fluid mt-3'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 mb-4'>
          <img src={art16} className='img-fluid mb-4' alt='' />
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
        <div className='col-lg-3 col-md-6 mb-4'>
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
        <div className='col-lg-3 col-md-6 mb-4'>
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
        <div className='col-lg-3 col-md-6 mb-4'>
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
            src={art12}
            className='img-fluid mb-4'
            alt=''
            data-wow-delay='0.5s'
          />
        </div>
      </div>
    </div>
    */
  );
};

export default Gallery;
