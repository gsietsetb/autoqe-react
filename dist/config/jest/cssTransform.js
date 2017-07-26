'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process: function process() {
    return 'module.exports = {};';
  },
  getCacheKey: function getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  }
};
//# sourceMappingURL=cssTransform.js.map