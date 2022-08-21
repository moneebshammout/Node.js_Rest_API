const notNullSchema = require('./not-null-schema');

module.exports = {
  getSchema: notNullSchema(['page', 'sortBy'], 'query'),
  putSchema: notNullSchema(['id', 'attribute', 'value'], 'body'),
  postSchema: notNullSchema(
    [
      'id',
      'title',
      'overview',
      'popularity',
      'poster_path',
      'release_date',
      'vote_average',
      'createdAt',
      'updatedAt',
    ],
    'body',
  ),
  deleteSchema: notNullSchema(['attribute', 'value'], 'body'),
};
