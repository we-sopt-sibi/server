const express = require('express');
const router = express.Router();

router.get('/list', require('./articleListGET'));
router.get('/:articleId', require('./articleGET'));
router.post('/:articleId/like', require('./likePOST'));

module.exports = router;

