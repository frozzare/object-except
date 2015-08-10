'use strict';

/**
 * Require modules.
 */

var isObject = require('is-object');

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

  for (var i = 0, l = keys.length; i < l; i++) {
    var parts = keys[i].split('.');
    var first = parts.shift();
    var value = obj[first];

    if (isObject(value) && parts.length > 0) {
      except(obj[first], parts);
      if (isObject(obj[first]) && !Object.keys(obj[first]).length) {
        delete obj[first];
      }
    } else {
      delete obj[first];
    }
  }

/*      if (isObject(obj)) {
         if (!Object.keys(obj).length) {
           delete obj[first];
         }
      } else {
        delete obj[first];
      }
    }
  */


  return obj;
};
