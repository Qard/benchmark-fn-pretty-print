'use strict'

var tap = require('tap')
var pretty = require('./')

tap.test('it works', function (t) {
  var task = {
    name: 'test',
    iterations: 1234,
    time: {
      seconds: 0.1234
    }
  }

  var expected = [
    '┌───────────┬────────────────┐',
    '│ Benchmark │ Ops per second │',
    '├───────────┼────────────────┤',
    '│ test      │    10000 ops/s │',
    '└───────────┴────────────────┘',
    ''
  ].join('\n')

  t.equal(pretty([task]), expected, 'list form works')
  t.equal(pretty(task), expected, 'single item form works')
  t.end()
})
