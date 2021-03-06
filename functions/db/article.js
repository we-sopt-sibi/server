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

const getArticleById = async (client, articleId) => {
    const {rows:articleRows} = await client.query(
        `
        SELECT * FROM "article" a
        WHERE id = $1
        AND is_deleted = FALSE
        `,
        [articleId]
    );

    let updated = String(articleRows[0].updated_at);
    let updated_hour = (new Date(updated).getHours() + 9) % 24;
    
    const curhour = new Date().getHours();
    
    if (curhour < updated_hour) {
        updated_hour = null; 
    } else {
        updated_hour = curhour - updated_hour;
    };
    
    articleRows[0].hour = updated_hour;
    articleRows[0].created_at = dayjs(articleRows[0].created_at).format('MMM DD.YYYY');
    articleRows[0].updated_at = dayjs(articleRows[0].created_at).format('MMM DD.YYYY');

    const { rows:userRows } = await client.query(
        `
        SELECT name FROM "user" u
        WHERE id = $1
        AND is_deleted = FALSE
        `,
        [articleRows[0].writer]
    );
    
    const {rows:comments} = await client.query(
        `
        SELECT * FROM "comment" c
        WHERE article_id = $1
        `,
        [articleId]
    );

    for (let i = 0; i < comments.length; i++) {
        const {rows:commentedUserRows} = await client.query(
            `
            SELECT id, name FROM "user"
            WHERE id = $1
            `,
            [comments[i]['user_id']]
        );
        
        comments[i].user = convertSnakeToCamel.keysToCamel(commentedUserRows);
    };
    const name = userRows[0].name;
    
    articleRows[0].writer = name;
    
    const commentNumber = comments.length;
    const rows = {...articleRows[0], commentNumber, comments:convertSnakeToCamel.keysToCamel(comments)};

    return convertSnakeToCamel.keysToCamel(rows);
}

module.exports = { getArticleList, getArticleById };