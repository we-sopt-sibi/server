const express = require('express');
const router = express.Router();

router.use('/article', require('./article'));
router.use('/like', require('./like'));
module.exports = router;