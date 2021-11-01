import assert from 'node:assert'
import test from 'tape'
import {htmlDangerousEncodings} from './index.js'

test('htmlDangerousEncodings', function (t) {
  t.ok(Array.isArray(htmlDangerousEncodings), 'should be an `array`')

  t.doesNotThrow(function () {
    let index = -1

    while (++index < htmlDangerousEncodings.length) {
      assert.equal(
        typeof htmlDangerousEncodings[index],
        'string',
        '`' + htmlDangerousEncodings[index] + '`'
      )
    }
  }, 'should be all `string`s')

  t.end()
})
