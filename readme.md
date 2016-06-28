## assert [![Build Status](https://travis-ci.org/joegesualdo/assert-js.svg?branch=master)](https://travis-ci.org/joegesualdo/assert-js)
> Explicity set expectations; fail if those expectations are not met.

## Install
```
$ npm install --save @joegesualdo/assert-js
```

## Usage
```javascript
import assert from ('@joegesualdo/assert')

let testStr = 'hello world';
assert.type(testStr, 'boolean');
//=> throws `TypeError`
```

## Test
```
$ npm test
```
## API
### `assert.type(testVar, type)`

| Name      | Type     | Required | Default | Description                             |
|-----------|----------|----------|---------|---------------------------------------- |
| testVar   | `N/A`    |  `yes`   |  `N/A`  | The variable you want to test           |
| type      | `String` |  `yes`   |  `N/A`  | The type the variable should be         |

```javascript
import assert from ('@joegesualdo/assert')

let testStr = 'hello world';
assert.type(testStr, 'boolean');
//=> throws `TypeError`
```

## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
