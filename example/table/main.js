import React from 'react';
import ReactDOM from 'react-dom';
import Config from './../../src/config';
function buildTable(data) {
  const renderMapUrl = (val, row) =>
    <a href={`https://www.google.com/maps?q=${row['lat']},${row['long']}`}>
      Google Maps
    </a>;

  const tableColumns = [
    { title: 'Name', prop: 'name' },
    { title: 'City', prop: 'city' },
    { title: 'Street address', prop: 'street' },
    { title: 'Phone', prop: 'phone', defaultContent: '<no phone>' },
    { title: 'Map', render: renderMapUrl, className: 'text-center' },
  ];

  return <Config columns={tableColumns} initialData={data} />;
}

fetch('/data.json').then(res => res.json()).then(rows => {
  ReactDOM.render(buildTable(rows), document.getElementById('root'));
});
