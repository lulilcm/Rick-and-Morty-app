require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const { conn } = require('./DB_connection');


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

/* server.use((req, res, next) => {
  res.send('rickandmorty/'.concat(req.url));
  next();
}); */

server.use(express.json());

server.use(morgan('dev'));

server.use(cors());

server.use(router);

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}).catch((erroor) => console.log(erroor));


