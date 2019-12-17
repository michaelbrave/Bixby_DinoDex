exports.tests = []
exports.preconditions = []
const allData = require("./lib/dinosaur");
exports.function = function(nAME, fACT, tRIVIA, period, genus, species, height, weight, location) {
  var records = allData
  if (nAME) {
    records = records.filter(record => record.nAME.toLowerCase().indexOf(nAME.toLowerCase()) >= 0)
  }
  if (fACT) {
    records = records.filter(record => record.fACT.toLowerCase().indexOf(fACT.toLowerCase()) >= 0)
  }
  if (tRIVIA) {
    records = records.filter(record => record.tRIVIA.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  if (period) {
    records = records.filter(record => record.period.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  if (genus) {
    records = records.filter(record => record.genus.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  if (species) {
    records = records.filter(record => record.species.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  if (height) {
    records = records.filter(record => record.height.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  if (weight) {
    records = records.filter(record => record.weight.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  if (location) {
    records = records.filter(record => record.location.toLowerCase().indexOf(tRIVIA.toLowerCase()) >= 0)
  }
  return records
}