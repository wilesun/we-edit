"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import wordwrap from "wordwrap"

var _textComposerTime = 0;

var WordWrapper = function () {
    function WordWrapper(text, style) {
        _classCallCheck(this, WordWrapper);

        this.text = text;
        this.style = style;
        this.height = 25;
        this.composed = 0;
    }

    _createClass(WordWrapper, [{
        key: "_createTester",
        value: function _createTester() {}
    }, {
        key: "_textMetrics",
        value: function _textMetrics(word) {}
    }, {
        key: "next",
        value: function next(_ref) {
            var maxWidth = _ref.width;

            if (!this.constructor.tester) this.constructor.tester = this._createTester();

            if (this.composed == this.text.length) return null;

            var tester = this.constructor.tester;
            var startAt = Date.now();

            var text = null,
                info = null,
                height = this.height;

            var _textMetrics2 = this._textMetrics(text = this.text.substr(this.composed));

            var width = _textMetrics2.width;

            if (width <= maxWidth) {
                info = { width: width, height: height, end: this.composed += text.length, children: text };
            } else {
                text = text.substr(0, Math.floor(text.length * maxWidth / width));
                var _textMetrics3 = this._textMetrics(text);

                width = _textMetrics3.width;


                if (width == maxWidth) {
                    info = { width: width, height: height, end: this.composed += text.length, children: text };
                } else if (width < maxWidth) {
                    var index = this.composed + text.length,
                        len = this.text.length;
                    while (width > maxWidth && index < len) {
                        var _textMetrics4 = this._textMetrics(text += this.text.charAt(index++));

                        width = _textMetrics4.width;
                    }
                } else {
                    while (width > maxWidth && text.length) {
                        var _textMetrics5 = this._textMetrics(text = text.slice(0, -1));

                        width = _textMetrics5.width;
                    }
                }

                if (text.length) {
                    info = { width: maxWidth, height: height, end: this.composed += text.length, children: text };
                } else {
                    //@TODO: the space is too small, give a placeholder
                    info = { width: maxWidth, height: height, end: this.composed += text.length, children: text };
                }
            }

            console.info("text composer total time: " + (_textComposerTime += Date.now() - startAt));
            return info;
        }
    }]);

    return WordWrapper;
}();

exports.default = WordWrapper;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93b3Jkd3JhcC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLG9CQUFrQixDQUFsQjs7SUFFaUI7QUFHakIsYUFIaUIsV0FHakIsQ0FBWSxJQUFaLEVBQWtCLEtBQWxCLEVBQXdCOzhCQUhQLGFBR087O0FBQ3BCLGFBQUssSUFBTCxHQUFVLElBQVYsQ0FEb0I7QUFFcEIsYUFBSyxLQUFMLEdBQVcsS0FBWCxDQUZvQjtBQUdwQixhQUFLLE1BQUwsR0FBWSxFQUFaLENBSG9CO0FBSXBCLGFBQUssUUFBTCxHQUFjLENBQWQsQ0FKb0I7S0FBeEI7O2lCQUhpQjs7d0NBVUY7OztxQ0FJRixNQUFLOzs7bUNBSUk7Z0JBQVYsZ0JBQU4sTUFBZ0I7O0FBQ2xCLGdCQUFHLENBQUMsS0FBSyxXQUFMLENBQWlCLE1BQWpCLEVBQ0EsS0FBSyxXQUFMLENBQWlCLE1BQWpCLEdBQXdCLEtBQUssYUFBTCxFQUF4QixDQURKOztBQUdBLGdCQUFHLEtBQUssUUFBTCxJQUFlLEtBQUssSUFBTCxDQUFVLE1BQVYsRUFDZCxPQUFPLElBQVAsQ0FESjs7QUFHQSxnQkFBSSxTQUFPLEtBQUssV0FBTCxDQUFpQixNQUFqQixDQVBPO0FBUWxCLGdCQUFJLFVBQVEsS0FBSyxHQUFMLEVBQVIsQ0FSYzs7QUFVbEIsZ0JBQUksT0FBSyxJQUFMO2dCQUFVLE9BQUssSUFBTDtnQkFBVyxTQUFPLEtBQUssTUFBTCxDQVZkOztnQ0FXTixLQUFLLFlBQUwsQ0FBa0IsT0FBSyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLEtBQUssUUFBTCxDQUF0QixFQVhaOztnQkFXYiw0QkFYYTs7QUFZbEIsZ0JBQUcsU0FBTyxRQUFQLEVBQWdCO0FBQ2YsdUJBQUssRUFBQyxZQUFELEVBQU8sY0FBUCxFQUFlLEtBQUksS0FBSyxRQUFMLElBQWUsS0FBSyxNQUFMLEVBQWEsVUFBUyxJQUFULEVBQXBELENBRGU7YUFBbkIsTUFFSztBQUNELHVCQUFLLEtBQUssTUFBTCxDQUFZLENBQVosRUFBYyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsR0FBWSxRQUFaLEdBQXFCLEtBQXJCLENBQXpCLENBQUwsQ0FEQztvQ0FFUyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFGVDs7QUFFRSw0Q0FGRjs7O0FBSUQsb0JBQUcsU0FBTyxRQUFQLEVBQWdCO0FBQ2YsMkJBQUssRUFBQyxZQUFELEVBQVEsY0FBUixFQUFnQixLQUFJLEtBQUssUUFBTCxJQUFlLEtBQUssTUFBTCxFQUFhLFVBQVMsSUFBVCxFQUFyRCxDQURlO2lCQUFuQixNQUVNLElBQUcsUUFBTSxRQUFOLEVBQWU7QUFDcEIsd0JBQUksUUFBTSxLQUFLLFFBQUwsR0FBYyxLQUFLLE1BQUw7d0JBQWEsTUFBSSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBRHJCO0FBRXBCLDJCQUFNLFFBQU0sUUFBTixJQUFrQixRQUFNLEdBQU47NENBQ1gsS0FBSyxZQUFMLENBQWtCLFFBQU0sS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixPQUFqQixDQUFOOztBQUF6QjtxQkFETjtpQkFGRSxNQUlDO0FBQ0gsMkJBQU0sUUFBTSxRQUFOLElBQWtCLEtBQUssTUFBTDs0Q0FDWCxLQUFLLFlBQUwsQ0FBa0IsT0FBSyxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWEsQ0FBQyxDQUFELENBQWxCOztBQUF6QjtxQkFETjtpQkFMRTs7QUFTTixvQkFBRyxLQUFLLE1BQUwsRUFBWTtBQUNYLDJCQUFLLEVBQUMsT0FBTSxRQUFOLEVBQWUsY0FBaEIsRUFBd0IsS0FBSSxLQUFLLFFBQUwsSUFBZSxLQUFLLE1BQUwsRUFBYSxVQUFTLElBQVQsRUFBN0QsQ0FEVztpQkFBZixNQUVLOztBQUNELDJCQUFLLEVBQUMsT0FBTSxRQUFOLEVBQWUsY0FBaEIsRUFBd0IsS0FBSSxLQUFLLFFBQUwsSUFBZSxLQUFLLE1BQUwsRUFBYSxVQUFTLElBQVQsRUFBN0QsQ0FEQztpQkFGTDthQWpCSjs7QUF3QkEsb0JBQVEsSUFBUixpQ0FBMEMscUJBQW9CLEtBQUssR0FBTCxLQUFXLE9BQVgsQ0FBOUQsRUFwQ2tCO0FBcUNsQixtQkFBTyxJQUFQLENBckNrQjs7OztXQWxCTCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHdvcmR3cmFwIGZyb20gXCJ3b3Jkd3JhcFwiXG5cbnZhciBfdGV4dENvbXBvc2VyVGltZT0wXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRXcmFwcGVye1xuICAgIHN0YXRpYyB0ZXN0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSl7XG4gICAgICAgIHRoaXMudGV4dD10ZXh0XG4gICAgICAgIHRoaXMuc3R5bGU9c3R5bGVcbiAgICAgICAgdGhpcy5oZWlnaHQ9MjVcbiAgICAgICAgdGhpcy5jb21wb3NlZD0wXG4gICAgfVxuXG4gICAgX2NyZWF0ZVRlc3Rlcigpe1xuXG4gICAgfVxuXG4gICAgX3RleHRNZXRyaWNzKHdvcmQpe1xuXG4gICAgfVxuXG4gICAgbmV4dCh7d2lkdGg6bWF4V2lkdGh9KXtcbiAgICAgICAgaWYoIXRoaXMuY29uc3RydWN0b3IudGVzdGVyKVxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50ZXN0ZXI9dGhpcy5fY3JlYXRlVGVzdGVyKClcblxuICAgICAgICBpZih0aGlzLmNvbXBvc2VkPT10aGlzLnRleHQubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgICBsZXQgdGVzdGVyPXRoaXMuY29uc3RydWN0b3IudGVzdGVyXG4gICAgICAgIGxldCBzdGFydEF0PURhdGUubm93KClcblxuICAgICAgICBsZXQgdGV4dD1udWxsLGluZm89bnVsbCwgaGVpZ2h0PXRoaXMuaGVpZ2h0XG4gICAgICAgIGxldCB7d2lkdGh9PXRoaXMuX3RleHRNZXRyaWNzKHRleHQ9dGhpcy50ZXh0LnN1YnN0cih0aGlzLmNvbXBvc2VkKSlcbiAgICAgICAgaWYod2lkdGg8PW1heFdpZHRoKXtcbiAgICAgICAgICAgIGluZm89e3dpZHRoLGhlaWdodCwgZW5kOnRoaXMuY29tcG9zZWQrPXRleHQubGVuZ3RoLCBjaGlsZHJlbjp0ZXh0fVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRleHQ9dGV4dC5zdWJzdHIoMCxNYXRoLmZsb29yKHRleHQubGVuZ3RoKm1heFdpZHRoL3dpZHRoKSlcbiAgICAgICAgICAgIDsoe3dpZHRofT10aGlzLl90ZXh0TWV0cmljcyh0ZXh0KSk7XG5cbiAgICAgICAgICAgIGlmKHdpZHRoPT1tYXhXaWR0aCl7XG4gICAgICAgICAgICAgICAgaW5mbz17d2lkdGgsIGhlaWdodCwgZW5kOnRoaXMuY29tcG9zZWQrPXRleHQubGVuZ3RoLCBjaGlsZHJlbjp0ZXh0fVxuICAgICAgICAgICAgfWVsc2UgaWYod2lkdGg8bWF4V2lkdGgpe1xuICAgICAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmNvbXBvc2VkK3RleHQubGVuZ3RoLCBsZW49dGhpcy50ZXh0Lmxlbmd0aFxuICAgICAgICAgICAgICAgIHdoaWxlKHdpZHRoPm1heFdpZHRoICYmIGluZGV4PGxlbilcbiAgICAgICAgICAgICAgICAgICAgKHt3aWR0aH09dGhpcy5fdGV4dE1ldHJpY3ModGV4dCs9dGhpcy50ZXh0LmNoYXJBdChpbmRleCsrKSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlKHdpZHRoPm1heFdpZHRoICYmIHRleHQubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAoe3dpZHRofT10aGlzLl90ZXh0TWV0cmljcyh0ZXh0PXRleHQuc2xpY2UoMCwtMSkpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0ZXh0Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaW5mbz17d2lkdGg6bWF4V2lkdGgsaGVpZ2h0LCBlbmQ6dGhpcy5jb21wb3NlZCs9dGV4dC5sZW5ndGgsIGNoaWxkcmVuOnRleHR9XG4gICAgICAgICAgICB9ZWxzZXsvL0BUT0RPOiB0aGUgc3BhY2UgaXMgdG9vIHNtYWxsLCBnaXZlIGEgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICBpbmZvPXt3aWR0aDptYXhXaWR0aCxoZWlnaHQsIGVuZDp0aGlzLmNvbXBvc2VkKz10ZXh0Lmxlbmd0aCwgY2hpbGRyZW46dGV4dH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgdGV4dCBjb21wb3NlciB0b3RhbCB0aW1lOiAke190ZXh0Q29tcG9zZXJUaW1lKz0oRGF0ZS5ub3coKS1zdGFydEF0KX1gKVxuICAgICAgICByZXR1cm4gaW5mb1xuICAgIH1cbn1cbiJdfQ==