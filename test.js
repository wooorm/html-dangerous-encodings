/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module html-dangerous-encodings
 * @fileoverview Test suite for `html-dangerous-encodings`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var htmlDangerousEncodings = require('./index.js');

/*
 * Tests.
 */

test('htmlDangerousEncodings', function (t) {
    t.ok(
        Array.isArray(htmlDangerousEncodings),
        'should be an `array`'
    );

    htmlDangerousEncodings.forEach(function (encoding) {
        t.equal(
            typeof encoding,
            'string',
            '`' + encoding + '` should be a string'
        );
    });

    t.end();
});
