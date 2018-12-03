const rp = require('request-promise');
const urls = require('../googleBooksConfig');

const booksController = ((req, res, next) => {
  const options = {
    uri: urls.searchByVolume,
    qs: {
      q: req.query.volume,
    },
  };
  rp(options)
  .then((response) => {
    res.json(JSON.parse(response));
  })
  .catch((err) => {
    res.json({ err: err.body });
  });
  // const jsonQueryString = req.query;
  // // Filter books using jsonQueryString
  // res.json(books);
  // books.search('Professional Javascript for Web Developers', (err, result) => {
  //   if(!err) {
  //     res.json(result);
  //   } else {
  //     res.json(err);
  //   }
  // });
});

module.exports = booksController;