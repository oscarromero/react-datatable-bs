'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

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

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
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

var simpleGet = function simpleGet(key) {
  return function(data) {
    return data[key];
  };
};
var keyGetter = function keyGetter(keys) {
  return function(data) {
    return keys.map(function(key) {
      return data[key];
    });
  };
};

var isEmpty = function isEmpty(value) {
  return value == null || value === '';
};

var getCellValue = function getCellValue(_ref, row) {
  var prop = _ref.prop,
    defaultContent = _ref.defaultContent,
    render = _ref.render;
  return (
    // Return `defaultContent` if the value is empty.
    !isEmpty(prop) && isEmpty(row[prop])
      ? defaultContent // Use the render function for the value.
      : render
        ? render(row[prop], row) // Otherwise just return the value.
        : row[prop]
  );
};

var getCellClass = function getCellClass(_ref2, row) {
  var prop = _ref2.prop,
    className = _ref2.className;
  return !isEmpty(prop) && isEmpty(row[prop])
    ? 'empty-cell'
    : typeof className == 'function' ? className(row[prop], row) : className;
};

function buildSortProps(col, sortBy, onSort) {
  var order = sortBy && sortBy.prop === col.prop ? sortBy.order : 'none';
  var nextOrder = order === 'ascending' ? 'descending' : 'ascending';
  var sortEvent = onSort.bind(null, { prop: col.prop, order: nextOrder });

  return {
    onClick: sortEvent,
    // Fire the sort event on enter.
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 13) sortEvent();
    },
    // Prevents selection with mouse.
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    },
    tabIndex: 0,
    'aria-sort': order,
    'aria-label': col.title + ': activate to sort column ' + nextOrder,
  };
}

var Table = (function(_Component) {
  _inherits(Table, _Component);

  function Table() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (_ret = (
      (_temp = (
        (_this = _possibleConstructorReturn(
          this,
          (_ref3 = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(
            _ref3,
            [this].concat(args),
          ),
        )),
        _this
      )),
      (_this._headers = []),
      _temp
    )), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Table, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // If no width was specified, then set the width that the browser applied
        // initially to avoid recalculating width between pages.
        this._headers.forEach(function(header) {
          if (!header.style.width) {
            header.style.width = header.offsetWidth + 'px';
          }
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          columns = _props.columns,
          keys = _props.keys,
          buildRowOptions = _props.buildRowOptions,
          sortBy = _props.sortBy,
          onSort = _props.onSort,
          dataArray = _props.dataArray,
          noDataLabel = _props.noDataLabel,
          otherProps = _objectWithoutProperties(_props, [
            'columns',
            'keys',
            'buildRowOptions',
            'sortBy',
            'onSort',
            'dataArray',
            'noDataLabel',
          ]);

        var headers = columns.map(function(col, idx) {
          var sortProps = void 0,
            order = void 0;
          // Only add sorting events if the column has a property and is sortable.
          if (onSort && col.sortable !== false && 'prop' in col) {
            sortProps = buildSortProps(col, sortBy, onSort);
            order = sortProps['aria-sort'];
          }

          return _react2.default.createElement(
            'th',
            _extends(
              {
                ref: function ref(c) {
                  return (_this2._headers[idx] = c);
                },
                key: idx,
                style: { width: col.width },
                role: 'columnheader',
                scope: 'col',
              },
              sortProps,
            ),
            _react2.default.createElement('span', null, col.title),
            !order
              ? null
              : _react2.default.createElement(
                  'span',
                  { className: '', 'aria-hidden': 'true' },
                  order && order === 'ascending'
                    ? asc
                    : order && order === 'descending' ? desc : '',
                ),
          );
        });

        var getKeys = Array.isArray(keys) ? keyGetter(keys) : simpleGet(keys);
        var rows = dataArray.map(function(row, key) {
          var trProps = buildRowOptions ? buildRowOptions(row) : {};

          return _react2.default.createElement(
            'tr',
            _extends({ key: 'row_' + key }, trProps),
            columns.map(function(col, i) {
              return _react2.default.createElement(
                'td',
                { key: 'col-' + i, className: getCellClass(col, row) },
                getCellValue(col, row),
              );
            }),
          );
        });

        return _react2.default.createElement(
          'table',
          otherProps,
          !sortBy
            ? null
            : _react2.default.createElement(
                'caption',
                { className: 'sr-only', role: 'alert', 'aria-live': 'polite' },
                'Sorted by ' + sortBy.prop + ': ' + sortBy.order + ' order',
              ),
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement('tr', { key: 'headers' }, headers),
          ),
          _react2.default.createElement(
            'tbody',
            null,
            rows.length
              ? rows
              : _react2.default.createElement(
                  'tr',
                  { key: 'no-data' },
                  _react2.default.createElement(
                    'td',
                    { colSpan: columns.length, className: 'text-center' },
                    noDataLabel,
                  ),
                ),
          ),
        );
      },
    },
  ]);

  return Table;
})(_react.Component);

Table.propTypes = {
  keys: _propTypes2.default.oneOfType([
    _propTypes2.default.arrayOf(_propTypes2.default.string),
    _propTypes2.default.string,
  ]).isRequired,

  columns: _propTypes2.default.arrayOf(
    _propTypes2.default.shape({
      title: _propTypes2.default.string.isRequired,
      prop: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.number,
      ]),
      render: _propTypes2.default.func,
      sortable: _propTypes2.default.bool,
      defaultContent: _propTypes2.default.string,
      width: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.number,
      ]),
      className: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.func,
      ]),
    }),
  ).isRequired,

  dataArray: _propTypes2.default.arrayOf(
    _propTypes2.default.oneOfType([
      _propTypes2.default.array,
      _propTypes2.default.object,
    ]),
  ).isRequired,

  buildRowOptions: _propTypes2.default.func,

  sortBy: _propTypes2.default.shape({
    prop: _propTypes2.default.oneOfType([
      _propTypes2.default.string,
      _propTypes2.default.number,
    ]),
    order: _propTypes2.default.oneOf(['ascending', 'descending']),
  }),

  onSort: _propTypes2.default.func,
  noDataLabel: _propTypes2.default.string,
};
exports.default = Table;

var asc = _react2.default.createElement(
  'svg',
  {
    width: '10',
    height: '10',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  _react2.default.createElement('path', {
    d:
      'M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z',
  }),
);
var desc = _react2.default.createElement(
  'svg',
  {
    width: '10',
    height: '10',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  _react2.default.createElement('path', {
    d:
      'M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z',
  }),
);
