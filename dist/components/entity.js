'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _listener = require('../mixins/listener');

var _listener2 = _interopRequireDefault(_listener);

var _compareProps = require('../utils/compare-props');

var _compareProps2 = _interopRequireDefault(_compareProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (name, latLngProp, events) {
  return (0, _createReactClass2.default)({

    mixins: [_listener2.default],

    entity: null,

    componentDidMount: function componentDidMount() {
      var options = this.getOptions(this.props);
      this.entity = new google.maps[name](options);
      this.addListeners(this.entity, events);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (!(0, _compareProps2.default)(this.props, nextProps)) {
        var options = this.getOptions(nextProps);
        this.entity.setOptions(options);
      }
    },
    componentWillUnmount: function componentWillUnmount() {
      this.entity.setMap(null);
      this.removeListeners();
      this.entity = null;
    },
    getEntity: function getEntity() {
      return this.entity;
    },
    getOptions: function getOptions(props) {
      return _extends({}, props, _defineProperty({}, latLngProp, new google.maps.LatLng(props.lat, props.lng)));
    },
    render: function render() {
      return null;
    }
  });
};