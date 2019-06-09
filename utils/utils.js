'use strict';

// map all the arguments coming from the query to optimize the sql request
const mapAttributes = (model, { fieldNodes }) => {
  // get the fields of the Model (columns of the table)
  const columns = new Set(Object.keys(model.rawAttributes));
  const requested_attributes = fieldNodes[0].selectionSet.selections.map(({ name: { value } }) => value);
  // filter the attributes against the columns
  return requested_attributes.filter(attribute => columns.has(attribute));
};

module.exports = {
  mapAttributes
};
