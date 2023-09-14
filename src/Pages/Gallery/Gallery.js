import React, { useState, useEffect } from 'react';
import Art from '../../Components/Art';
import useSculptures from '../../Hooks/useSculptures';

const Gallery = () => {
  const [sculptures, isLoading] = useSculptures();
  const [artGallery, setArtGallery] = useState([]);
  const [displaying, setDisplaying] = useState('Entire Gallery');

  const filterGallery = (event) => {
    let filtered;
    const { selectedIndex, value } = event.target;
    const displaying = event.target[selectedIndex].getAttribute('displaying');

    if (selectedIndex === 0) {
      filtered = sculptures;
    } else {
      filtered = sculptures.filter((el) => el.fields.type === value);
    }
    setArtGallery(filtered);
    setDisplaying(displaying);
  };

  useEffect(() => {
    setArtGallery(sculptures);
  }, [sculptures]);

  if (isLoading)
    return (
      <div className='d-flex justify-content-center mx-5 my-5'>
        <div className='spinner-border text-dark' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center mb-4'>
        <div className='col col-md-3 col-lg-3'>
          <div className='form-group'>
            <label htmlFor='formControlSelect' className='mb-2'>
              Filter by category
            </label>
            <select
              className='form-select'
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
              <option
                displaying='Architectural Sculptures'
                value='architectural'
              >
                Architectural Sculptures
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='display-6'>{displaying}</div>
        </div>
      </div>
      {/*       <div className='row g-4 py-3 row-cols-1 row-cols-md-2 row-cols-lg-3'>
        {artGallery.map((a) => (
          <Art
            key={a.uuid}
            name={a.name}
            sold={a.sold}
            desc={a.description}
            price={a.price}
            image={a.image}
            category={a.category}
            notes={a.notes}
          />
        ))}
      </div> */}
      <div className='row g-4 py-3 row-cols-1 row-cols-md-2 row-cols-lg-3'>
        {artGallery.map((sculpture) => (
          <Art
            key={sculpture.fields.title}
            title={sculpture.fields.title}
            sold={sculpture.fields.sold}
            description={sculpture.fields.description}
            price={sculpture.fields.price}
            image={sculpture.fields.image.fields.file.url}
            category={sculpture.fields.category}
            notes={sculpture.fields.notes}
          />
        ))}
      </div>
      <div className='row'>
        <div className='col'>
          <div className='d-flex justify-content-center'>
            <button
              type='button'
              className='btn btn-link'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              back to top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
