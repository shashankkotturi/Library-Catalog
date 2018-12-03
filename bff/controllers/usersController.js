const usersController = ((req, res, next) => {
  res.json(req.body);
});

module.exports = usersController;