const _ = require('lodash');
const convertSnakeToCamel = require('../lib/converSnakeToCamel');

const getArticleList = async (client) => {
  const { rows } = await client.query(`
    SELECT * FROM "article" a
    WHERE is_deleted = FALSE
  `);
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getArticleList };
