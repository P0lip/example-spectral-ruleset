'use strict';

module.exports = function (targetVal, { min }) {
  if (typeof targetVal !== 'number') {
    return [
      {
        message: 'Value is not a number.',
      },
    ];
  }

  if (targetVal < min) {
    return [
      {
        message: `Value is lower than ${min}`,
      },
    ];
  }
}
