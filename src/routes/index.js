const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getCountries = require('./getCountries.js')
const getCountryId = require('./getCountryId.js')
const postActivity = require('./postActivity.js')
const getActivities = require('./getActivities.js')
const { getApiInfo } = require('../getApiInfo/getApiInfo')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', getCountryId)
router.use('/countries', getCountries)
router.use('/activity', postActivity)
router.use('/activity', getActivities)

getApiInfo()
module.exports = router;