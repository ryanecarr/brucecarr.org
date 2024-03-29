import React from 'react';

const Art = ({ title, sold, description, price, image, category, notes }) => {
  const p = price && price.toLocaleString();
  return (
    <div className='feature col'>
      <div className='card shadow-sm mb-3'>
        <img className='card-img-top' src={image} alt={title} />
        <div className='card-body'>
          <strong className='text-muted'>{category}</strong>
          <h4 className='card-title mt-2'>{title}</h4>
          <p className='card-text'>{description}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <span className={`badge p-2 ${sold ? 'bg-warning' : 'bg-success'}`}>
              {sold ? 'SOLD' : 'FOR SALE'}
            </span>
            {price && <div className='fs-6 fw-bolder'>${p}</div>}
          </div>
          {notes && (
            <div className='mt-2'>
              <small className='fst-italic'>{notes}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Art;
