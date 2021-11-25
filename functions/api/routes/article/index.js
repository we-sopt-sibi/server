const express = require('express');
const router = express.Router();

router.get('/list', require('./articleListGET'));

module.exports = router;
