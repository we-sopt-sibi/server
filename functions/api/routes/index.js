const express = require('express');
const router = express.Router();

router.use('/article', require('./article'));
router.use('/comment', require('./comment'));

module.exports = router;