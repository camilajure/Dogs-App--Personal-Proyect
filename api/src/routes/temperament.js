const { Router} = require ('express');const {getAllTemperament} = require('../Controllers/temperament');


const router = Router();

router.use('/', getAllTemperament );// VER TODOS LOS TEMPERAMENTOS


module.exports = router;