/**
 * @file Defines the queries for the spaces table.
 */

const db = require('../');

const retrieveSpaceById = async (id) => {
  const query = {
    text: 'SELECT * FROM spaces WHERE id = $1',
    values: [id],
  };
  const { rows: spaces } = await db.query(query);
  return spaces[0];
};

module.exports = {
  retrieveSpaceById
}