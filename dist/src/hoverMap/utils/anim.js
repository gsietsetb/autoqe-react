'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (deltaT, from, to, easeName, callback) {
  var dtStart = new Date().getTime();
  var easingFn = easing[easeName];
  var canRun = true;

  var runner = function runner() {
    var t = Math.min((new Date().getTime() - dtStart) / deltaT, 1);
    var x = easingFn(t, from, to);
    if (canRun && callback(x, t)) {
      if (t < 1) {
        if (raf) raf(runner);
      }
    }
  };

  if (raf) {
    raf(runner);
  } else {
    runner();
  }

  return function () {
    canRun = false;
  };
};

var raf = typeof window !== 'undefined' && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (cb) {
  return window.setTimeout(cb, 1000 / 60);
});

var easing = require('utils/easing');
//# sourceMappingURL=anim.js.map