webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(236);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var user = {
    name: 'Michael',
    age: 34,
    location: 'Portland'
};

var userNew = Object.assign({}, user, {
    name: 'Ryan'
});
if (user.name !== userNew.name) {
    console.log(user);
}

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter() {
        var _temp, _this;

        _classCallCheck(this, Counter);

        (_temp = (_this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this)), _this), _this.incrementClick = function () {
            _this.setState({
                currentNumber: _this.state.currentNumber + 1
            }, function () {
                console.log(_this.state.currentNumber);
            });
        }, _this.decrementClick = function () {
            _this.setState({
                currentNumber: _this.state.currentNumber - 1
            }, function () {
                console.log(_this.state.currentNumber);
            });
        }, _this.counterRun = function () {
            setInterval(function () {
                _this.setState({
                    currentNumber: _this.state.currentNumber + 1
                }, function () {
                    console.log(_this.state.currentNumber);
                });
            }, 1000);
        }, _temp), _this.state = {
            status: 'manual',
            currentNumber: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('component will mount started');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // =========this loop is causing infinite errors, git commit then comeback to look at it
            if (this.props.status == 'auto') {
                this.setState({
                    status: this.props.status
                }, function () {
                    _this2.counterRun();
                });
            }
            // =========this loop is causing infinite errors, git commit then comeback to look at it
        }
    }, {
        key: 'render',
        value: function render() {
            // ===== styles ==========
            var styleCounterComp = {
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto'
            };
            var styleNumber = {
                border: '3px solid black',
                padding: '20px',
                fontSize: '2rem',
                fontWeight: '900',
                textAlign: 'center'
            };
            var styleButtons = {
                display: this.props.status == 'auto' ? 'none' : 'flex'
            };
            // ===== styles ==========
            return _react2.default.createElement(
                'div',
                { id: 'counterComp',
                    style: styleCounterComp },
                _react2.default.createElement(
                    'div',
                    { className: 'number',
                        style: styleNumber },
                    this.state.currentNumber
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'buttons',
                        style: styleButtons },
                    _react2.default.createElement(
                        _button2.default,
                        { action: 'minus',
                            fontColor: 'white',
                            hoverColor: 'red',
                            backgroundColor: 'black',
                            triggerClick: this.decrementClick },
                        '-'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { action: 'plus',
                            fontColor: 'black',
                            hoverColor: 'blue',
                            backgroundColor: 'white',
                            triggerClick: this.incrementClick },
                        '+'
                    )
                )
            );
        }
    }]);

    return Counter;
}(_react.Component);

exports.default = Counter;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _counter = __webpack_require__(231);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_counter2.default, { status: 'manual' })
            );
        }
    }]);

    return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        var _temp, _this;

        _classCallCheck(this, Button);

        (_temp = (_this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this)), _this), _this.toggleHover = function () {
            _this.setState({
                hover: !_this.state.hover
            });
        }, _temp), _this.state = {
            hover: false
        }, _this.toggleHover = _this.toggleHover.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var styleButton = {
                color: this.props.fontColor,
                width: '50%',
                border: '3px solid black',
                padding: '20px',
                fontSize: '2rem',
                fontWeight: '900',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all .5s ease-in-out',
                background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'button ' + this.props.action,
                    style: styleButton,
                    onMouseEnter: this.toggleHover,
                    onMouseLeave: this.toggleHover,
                    onClick: this.props.triggerClick },
                this.props.children
            );
        }
    }]);

    return Button;
}(_react.Component);

exports.default = Button;

/***/ })

},[235]);