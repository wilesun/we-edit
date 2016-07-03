"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _content = require("../content");

var Models = _interopRequireWildcard(_content);

var _editable = require("./editable");

var _editable2 = _interopRequireDefault(_editable);

var _section = require("./section");

var _section2 = _interopRequireDefault(_section);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Editors = {};(function () {
    Object.keys(Models).forEach(function (key) {
        if (key !== 'default') {
            Editors[key] = (0, _editable2.default)(Models[key]);
            console.log("making " + key + " editable");
        }
    });
})();

exports.default = Object.assign(Editors, { Section: _section2.default, Text: _text2.default });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZGl0b3IvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVk7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sVUFBUSxFQUFSLENBQ0wsQ0FBQyxZQUFVO0FBQ1IsV0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixPQUFwQixDQUE0QixlQUFLO0FBQzdCLFlBQUcsUUFBTSxTQUFOLEVBQWdCO0FBQ2Ysb0JBQVEsR0FBUixJQUFhLHdCQUFTLE9BQU8sR0FBUCxDQUFULENBQWIsQ0FEZTtBQUVmLG9CQUFRLEdBQVIsYUFBc0IsaUJBQXRCLEVBRmU7U0FBbkI7S0FEd0IsQ0FBNUIsQ0FEUTtDQUFWLENBQUQ7O2tCQVVjLE9BQU8sTUFBUCxDQUFjLE9BQWQsRUFBc0IsRUFBQywwQkFBRCxFQUFVLG9CQUFWLEVBQXRCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTW9kZWxzIGZyb20gXCIuLi9jb250ZW50XCJcbmltcG9ydCBlZGl0YWJsZSBmcm9tIFwiLi9lZGl0YWJsZVwiXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9zZWN0aW9uXCJcbmltcG9ydCBUZXh0IGZyb20gXCIuL3RleHRcIlxuXG5jb25zdCBFZGl0b3JzPXt9XG47KGZ1bmN0aW9uKCl7XG4gICAgT2JqZWN0LmtleXMoTW9kZWxzKS5mb3JFYWNoKGtleT0+e1xuICAgICAgICBpZihrZXkhPT0nZGVmYXVsdCcpe1xuICAgICAgICAgICAgRWRpdG9yc1trZXldPWVkaXRhYmxlKE1vZGVsc1trZXldKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYG1ha2luZyAke2tleX0gZWRpdGFibGVgKVxuICAgICAgICB9XG4gICAgfSlcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihFZGl0b3JzLHtTZWN0aW9uLCBUZXh0fSlcbiJdfQ==