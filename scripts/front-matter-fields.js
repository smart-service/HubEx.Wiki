const matter = require('gray-matter');

const REQUIRED_FIELDS = ['title', 'description', 'category'];

function missingFields(data) {
  return REQUIRED_FIELDS.filter((field) => {
    const value = data[field];
    return value === undefined || value === null || String(value).trim() === '';
  });
}

// Парсит front matter из уже прочитанного текста файла (без обращения к fs),
// чтобы одну и ту же логику могли переиспользовать validate-front-matter.js
// и будущие audit/backfill скрипты.
// При синтаксически некорректном YAML (например, неэкранированное ":" внутри
// значения) gray-matter/js-yaml бросают исключение — здесь оно перехватывается
// и превращается в предсказуемый результат вместо падения вызывающего кода.
function safeParse(raw) {
  try {
    const { data } = matter(raw);
    return { data, error: null };
  } catch (e) {
    return { data: null, error: e.reason || e.message };
  }
}

module.exports = { REQUIRED_FIELDS, missingFields, safeParse };
