const _ = require('lodash');
const dayjs = require('dayjs');
const convertSnakeToCamel = require('../lib/converSnakeToCamel');

const getArticleList = async (client) => {
  let newRows = [];
  const { rows } = await client.query(`
    SELECT * FROM "article" a
    WHERE is_deleted = FALSE
  `);

  for (let r of rows) {
    const createdDate = dayjs(r.updated_at).format('MMM DD.YYYY');
    const updatedDate = dayjs(r.updated_at).format('MMM DD.YYYY');
    const { rowCount } = await client.query(
      `
      SELECT * FROM "comment" c
      WHERE article_id = $1
      `,
      [r.id],
    );
    const { rows } = await client.query(
      `
      SELECT name FROM "user" u
      WHERE id = $1
    `,
      [r.writer],
    );
    r = { ...r, commentNumber: rowCount, writerName: rows[0].name, created_at: createdDate, updated_at: updatedDate };
    newRows.push(r);
  }

  return convertSnakeToCamel.keysToCamel(newRows);
};

module.exports = { getArticleList };
