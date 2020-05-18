const mocha = require('mocha');
const assert = require('assert');
const describe = mocha.describe;
const it = mocha.it;

describe('Simple Math Test', () => {
  it('should return 2', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should return 9', () => {
    assert.strictEqual(3 * 3, 9);
  });
});
