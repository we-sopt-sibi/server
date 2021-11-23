const _ = require('lodash');
const convertSnakeToCamel = require('../lib/converSnakeToCamel');

const getArticleById = async (client, articleId) => {
    const {rows:articleRows} = await client.query(
        `
        SELECT * FROM "article" a
        WHERE id = $1
        AND is_deleted = FALSE
        `,
        [articleId]
    );

    console.log(articleRows[0].name)

    const { rows:userRows } = await client.query(
        `
        SELECT name FROM "user" u
        WHERE id = $1
        AND is_deleted = FALSE
        `,
        [articleRows[0].writer]
    );
    
    const name = userRows[0].name

    articleRows[0].writer = name
    
    return convertSnakeToCamel.keysToCamel(articleRows[0])
}

module.exports = { getArticleById, }