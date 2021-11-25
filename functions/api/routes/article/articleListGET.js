const functions = require('firebase-functions');
const { success, fail } = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { articleDB } = require('../../../db');

module.exports = async (req, res) => {
  let client;
  try {
    client = await db.connect(req);
    const articles = await articleDB.getArticleList(client);
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.READ_ALL_ARTICLES_SUCCESS, articles));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
