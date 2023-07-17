require("dotenv").config();

const URL = process.env.ATLAS_URI;
const PORT = process.env.PORT;

module.exports = {
  URL,
  PORT,
};
