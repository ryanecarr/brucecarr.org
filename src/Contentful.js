const client = require('contentful').createClient({
  space: process.env.prod.CONTENTFUL_SPACE_ID,
  accessToken: process.env.prod.CONTENTFUL_DELIVERY_TOKEN,
});

const getSculptures = () =>
  client.getEntries().then((response) => response.items);

export { getSculptures };
