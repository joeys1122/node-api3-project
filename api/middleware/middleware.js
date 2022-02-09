const { getById } = require('../users/users-model');

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`[${Date()}]: ${req.method} request at ${req.url}`);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  getById(req.params.id)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      res.status(404).json({ message: "user not found" });
    })
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}