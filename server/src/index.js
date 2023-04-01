require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');


const server = express();
const PORT = process.env.PORT || 3001; // buena práctica

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use((req, res, next) => {
  const begin = '/rickandmorty';
  const end = req.url;

  begin.concat(end);
  next();
});

server.use(express.json());

server.use(morgan('dev'));

server.use(cors());

server.use(router);

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

