import assert from 'node:assert/strict'
import test from 'node:test'
import {htmlDangerousEncodings} from './index.js'

test('htmlDangerousEncodings', function () {
  assert.ok(Array.isArray(htmlDangerousEncodings), 'should be an `array`')

  let index = -1

  while (++index < htmlDangerousEncodings.length) {
    assert.equal(
      typeof htmlDangerousEncodings[index],
      'string',
      '`' + htmlDangerousEncodings[index] + '`'
    )
  }
})
