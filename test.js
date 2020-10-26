'use strict'

var assert = require('assert')
var test = require('tape')
var htmlDangerousEncodings = require('.')

test('htmlDangerousEncodings', function (t) {
  t.ok(Array.isArray(htmlDangerousEncodings), 'should be an `array`')

  t.doesNotThrow(function () {
    htmlDangerousEncodings.forEach(function (encoding) {
      assert(typeof encoding, 'string', '`' + encoding + '`')
    })
  }, 'should be all `string`s')

  t.end()
})
