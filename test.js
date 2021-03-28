'use strict'

var assert = require('assert')
var test = require('tape')
var htmlDangerousEncodings = require('.')

test('htmlDangerousEncodings', function (t) {
  t.ok(Array.isArray(htmlDangerousEncodings), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < htmlDangerousEncodings.length) {
      assert(
        typeof htmlDangerousEncodings[index],
        'string',
        '`' + htmlDangerousEncodings[index] + '`'
      )
    }
  }, 'should be all `string`s')

  t.end()
})
