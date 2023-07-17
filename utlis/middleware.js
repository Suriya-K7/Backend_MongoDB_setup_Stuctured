const { log } = require("./logger");

const requestMidlleware = (req, res, next) => {
  log(req.method);
  log(req.path);
  log(req.body);
  next();
};

const unknowEndpointMidlleware = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

module.exports = {
  requestMidlleware,
  unknowEndpointMidlleware,
};
