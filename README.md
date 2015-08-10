# object-except [![Build Status](https://secure.travis-ci.org/frozzare/object-except.png?branch=master)](http://travis-ci.org/frozzare/object-except)

Remove specified properties from the object and return it.

## Install

```
$ npm install --save object-except
```

## Example

```javascript
var objectExcept = require('object-except');
var obj = {
	bar: 'foo',
	foo: {
		bar: 'foo'
	},
	foobar: 'foobar'
};

console.log(objectExcept(obj, ['bar', 'foo.bar']));
// { foobar: 'foobar' }
```

## License

MIT © [Fredrik Forsmo](https://github.com/frozzare)
