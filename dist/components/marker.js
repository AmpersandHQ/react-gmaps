'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _marker = require('../events/marker');

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _entity2.default)('Marker', 'position', _marker2.default);