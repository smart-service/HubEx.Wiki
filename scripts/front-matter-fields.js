const REQUIRED_FIELDS = ['title', 'description', 'category'];

function missingFields(data) {
  return REQUIRED_FIELDS.filter((field) => {
    const value = data[field];
    return value === undefined || value === null || String(value).trim() === '';
  });
}

module.exports = { REQUIRED_FIELDS, missingFields };
