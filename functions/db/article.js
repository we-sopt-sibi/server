const _ = require('lodash');
const convertSnakeToCamel = require('../lib/converSnakeToCamel');

const getArticleList = async (client) => {
  let newRows = [];
  const { rows } = await client.query(`
    SELECT * FROM "article" a
    WHERE is_deleted = FALSE
  `);

  for (let r of rows) {
    const { rowCount } = await client.query(
      `
      SELECT * FROM "comment" c
      WHERE article_id = $1
      `,
      [r.id],
    );
    r = { ...r, comment_number: rowCount };
    newRows.push(r);
  }

  return convertSnakeToCamel.keysToCamel(newRows);
};

module.exports = { getArticleList };
