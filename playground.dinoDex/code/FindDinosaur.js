exports.tests = []
exports.preconditions = []
const allData = require("./lib/dinosaur");
exports.function = function(dinoName, fact, trivia, period, species, height, weight, location) {
  var records = allData
  if (dinoName) {
    records = records.filter(record => record.dinoName.toLowerCase().indexOf(dinoName.toLowerCase()) >= 0)
  }
  if (fact) {
    records = records.filter(record => record.fact.toLowerCase().indexOf(fact.toLowerCase()) >= 0)
  }
  if (trivia) {
    records = records.filter(record => record.trivia.toLowerCase().indexOf(trivia.toLowerCase()) >= 0)
  }
  if (period) {
    records = records.filter(record => record.period.toLowerCase().indexOf(trivia.toLowerCase()) >= 0)
  }
  if (species) {
    records = records.filter(record => record.species.toLowerCase().indexOf(trivia.toLowerCase()) >= 0)
  }
  if (height) {
    records = records.filter(record => record.height.toLowerCase().indexOf(trivia.toLowerCase()) >= 0)
  }
  if (weight) {
    records = records.filter(record => record.weight.toLowerCase().indexOf(trivia.toLowerCase()) >= 0)
  }
  if (location) {
    records = records.filter(record => record.location.toLowerCase().indexOf(trivia.toLowerCase()) >= 0)
  }
  return records
}