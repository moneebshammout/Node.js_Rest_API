const { body, query } = require('express-validator');

/**
 * Create array of validation chain fields.
 *
 * @param {Array.<string>} attributeList
 * @param {string} type Body or query parameters.
 *
 * @return {Array.<import('express-validator').ValidationChain>}
 */
module.exports = (attributeList, type) => {
  const chainType = type === 'body' ? body : query;
  return attributeList.map((attribute) =>
    chainType(attribute).exists({ checkFalsy: true }),
  );
};
