'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resizer = function (_Component) {
    _inherits(Resizer, _Component);

    function Resizer() {
        var _Object$getPrototypeO;

        _classCallCheck(this, Resizer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Resizer)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        return _this;
    }

    _createClass(Resizer, [{
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            this.props.onMouseDown(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var split = _props.split;
            var className = _props.className;

            var classes = ['Resizer', split, className];
            return _react2.default.createElement('span', { className: classes.join(' '), onMouseDown: this.onMouseDown });
        }
    }]);

    return Resizer;
}(_react.Component);

Resizer.propTypes = {
    onMouseDown: _react.PropTypes.func.isRequired,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired
};

exports.default = Resizer;
module.exports = exports['default'];