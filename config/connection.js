const dotenv = require("dotenv")
dotenv.config()

const { connect, connection } = require('mongoose');

connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;