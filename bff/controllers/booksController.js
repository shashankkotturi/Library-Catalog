const rp = require('request-promise');
const urls = require('../googleBooksConfig/urls');
const credentials = require('../googleBooksConfig/credentials/books-app-credentials.json');

const booksController = ((req, res, next) => {
  const API_KEY = credentials.private_key;
  const options = {
    uri: urls.searchByVolume,
    qs: {
      q: req.query.volume,
      // key: API_KEY
    },
  };
  rp(options)
  .then((response) => {
    res.json({
      [req.query.volume]: JSON.parse(response)
    });
  })
  .catch((err) => {
    res.json({
      [req.query.volume]: {
        err: err.body
      }
    });
  });
});

module.exports = booksController;