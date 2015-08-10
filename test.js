'use strict';

var test         = require('tape');
var objectExcept = require('./');

test('should get property from object', function (t) {
	t.plan(2);

	var obj = {
		foo: 'bar',
		bar: 'foo'
	};

	t.equal(undefined, objectExcept(obj, 'foo').foo);
	t.equal(undefined, objectExcept(obj, ['foo']).foo);
});

test('should get properties from object', function (t) {
	t.plan(4);

	var obj = {
		foo: 'bar',
		bar: 'foo',
		foobar: 2
	};

	var res = objectExcept(obj, ['foo', 'bar']);
	t.equal(undefined, res.bar);
	t.equal(undefined, res.foo);
	t.equal(2, res.foobar);

	var obj = {
		foo: {
			bar: 'foo'
		}
	};

	var res = objectExcept(obj, ['foo.bar']);
	t.equal(0, Object.keys(res).length);
});

test('should throw error with wrong arguments', function (t) {
	t.plan(2);

	try {
		objectExcept(null);
	} catch (e) {
		t.equal('`obj` should be object', e.message);
	}

	try {
		objectExcept({}, null);
	} catch (e) {
		t.equal('`keys` should be array', e.message);
	}
});
