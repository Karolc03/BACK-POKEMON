require("dotenv").config();

const config = {}
config.PORT = process.env.PORT || 5432

module.exports = config;