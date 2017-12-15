'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBootstrapMin = require('https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeC = function (_React$Component) {
    _inherits(TimeC, _React$Component);

    function TimeC(props) {
        _classCallCheck(this, TimeC);

        var _this = _possibleConstructorReturn(this, (TimeC.__proto__ || Object.getPrototypeOf(TimeC)).call(this, props));

        _this.componentDidMount = _this.refreshEverySecond.bind(_this);
        _this.state = {
            time: undefined
        };
        return _this;
    }

    _createClass(TimeC, [{
        key: 'refreshEverySecond',
        value: function refreshEverySecond() {
            var _this2 = this;

            setInterval(function () {
                _this2.setState({
                    time: new Date().toLocaleTimeString()
                });
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'myTime' },
                React.createElement(
                    'h2',
                    null,
                    'Hello Edwin'
                ),
                React.createElement(
                    'h1',
                    null,
                    this.state.time
                )
            );
        }
    }]);

    return TimeC;
}(React.Component);

ReactDOM.render(React.createElement(TimeC, null), document.getElementById('app'));
