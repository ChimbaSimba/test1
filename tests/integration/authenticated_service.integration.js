'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

test('trusted runner can authenticate to the service health endpoint', async () => {
  const baseUrl = String(process.env.SERVICE_BASE_URL || '').trim();
  const token = String(process.env.SERVICE_API_TOKEN || '').trim();

  if (!baseUrl) throw new Error('SERVICE_BASE_URL is required');
  if (!token) throw new Error('SERVICE_API_TOKEN is required');

  const response = await fetch(new URL('/health', baseUrl), {
    headers: { authorization: `Bearer ${token}` }
  });

  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.ok, true);
});
