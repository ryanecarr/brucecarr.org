import React from 'react';

const Art = ({ name, status, desc, price, image, category }) => {
  return (
    <div className='feature col'>
      <div className='card shadow-sm mb-3'>
        <img className='card-img-top' src={image} alt={name} />
        <div className='card-body'>
          <strong className='text-primary'>{category}</strong>
          <h4 className='card-title mt-2'>{name}</h4>
          {/*           <h6 className='card-subtitle mb-2 text-muted'>{status}</h6> */}
          <p className='card-text'>{desc}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <strong className='text-muted'>{status}</strong>
            <strong className='text-muted'>{price && `$${price}`}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
