const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require('../controllers/getCharDetail');
const login = require("../controllers/login");
const { postFav, deleteFav, getFav } = require("../controllers/handleFavorites");


const router = Router();

router.get('/login', login);

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.get('/getFav', getFav);
router.post('/postFav', postFav);
router.delete('/deleteFav/:id', deleteFav);

module.exports = router;