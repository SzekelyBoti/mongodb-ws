const LanguageModel = require("../model/language.model");


async function getLanguages(orderBy, dir, search) {
  // TASK 1
  // TASK 4
}

async function getLanguageById(langid) {
  // TASK 2
}

async function createLanguage(language) {
  // TASK 3
}

async function updateLanguage(langid, language) {
  // TASK 5
}

async function getLanguagesByMinStarsOrMinDate(stars, date) {
  // TASK 6
}

async function getLanguagesByMaxStarsOrMaxDate(stars, date) {
  // TASK 7
}

module.exports = {
  getLanguages,
  getLanguageById,
  createLanguage,
  updateLanguage,
  getLanguagesByMinStarsOrMinDate,
  getLanguagesByMaxStarsOrMaxDate
};
