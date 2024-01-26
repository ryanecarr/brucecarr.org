import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SEO from '../../Data/seo';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const currentSEO = SEO.find((item) => item.page === 'contact');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        name,
        email,
        message,
      }),
    })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setFailure(true);
      })
      .finally(() => {
        setName('');
        setEmail('');
        setMessage('');
      });
  };

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Helmet>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-4'>
            <div
              className={`alert alert-success ${
                success ? 'd-block' : 'd-none'
              }`}
              role='alert'
            >
              Your message was sent successfully!
            </div>
            <div
              className={`alert alert-danger ${failure ? 'd-block' : 'd-none'}`}
              role='alert'
            >
              An error occurred sending your message, please try again.
            </div>
            <form name='brucecarr-contact-form' onSubmit={handleSubmit}>
              <input
                type='hidden'
                name='form-name'
                value='brucecarr-contact-form'
              />
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  *Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label for='email' className='form-label'>
                  *Email Address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='name@example.com'
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label for='message' className='form-label'>
                  *Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  rows='5'
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  className='w-100 btn btn-dark btn-lg mt-3'
                  type='submit'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
