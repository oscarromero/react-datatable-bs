import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Used to cancel events.
var preventDefault = e => e.preventDefault();

export default class Pagination extends Component {
  static defaultProps = {
    showPages: 5,
  };

  static propTypes = {
    onChangePage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    showPages: PropTypes.number,
  };

  shouldComponentUpdate(nextProps) {
    var props = this.props;

    return (
      props.totalPages !== nextProps.totalPages ||
      props.currentPage !== nextProps.currentPage ||
      props.showPages !== nextProps.showPages
    );
  }

  onChangePage(pageNumber, event) {
    event.preventDefault();
    this.props.onChangePage(pageNumber);
  }

  render() {
    var { totalPages, showPages, currentPage } = this.props;

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
        <li key={i} className={isCurrent ? 'active' : null}>
          <a role="button" href="#" onClick={btnEvent} tabIndex="0">
            <span>
              {i + 1}
            </span>
            {isCurrent ? <span className="sr-only">(current)</span> : null}
          </a>
        </li>,
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
      <li key="first" className={!isNotFirst ? 'disabled' : null}>
        <a
          role="button"
          href="#"
          tabIndex="0"
          onClick={firstHandler}
          aria-disabled={!isNotFirst}
          aria-label="First"
        >
          <span className="" aria-hidden="true">
            {svg_fb}
          </span>
        </a>
      </li>,
      <li key="prev" className={!isNotFirst ? 'disabled' : null}>
        <a
          role="button"
          href="#"
          tabIndex="0"
          onClick={prevHandler}
          aria-disabled={!isNotFirst}
          aria-label="Previous"
        >
          <span className="" aria-hidden="true">
            {svg_b}
          </span>
        </a>
      </li>,
    ].concat(buttons);

    buttons = buttons.concat([
      <li key="next" className={!isNotLast ? 'disabled' : null}>
        <a
          role="button"
          href="#"
          tabIndex="0"
          onClick={nextHandler}
          aria-disabled={!isNotLast}
          aria-label="Next"
        >
          <span className="" aria-hidden="true">
            {svg_f}
          </span>
        </a>
      </li>,
      <li key="last" className={!isNotLast ? 'disabled' : null}>
        <a
          role="button"
          href="#"
          tabIndex="0"
          onClick={lastHandler}
          aria-disabled={!isNotLast}
          aria-label="Last"
        >
          <span className="" aria-hidden="true">
            {svg_ff}
          </span>
        </a>
      </li>,
    ]);

    return (
      <ul className={this.props.className} aria-label="Pagination">
        {buttons}
      </ul>
    );
  }
}

let svg_fb = (
  <svg
    width="10"
    height="10"
    fill="#337ab7"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z" />
  </svg>
);
let svg_b = (
  <svg
    width="10"
    height="10"
    fill="#337ab7"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" />
  </svg>
);
let svg_f = (
  <svg
    width="10"
    height="10"
    fill="#337ab7"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
  </svg>
);
let svg_ff = (
  <svg
    width="10"
    height="10"
    fill="#337ab7"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
  </svg>
);
