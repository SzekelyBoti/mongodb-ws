const LanguageModel = require("../model/language.model");

async function getLanguages(orderBy, dir, search) {
  // TASK 4
  let orderExpression = {};
  let searchExpression = {};

  if (orderBy && dir) {
    orderExpression = { [orderBy]: dir };
  }
  if (search) {
    searchExpression = {
      $or: [
        { name: { $regex: new RegExp(search, "i") } },
        { maintainer: { $regex: new RegExp(search, "i") } },
        { designer: { $regex: new RegExp(search, "i") } },
      ],
    };
  }
  return LanguageModel.find(searchExpression)
    .sort(orderExpression)
    .select({ langid: 1, name: 1, _id: 0 });
  // TASK 1
  // return await LanguageModel.find().select({ langid: 1, name: 1, _id: 0 });
}

async function getLanguageById(langid) {
  // TASK 2

  return await LanguageModel.find({ langid });
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
  getLanguagesByMaxStarsOrMaxDate,
};
