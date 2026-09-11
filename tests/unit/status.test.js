'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { isHealthyStatus } = require('../../src/status');
test('2xx is healthy', () => {
  assert.equal(isHealthyStatus(200), true);
  assert.equal(isHealthyStatus(503), false);
});
