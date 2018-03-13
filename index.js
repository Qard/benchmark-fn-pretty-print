'use strict'

var table = require('table')

function resultToRow (result) {
  var seconds = result.time.seconds
  return [
    result.name,
    Math.floor(result.iterations / seconds) + ' ops/s'
  ]
}

module.exports = function benchListPrettyPrint (results) {
  if (!Array.isArray(results)) {
    results = [ results ]
  }
  var sections = results.map(resultToRow)
  sections.unshift([
    'Benchmark',
    'Ops per second'
  ])

  return table.table(sections, {
    border: table.getBorderCharacters('norc'),
    columns: {
      1: {
        alignment: 'right'
      }
    }
  })
}
