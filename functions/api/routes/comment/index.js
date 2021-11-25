const express = require('express');
const router = express.Router();

router.post('/', require('./commentPOST'));

module.exports = router;
