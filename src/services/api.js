const Api = {};
const endpoint = 'http://localhost:3000/api/v1';

Api.search = query => fetch(`${endpoint}/search.json?query=${query}`)
  .then(response => response.json());

export default Api;
