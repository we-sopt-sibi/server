const _ = require('lodash');
const convertSnakeToCamel = require('../lib/converSnakeToCamel');

const createLike = async (client, userId, articleId) => {
    const {rows:articleRows} = await client.query(
        `
        UPDATE "article" a
        SET is_like = TRUE
        WHERE id=$1
        RETURNING *
        `,
        [articleId]
    );

    const {rows} = await client.query(
        `
        INSERT INTO "like" (user_id, article_id)
        VALUES ($1, $2)
        RETURNING *
        `,
        [userId, articleId]
    );


    
    return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = {createLike,};