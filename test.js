import test from 'ava';
import assert from './dist';

test('assert.type throws an error if a types do not match', t => {
  const str = 'woo';
  t.throws(assert.type.bind(this, str, 'boolean'));
});

test('assert.type does not throw an error is type matches', t => {
  const str = 'woo';
  t.notThrows(assert.type.bind(this, str, 'string'));
});
