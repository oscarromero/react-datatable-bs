import React from 'react';
import DataTable from './DataTable';

export default class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPageLength: 5,
      disableRowChoice: false,
      disableFilter: false,
      disablePagination: false,
      pageSizeLabel: 'Page size',
      searchLabel: 'Filter: ',
      searchPlaceholder: 'Type here',
      bootstrap: 'classic',
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Example DataTable</h1>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label>Customize</label>
              <br />
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  checked={this.state.disableFilter}
                  onChange={e => {
                    this.setState({ disableFilter: !this.state.disableFilter });
                  }}
                />
                Disable Search
              </label>
              <br />
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  checked={this.state.disablePagination}
                  onChange={e => {
                    this.setState({
                      disablePagination: !this.state.disablePagination,
                    });
                  }}
                />
                Disable Pagination
              </label>
              <br />
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  checked={this.state.disableRowChoice}
                  onChange={e => {
                    this.setState({
                      disableRowChoice: !this.state.disableRowChoice,
                    });
                  }}
                />
                Disable row number choice
              </label>
              <br />
              <br />
              <label>
                Custom bootstrap (<a href="http://bootswatch.com">
                  bootswatch.com
                </a>)
              </label>
              <br />
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="optradio"
                    checked={this.state.bootstrap === 'classic'}
                    onChange={e => {
                      this.setState({ bootstrap: 'classic' });
                      this.changeCSS('', 0);
                    }}
                  />Classic
                </label>{' '}
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="optradio"
                    checked={this.state.bootstrap === 'flatly'}
                    onChange={e => {
                      this.setState({ bootstrap: 'flatly' });
                      this.changeCSS('flatly', 0);
                    }}
                  />Flatly
                </label>{' '}
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="optradio"
                    checked={this.state.bootstrap === 'cosmo'}
                    onChange={e => {
                      this.setState({ bootstrap: 'cosmo' });
                      this.changeCSS('cosmo', 0);
                    }}
                  />Cosmo
                </label>{' '}
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="optradio"
                    checked={this.state.bootstrap === 'darkly'}
                    onChange={e => {
                      this.setState({ bootstrap: 'darkly' });
                      this.changeCSS('darkly', 0);
                    }}
                  />Darkly
                </label>{' '}
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="optradio"
                    checked={this.state.bootstrap === 'united'}
                    onChange={e => {
                      this.setState({ bootstrap: 'united' });
                      this.changeCSS('united', 0);
                    }}
                  />United
                </label>{' '}
                &nbsp;
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label>
                Search Placeholder <br />
                <input
                  type="text"
                  className="form-control"
                  value={this.state.searchPlaceholder}
                  onChange={e => {
                    this.setState({ searchPlaceholder: e.target.value });
                  }}
                />
              </label>
              <br />
              <label>
                Search Label <br />
                <input
                  type="text"
                  className="form-control"
                  value={this.state.searchLabel}
                  onChange={e => {
                    this.setState({ searchLabel: e.target.value });
                  }}
                />
              </label>
              <br />
              <label>
                Page size Label <br />
                <input
                  type="text"
                  className="form-control"
                  value={this.state.pageSizeLabel}
                  onChange={e => {
                    this.setState({ pageSizeLabel: e.target.value });
                  }}
                />
              </label>
            </div>
          </div>
          <div className="col-xs-12">
            <DataTable
              className="container"
              keys="id"
              columns={this.props.columns}
              initialData={this.props.initialData}
              initialPageLength={this.state.initialPageLength}
              disableRowChoice={this.state.disableRowChoice}
              disableFilter={this.state.disableFilter}
              disablePagination={this.state.disablePagination}
              pageSizeLabel={this.state.pageSizeLabel}
              searchLabel={this.state.searchLabel}
              searchPlaceholder={this.state.searchPlaceholder}
              initialSortBy={{ prop: 'city', order: 'descending' }}
              pageLengthOptions={[5, 10, 20, 50, 100]}
            />
          </div>
        </div>
        <footer style={{ textAlign: 'center' }}>
          By <a href="https://github.com/sonsoleslp">@sonsoleslp</a> based on{' '}
          <a href="https://github.com/carlosrocha/react-data-components">
            react-data-components
          </a>
        </footer>
      </div>
    );
  }
  changeCSS(cssFile, cssLinkIndex) {
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
  }
}
