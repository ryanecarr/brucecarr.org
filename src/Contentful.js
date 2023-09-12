const client = require('contentful').createClient({
  space: 'htrytgjtzwgv',
  accessToken: 'CdGL45BfQDm1u7IihdMRxXi9AQIJRs6N80U8Fc5tYVk',
});

const getSculptures = () =>
  client.getEntries().then((response) => response.items);

export { getSculptures };
