const axios = require('axios');

module.exports = {
  async bodyTag() {
    const {data} = await axios .get(`https://www.google.com/`)
    return (data)
  }
};