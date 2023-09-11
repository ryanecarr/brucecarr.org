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
    <div className='container mt-4'>
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
      </div>
    </div>
  );
};

export default Gallery;
