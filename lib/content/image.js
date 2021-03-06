"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _any = require("./any");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_NoChild) {
    _inherits(Image, _NoChild);

    function Image() {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
    }

    _createClass(Image, [{
        key: "createComposed2Parent",
        value: function createComposed2Parent() {
            var _props = this.props,
                src = _props.src,
                _props$extent = _props.extent,
                width = _props$extent.width,
                height = _props$extent.height,
                others = _objectWithoutProperties(_props, ["src", "extent"]);

            var availableSpace = this.context.parent.nextAvailableSpace({ width: width, height: height });
            return _react2.default.createElement("image", {
                width: width,
                height: height,
                xlinkHref: src,
                y: -height
            });
        }
    }]);

    return Image;
}(_any.NoChild);

Image.displayName = "image";
exports.default = Image;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZW50L2ltYWdlLmpzIl0sIm5hbWVzIjpbIkltYWdlIiwicHJvcHMiLCJzcmMiLCJleHRlbnQiLCJ3aWR0aCIsImhlaWdodCIsIm90aGVycyIsImF2YWlsYWJsZVNwYWNlIiwiY29udGV4dCIsInBhcmVudCIsIm5leHRBdmFpbGFibGVTcGFjZSIsInhsaW5rSHJlZiIsInkiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7O2dEQUVNO0FBQUEseUJBQzJCLEtBQUtDLEtBRGhDO0FBQUEsZ0JBQ1pDLEdBRFksVUFDWkEsR0FEWTtBQUFBLHVDQUNQQyxNQURPO0FBQUEsZ0JBQ0NDLEtBREQsaUJBQ0NBLEtBREQ7QUFBQSxnQkFDT0MsTUFEUCxpQkFDT0EsTUFEUDtBQUFBLGdCQUNtQkMsTUFEbkI7O0FBRW5CLGdCQUFJQyxpQkFBZSxLQUFLQyxPQUFMLENBQWFDLE1BQWIsQ0FBb0JDLGtCQUFwQixDQUF1QyxFQUFDTixZQUFELEVBQU9DLGNBQVAsRUFBdkMsQ0FBbkI7QUFDQSxtQkFBTyx1Q0FBVztBQUNWRCw0QkFEVTtBQUVWQyw4QkFGVTtBQUdWTSwyQkFBV1QsR0FIRDtBQUlWVSxtQkFBRSxDQUFDUDtBQUpPLGFBQVgsQ0FBUDtBQU1IOzs7Ozs7QUFYZ0JMLEssQ0FDVmEsVyxHQUFZLE87a0JBREZiLEsiLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlc30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtOb0NoaWxkfSBmcm9tIFwiLi9hbnlcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBOb0NoaWxke1xyXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lPVwiaW1hZ2VcIlxyXG4gICAgY3JlYXRlQ29tcG9zZWQyUGFyZW50KCl7XHJcbiAgICAgICAgY29uc3Qge3NyYywgZXh0ZW50Ont3aWR0aCxoZWlnaHR9LCAuLi5vdGhlcnN9PXRoaXMucHJvcHNcclxuICAgICAgICBsZXQgYXZhaWxhYmxlU3BhY2U9dGhpcy5jb250ZXh0LnBhcmVudC5uZXh0QXZhaWxhYmxlU3BhY2Uoe3dpZHRoLGhlaWdodH0pXHJcbiAgICAgICAgcmV0dXJuIDxpbWFnZSB7Li4ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB4bGlua0hyZWY6IHNyYyxcclxuICAgICAgICAgICAgICAgIHk6LWhlaWdodFxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgfVxyXG59XHJcbiJdfQ==