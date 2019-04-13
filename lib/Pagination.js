'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

// Used to cancel events.
var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var Pagination = (function(_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(
      this,
      (Pagination.__proto__ || Object.getPrototypeOf(Pagination))
        .apply(this, arguments),
    );
  }

  _createClass(Pagination, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var props = this.props;

        return (
          props.totalPages !== nextProps.totalPages ||
          props.currentPage !== nextProps.currentPage ||
          props.showPages !== nextProps.showPages
        );
      },
    },
    {
      key: 'onChangePage',
      value: function onChangePage(pageNumber, event) {
        event.preventDefault();
        this.props.onChangePage(pageNumber);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          totalPages = _props.totalPages,
          showPages = _props.showPages,
          currentPage = _props.currentPage;

        if (totalPages === 0) {
          return null;
        }

        var diff = Math.floor(showPages / 2),
          start = Math.max(currentPage - diff, 0),
          end = Math.min(start + showPages, totalPages);

        if (totalPages >= showPages && end >= totalPages) {
          start = totalPages - showPages;
        }

        var buttons = [],
          btnEvent,
          isCurrent;
        for (var i = start; i < end; i++) {
          isCurrent = currentPage === i;
          // If the button is for the current page then disable the event.
          if (isCurrent) {
            btnEvent = preventDefault;
          } else {
            btnEvent = this.onChangePage.bind(this, i);
          }
          buttons.push(
            _react2.default.createElement(
              'li',
              { key: i, className: isCurrent ? 'active' : null },
              _react2.default.createElement(
                'a',
                { role: 'button', href: '#', onClick: btnEvent, tabIndex: '0' },
                _react2.default.createElement('span', null, i + 1),
                isCurrent
                  ? _react2.default.createElement(
                      'span',
                      { className: 'sr-only' },
                      '(current)',
                    )
                  : null,
              ),
            ),
          );
        }

        // First and Prev button handlers and class.
        var firstHandler = preventDefault;
        var prevHandler = preventDefault;
        var isNotFirst = currentPage > 0;
        if (isNotFirst) {
          firstHandler = this.onChangePage.bind(this, 0);
          prevHandler = this.onChangePage.bind(this, currentPage - 1);
        }

        // Next and Last button handlers and class.
        var nextHandler = preventDefault;
        var lastHandler = preventDefault;
        var isNotLast = currentPage < totalPages - 1;
        if (isNotLast) {
          nextHandler = this.onChangePage.bind(this, currentPage + 1);
          lastHandler = this.onChangePage.bind(this, totalPages - 1);
        }

        buttons = [
          _react2.default.createElement(
            'li',
            { key: 'first', className: !isNotFirst ? 'disabled' : null },
            _react2.default.createElement(
              'a',
              {
                role: 'button',
                href: '#',
                tabIndex: '0',
                onClick: firstHandler,
                'aria-disabled': !isNotFirst,
                'aria-label': 'First',
              },
              _react2.default.createElement(
                'span',
                { className: '', 'aria-hidden': 'true' },
                svg_fb,
              ),
            ),
          ),
          _react2.default.createElement(
            'li',
            { key: 'prev', className: !isNotFirst ? 'disabled' : null },
            _react2.default.createElement(
              'a',
              {
                role: 'button',
                href: '#',
                tabIndex: '0',
                onClick: prevHandler,
                'aria-disabled': !isNotFirst,
                'aria-label': 'Previous',
              },
              _react2.default.createElement(
                'span',
                { className: '', 'aria-hidden': 'true' },
                svg_b,
              ),
            ),
          ),
        ].concat(buttons);

        buttons = buttons.concat([
          _react2.default.createElement(
            'li',
            { key: 'next', className: !isNotLast ? 'disabled' : null },
            _react2.default.createElement(
              'a',
              {
                role: 'button',
                href: '#',
                tabIndex: '0',
                onClick: nextHandler,
                'aria-disabled': !isNotLast,
                'aria-label': 'Next',
              },
              _react2.default.createElement(
                'span',
                { className: '', 'aria-hidden': 'true' },
                svg_f,
              ),
            ),
          ),
          _react2.default.createElement(
            'li',
            { key: 'last', className: !isNotLast ? 'disabled' : null },
            _react2.default.createElement(
              'a',
              {
                role: 'button',
                href: '#',
                tabIndex: '0',
                onClick: lastHandler,
                'aria-disabled': !isNotLast,
                'aria-label': 'Last',
              },
              _react2.default.createElement(
                'span',
                { className: '', 'aria-hidden': 'true' },
                svg_ff,
              ),
            ),
          ),
        ]);

        return _react2.default.createElement(
          'ul',
          { className: this.props.className, 'aria-label': 'Pagination' },
          buttons,
        );
      },
    },
  ]);

  return Pagination;
})(_react.Component);

Pagination.defaultProps = {
  showPages: 5,
};
Pagination.propTypes = {
  onChangePage: _propTypes2.default.func.isRequired,
  totalPages: _propTypes2.default.number.isRequired,
  currentPage: _propTypes2.default.number.isRequired,
  showPages: _propTypes2.default.number,
};
exports.default = Pagination;

var svg_fb = _react2.default.createElement(
  'svg',
  {
    width: '10',
    height: '10',
    fill: '#337ab7',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  _react2.default.createElement('path', {
    d:
      'M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z',
  }),
);
var svg_b = _react2.default.createElement(
  'svg',
  {
    width: '10',
    height: '10',
    fill: '#337ab7',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  _react2.default.createElement('path', {
    d:
      'M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z',
  }),
);
var svg_f = _react2.default.createElement(
  'svg',
  {
    width: '10',
    height: '10',
    fill: '#337ab7',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  _react2.default.createElement('path', {
    d:
      'M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z',
  }),
);
var svg_ff = _react2.default.createElement(
  'svg',
  {
    width: '10',
    height: '10',
    fill: '#337ab7',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  _react2.default.createElement('path', {
    d:
      'M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z',
  }),
);
