# react-datatable-bs
## Demo

https://sonsoleslp.github.io/react-datatable-bs/example/

## Getting started

```sh
npm install react-datatable-bs --save
```
This component is based on https://github.com/carlosrocha/react-data-components, but with some extra props that allow for further customization.

This component requires Bootstrap stylesheet and Font Awesome fonts, in addition
to the [stylesheet for headers](css/table-twbs.css). If you are using Webpack
and the `css-loader` you can also require the css
with `require('react-datatable-bs/css/table-twbs.css')`.

### Using the default implementation

The default implementation includes a filter for case insensitive global search,
pagination and page size.

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' },
  { title: 'Phone', prop: 'phone' }
];

var data = [
  { name: 'name value', city: 'city value', address: 'address value', phone: 'phone value' }
  // It also supports arrays
  // [ 'name value', 'city value', 'address value', 'phone value' ]
];

ReactDOM.render((
    <DataTable
      keys="name"
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
    />
  ), document.getElementById('root'));
```


### Additional configuration

If any of the component features are not wanted you can disable them by adding any of the following ( which by default are false):

* ``` disableFilter ``` Remove search box
* ``` disableRowChoice ``` Removes dropdown for page size
* ``` disablePagination ``` Removes page navigation

Also, you can customize the labels (useful for internacionalization)

* ``` pageSizeLabel ``` By default "Page size:"
* ``` searchLabel ``` By default "Filter:"
* ``` searchPlaceholder ``` By default empty

