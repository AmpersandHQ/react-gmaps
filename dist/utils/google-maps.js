'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  callbacks: [],

  appended: false,

  load: function load(params, callback) {
    var index = this.callbacks.push(callback);
    if (googleMapsExists()) {
      setTimeout(this.fireCallbacks.bind(this));
    } else {
      if (!this.appended) {
        window.mapsCallback = this.mapsCallback.bind(this);
        this.appendScript(params);
      }
    }
    return index;
  },
  getSrc: function getSrc(params) {
    var src = 'https://maps.googleapis.com/maps/api/js';
    src += '?callback=mapsCallback&';
    src += _querystring2.default.stringify(params);
    return src;
  },
  appendScript: function appendScript(params) {
    var src = this.getSrc(params);
    var script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
    this.appended = true;
  },
  mapsCallback: function mapsCallback() {
    window.mapsCallback = undefined;
    this.fireCallbacks();
  },
  fireCallbacks: function fireCallbacks() {
    this.callbacks.forEach(function (callback) {
      return callback();
    });
    this.callbacks = [];
  },
  removeCallback: function removeCallback(index) {
    this.callbacks.splice(index - 1, 1);
  }
};


var googleMapsExists = function googleMapsExists() {
  return _typeof(window.google) === 'object' && _typeof(window.google.maps) === 'object';
};