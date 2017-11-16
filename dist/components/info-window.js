'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _infoWindow = require('../events/info-window');

var _infoWindow2 = _interopRequireDefault(_infoWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _entity2.default)('InfoWindow', 'position', _infoWindow2.default);