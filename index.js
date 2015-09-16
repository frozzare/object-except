'use strict';

/**
 * Require modules.
 */

var isObject = require('is-object');
var clone = require('clone');

/**
 * Pick values from object except the given keys.
 *
 * @param {object} obj
 * @param {array|string}
 *
 * @return {object}
 */

module.exports = function except(obj, keys) {
  if (!isObject(obj)) {
    throw new Error('`obj` should be object');
  }

  if (typeof keys === 'string') {
    keys = [keys];
  }

  if (keys instanceof Array === false) {
    throw new Error('`keys` should be array');
  }

  var result = clone(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var parts = keys[i].split('.');
    var first = parts.shift();
    var value = result[first];

    if (isObject(value) && parts.length > 0) {
      except(result[first], parts);
      if (isObject(result[first]) && !Object.keys(result[first]).length) {
        delete result[first];
      }
    } else {
      delete result[first];
    }
  }

  return result;
};
