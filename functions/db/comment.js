const _ = require('lodash');
const convertSnakeToCamel = require('../lib/converSnakeToCamel');

const addComment = async (client, userId, articleId, content) => {
  const { rows } = await client.query(
    `
    INSERT INTO comment
    (user_id, article_id, content)
    VALUES
    ($1, $2, $3)
    RETURNING *
  `,
    [userId, articleId, content],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { addComment };
