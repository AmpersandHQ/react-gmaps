'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _circle = require('../events/circle');

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _entity2.default)('Circle', 'center', _circle2.default);