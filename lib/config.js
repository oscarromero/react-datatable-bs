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

var _DataTable = require('./DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

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

var Config = (function(_React$Component) {
  _inherits(Config, _React$Component);

  function Config(props) {
    _classCallCheck(this, Config);

    var _this = _possibleConstructorReturn(
      this,
      (Config.__proto__ || Object.getPrototypeOf(Config)).call(this, props),
    );

    _this.state = {
      initialPageLength: 5,
      disableRowChoice: false,
      disableFilter: false,
      disablePagination: false,
      pageSizeLabel: 'Page size',
      searchLabel: 'Filter: ',
      searchPlaceholder: 'Type here',
      bootstrap: 'classic',
      noDataLabel: 'No data',
      paginationBottom: false,
    };
    return _this;
  }

  _createClass(Config, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement('h1', null, 'Example DataTable'),
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-6' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('label', null, 'Customize'),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  { className: 'checkbox-inline' },
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.disableFilter,
                    onChange: function onChange(e) {
                      _this2.setState({
                        disableFilter: !_this2.state.disableFilter,
                      });
                    },
                  }),
                  'Disable Search',
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  { className: 'checkbox-inline' },
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.disablePagination,
                    onChange: function onChange(e) {
                      _this2.setState({
                        disablePagination: !_this2.state.disablePagination,
                      });
                    },
                  }),
                  'Disable Pagination',
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  { className: 'checkbox-inline' },
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.disableRowChoice,
                    onChange: function onChange(e) {
                      _this2.setState({
                        disableRowChoice: !_this2.state.disableRowChoice,
                      });
                    },
                  }),
                  'Disable row number choice',
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  { className: 'checkbox-inline' },
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.paginationBottom,
                    onChange: function onChange(e) {
                      _this2.setState({
                        paginationBottom: !_this2.state.paginationBottom,
                      });
                    },
                  }),
                  'Pagination at bottom',
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'label',
                  null,
                  'Custom bootstrap (',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://bootswatch.com' },
                    'bootswatch.com',
                  ),
                  ')',
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'radio' },
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'optradio',
                      checked: this.state.bootstrap === 'classic',
                      onChange: function onChange(e) {
                        _this2.setState({ bootstrap: 'classic' });
                        _this2.changeCSS('', 0);
                      },
                    }),
                    'Classic',
                  ),
                  ' ',
                  '\xA0',
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'optradio',
                      checked: this.state.bootstrap === 'flatly',
                      onChange: function onChange(e) {
                        _this2.setState({ bootstrap: 'flatly' });
                        _this2.changeCSS('flatly', 0);
                      },
                    }),
                    'Flatly',
                  ),
                  ' ',
                  '\xA0',
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'optradio',
                      checked: this.state.bootstrap === 'cosmo',
                      onChange: function onChange(e) {
                        _this2.setState({ bootstrap: 'cosmo' });
                        _this2.changeCSS('cosmo', 0);
                      },
                    }),
                    'Cosmo',
                  ),
                  ' ',
                  '\xA0',
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'optradio',
                      checked: this.state.bootstrap === 'darkly',
                      onChange: function onChange(e) {
                        _this2.setState({ bootstrap: 'darkly' });
                        _this2.changeCSS('darkly', 0);
                      },
                    }),
                    'Darkly',
                  ),
                  ' ',
                  '\xA0',
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'optradio',
                      checked: this.state.bootstrap === 'united',
                      onChange: function onChange(e) {
                        _this2.setState({ bootstrap: 'united' });
                        _this2.changeCSS('united', 0);
                      },
                    }),
                    'United',
                  ),
                  ' ',
                  '\xA0',
                ),
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-6' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 col-sm-6' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Search Placeholder ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      value: this.state.searchPlaceholder,
                      onChange: function onChange(e) {
                        _this2.setState({ searchPlaceholder: e.target.value });
                      },
                    }),
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Search Label ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      value: this.state.searchLabel,
                      onChange: function onChange(e) {
                        _this2.setState({ searchLabel: e.target.value });
                      },
                    }),
                  ),
                  _react2.default.createElement('br', null),
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 col-sm-6' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Page size Label ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      value: this.state.pageSizeLabel,
                      onChange: function onChange(e) {
                        _this2.setState({ pageSizeLabel: e.target.value });
                      },
                    }),
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'label',
                    null,
                    'No Data Label ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      value: this.state.noDataLabel,
                      onChange: function onChange(e) {
                        _this2.setState({ noDataLabel: e.target.value });
                      },
                    }),
                  ),
                  _react2.default.createElement('br', null),
                ),
              ),
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(_DataTable2.default, {
                className: 'container',
                keys: 'id',
                columns: this.props.columns,
                initialData: this.props.initialData,
                initialPageLength: this.state.initialPageLength,
                disableRowChoice: this.state.disableRowChoice,
                disableFilter: this.state.disableFilter,
                disablePagination: this.state.disablePagination,
                pageSizeLabel: this.state.pageSizeLabel,
                searchLabel: this.state.searchLabel,
                searchPlaceholder: this.state.searchPlaceholder,
                noDataLabel: this.state.noDataLabel,
                initialSortBy: { prop: 'city', order: 'descending' },
                pageLengthOptions: [5, 10, 20, 50, 100],
                paginationBottom: this.state.paginationBottom,
              }),
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12', style: { textAlign: 'center' } },
              _react2.default.createElement(
                'pre',
                {
                  style: {
                    whiteSpace: 'pre-line',
                    textAlign: 'left',
                    width: 'auto',
                    margin: 'auto',
                  },
                },
                _react2.default.createElement(
                  'em',
                  null,
                  '//Sample custom component',
                ),
                _react2.default.createElement('br', null),
                "import React from 'react';\n                import DataTable from './DataTable';\n\n                export default class MyTable extends React.Component {\n                 \u2003\n              \u2003render() {\n               \u2003\u2003 return (\n               ",
                '   <DataTable\n',
                '     className="container"\n',
                '     keys="id"\n',
                '     columns={this.props.columns}\n',
                '     initialData={this.props.initialData}\n',
                '     initialPageLength={' +
                  this.state.initialPageLength +
                  '}\n',
                '     initialSortBy={{ prop: "city", order: "descending" }}\n',
                this.state.disableRowChoice ? '     disableRowChoice\n' : null,
                '     noDataLabel={"' + this.state.noDataLabel + '"}\n',
                this.state.disableFilter ? '     disableFilter\n' : null,
                this.state.disablePagination
                  ? '     disablePagination\n'
                  : null,
                this.state.paginationBottom ? '     paginationBottom\n' : null,
                !this.state.disableRowChoice
                  ? '     pageSizeLabel={"' + this.state.pageSizeLabel + '"}\n'
                  : null,
                !this.state.disableFilter
                  ? '     searchLabel={"' + this.state.searchLabel + '"}\n'
                  : null,
                !this.state.disableFilter
                  ? '     searchPlaceholder={"' +
                    this.state.searchPlaceholder +
                    '"}\n'
                  : null,
                !this.state.disableRowChoice
                  ? '     pageLengthOptions={[5, 10, 20, 50, 100]} />);\n'
                  : null,
                '  }\n}',
              ),
            ),
          ),
          _react2.default.createElement(
            'footer',
            { style: { textAlign: 'center' } },
            'By ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/sonsoleslp' },
              '@sonsoleslp',
            ),
            ' based on',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/carlosrocha/react-data-components' },
              'react-data-components',
            ),
          ),
        );
      },
    },
    {
      key: 'changeCSS',
      value: function changeCSS(cssFile, cssLinkIndex) {
        var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);
        var baselink =
          '../css/bootstrap.' + (cssFile ? cssFile + '.' : '') + 'min.css';
        var newlink = document.createElement('link');
        newlink.setAttribute('rel', 'stylesheet');
        newlink.setAttribute('type', 'text/css');
        newlink.setAttribute('href', baselink);

        document
          .getElementsByTagName('head')
          .item(0)
          .replaceChild(newlink, oldlink);
      },
    },
  ]);

  return Config;
})(_react2.default.Component);

exports.default = Config;
