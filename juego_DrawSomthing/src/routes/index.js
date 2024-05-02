const { Router } = require('express');
const router = Router();

const { juego, juego_2 } = require('../controllers/index.controller')

router.post('/juego', juego)
router.post('/juego_2', juego_2)

module.exports  = router;
