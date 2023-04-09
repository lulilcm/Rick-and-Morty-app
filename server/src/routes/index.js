const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require('../controllers/getCharDetail');
const login = require("../controllers/login");
const getFav = require('../controllers/handleFavorites');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const postUser = require("../controllers/postUser");

const router = Router();

router.post('/login', postUser);
router.get('/login', login);

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.get('/getFav', getFav);
router.post('/postFav', postFav);
router.delete('/deleteFav/:id', deleteFav);

module.exports = router;