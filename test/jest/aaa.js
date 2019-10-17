const { aaa } = require('../../src/aaa');

test('test', () => {
  const result = aaa();
  expect(result).toBe('this code should be tested by jest');
});
