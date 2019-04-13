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

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

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

var PartialTable = (function(_Component) {
  _inherits(PartialTable, _Component);

  function PartialTable() {
    _classCallCheck(this, PartialTable);

    return _possibleConstructorReturn(
      this,
      (PartialTable.__proto__ || Object.getPrototypeOf(PartialTable))
        .apply(this, arguments),
    );
  }

  _createClass(PartialTable, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          onFilter = _props.onFilter,
          onPageSizeChange = _props.onPageSizeChange,
          onPageNumberChange = _props.onPageNumberChange,
          onSort = _props.onSort,
          pageLengthOptions = _props.pageLengthOptions,
          columns = _props.columns,
          keys = _props.keys,
          buildRowOptions = _props.buildRowOptions,
          disableFilter = _props.disableFilter,
          disablePagination = _props.disablePagination,
          disableRowChoice = _props.disableRowChoice,
          pageSizeLabel = _props.pageSizeLabel,
          searchLabel = _props.searchLabel,
          searchPlaceholder = _props.searchPlaceholder,
          noDataLabel = _props.noDataLabel,
          paginationBottom = _props.paginationBottom,
          tableClass = _props.tableClass;

        // Protect against unloaded data.

        if (!this.props.data) {
          return null;
        }

        var _props$data = this.props.data,
          page = _props$data.page,
          pageSize = _props$data.pageSize,
          pageNumber = _props$data.pageNumber,
          totalPages = _props$data.totalPages,
          sortBy = _props$data.sortBy,
          filterValues = _props$data.filterValues;

        var pag = disablePagination
          ? null
          : _react2.default.createElement(
              'div',
              { className: paginationBottom ? 'col-xs-12' : 'col-xs-6' },
              _react2.default.createElement(_Pagination2.default, {
                className: 'pagination pull-right',
                currentPage: pageNumber,
                totalPages: totalPages,
                onChangePage: onPageNumberChange,
              }),
            );

        return _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            disableRowChoice
              ? null
              : _react2.default.createElement(
                  'div',
                  {
                    className:
                      paginationBottom || disablePagination
                        ? 'col-lg-3 col-xs-3'
                        : 'col-lg-2 col-xs-2',
                  },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'page-menu' },
                      this.props.pageSizeLabel || 'Page size:',
                    ),
                    ' ',
                    _react2.default.createElement(
                      'select',
                      {
                        className: 'form-control',
                        style: { width: 'auto' },
                        id: 'page-menu',
                        value: pageSize,
                        onChange: onPageSizeChange,
                      },
                      pageLengthOptions.map(function(opt) {
                        return _react2.default.createElement(
                          'option',
                          { key: opt, value: opt },
                          opt === 0 ? 'All' : opt,
                        );
                      }),
                    ),
                    _react2.default.createElement('br', null),
                  ),
                ),
            _react2.default.createElement(
              'div',
              {
                className:
                  paginationBottom || disablePagination
                    ? 'col-lg-7 col-xs-9' +
                      (disableRowChoice ? '' : ' col-lg-push-2')
                    : 'col-lg-4 col-xs-4',
              },
              disableFilter
                ? null
                : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'search-field' },
                      this.props.searchLabel || 'Search:',
                    ),
                    ' ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      id: 'search-field',
                      type: 'search',
                      placeholder: this.props.searchPlaceholder,
                      value: filterValues.globalSearch,
                      onChange: onFilter.bind(null, 'globalSearch'),
                    }),
                    _react2.default.createElement('br', null),
                  ),
            ),
            disableRowChoice
              ? _react2.default.createElement('div', {
                  className: 'col-lg-2 col-xs-2',
                })
              : null,
            paginationBottom ? null : pag,
          ),
          _react2.default.createElement(_Table2.default, {
            className: tableClass,
            dataArray: page,
            columns: columns,
            keys: keys,
            noDataLabel: noDataLabel,
            buildRowOptions: buildRowOptions,
            sortBy: sortBy,
            onSort: onSort,
          }),
          paginationBottom ? pag : null,
        );
      },
    },
  ]);

  return PartialTable;
})(_react.Component);

exports.default = PartialTable;
