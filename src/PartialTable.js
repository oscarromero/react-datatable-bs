import React, { Component } from 'react';
import Table from './Table';
import Pagination from './Pagination';

export default class PartialTable extends Component {
  render() {
    const {
      onFilter,
      onPageSizeChange,
      onPageNumberChange,
      onSort,
      pageLengthOptions,
      columns,
      keys,
      buildRowOptions,
      disableFilter,
      disablePagination,
      disableRowChoice,
      pageSizeLabel,
      searchLabel,
      searchPlaceholder,
      noDataLabel,
      paginationBottom,
    } = this.props;

    // Protect against unloaded data.
    if (!this.props.data) {
      return null;
    }

    const {
      page,
      pageSize,
      pageNumber,
      totalPages,
      sortBy,
      filterValues,
    } = this.props.data;

    let pag = disablePagination
      ? null
      : <div className={paginationBottom ? 'col-xs-12' : 'col-xs-6'}>
          <Pagination
            className="pagination pull-right"
            currentPage={pageNumber}
            totalPages={totalPages}
            onChangePage={onPageNumberChange}
          />
        </div>;

    return (
      <div className="container">
        <div className="row">
          {disableRowChoice
            ? null
            : <div
                className={
                  paginationBottom || disablePagination
                    ? 'col-lg-3 col-xs-3'
                    : 'col-lg-2 col-xs-2'
                }
              >
                <div>
                  <label htmlFor="page-menu">
                    {this.props.pageSizeLabel || 'Page size:'}
                  </label>{' '}
                  <select
                    className="form-control"
                    style={{ width: 'auto' }}
                    id="page-menu"
                    value={pageSize}
                    onChange={onPageSizeChange}
                  >
                    {pageLengthOptions.map(opt =>
                      <option key={opt} value={opt}>
                        {opt === 0 ? 'All' : opt}
                      </option>,
                    )}
                  </select>
                  <br />
                </div>
              </div>}
          <div
            className={
              paginationBottom || disablePagination
                ? 'col-lg-7 col-xs-9' +
                  (disableRowChoice ? '' : ' col-lg-push-2')
                : 'col-lg-4 col-xs-4'
            }
          >
            {disableFilter
              ? null
              : <div>
                  <label htmlFor="search-field">
                    {this.props.searchLabel || 'Search:'}
                  </label>{' '}
                  <br />
                  <input
                    className="form-control"
                    id="search-field"
                    type="search"
                    placeholder={this.props.searchPlaceholder}
                    value={filterValues.globalSearch}
                    onChange={onFilter.bind(null, 'globalSearch')}
                  />
                  <br />
                </div>}
          </div>
          {disableRowChoice ? <div className="col-lg-2 col-xs-2" /> : null}

          {paginationBottom ? null : pag}
        </div>
        <Table
          className="table table-bordered"
          dataArray={page}
          columns={columns}
          keys={keys}
          noDataLabel={noDataLabel}
          buildRowOptions={buildRowOptions}
          sortBy={sortBy}
          onSort={onSort}
        />
        {paginationBottom ? pag : null}
      </div>
    );
  }
}
