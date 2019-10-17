const test = require('ava');
const { bbb } = require('../../src/bbb');

test('test', t => {
  const result = bbb();
  t.is(result, 'this code should be tested by ava');
});
