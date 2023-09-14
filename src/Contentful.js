const client = require('contentful').createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN}`,
});

const getSculptures = () =>
  client
    .getEntries({ content_type: 'sculpture' })
    .then((response) => response.items);

const getAbout = () =>
  client.getEntry('30uRTYwhsKtAi9hi14C2KT').then((response) => response);

export { getSculptures, getAbout };
