const { Router } = require('express');
const { getAllBreed, addBreed, getAllById } = require('../Controllers/breed');


const router = Router();

router.post('/', addBreed);// CREA RAZA

router.get('/', getAllBreed); // VER TODAS LAS RAZAS


router.get('/:id',  getAllById); //VER TODAS LAS RAZAS POR EL ID





module.exports = router;