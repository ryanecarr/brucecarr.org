const client = require('contentful').createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
});

const getSculptures = () =>
  client.getEntries().then((response) => response.items);

export { getSculptures };
