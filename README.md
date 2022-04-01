<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ranks

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute ranks for values of an array-like object.



<section class="usage">

## Usage

To use in Observable,

```javascript
ranks = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-ranks@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-ranks@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ranks;
})();
</script>
```

#### ranks( arr\[, opts] )

Returns the sample ranks of the elements in `arr`, which can be either an [`array`][mdn-array] or [`typed array`][mdn-typed-array].

```javascript
var arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ];
var out = ranks( arr );
// returns [ 2, 3, 5, 1, 4 ]

// Ties are averaged:
arr = [ 2, 2, 1, 4, 3 ];
out = ranks( arr );
// returns [ 2.5, 2.5, 1, 5, 4 ];

// Missing values are placed last:
arr = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
out = ranks( arr );
// returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]
```

The function accepts the following options:

-   **method**: `string` indicating how ties are handled. Can be one of the following values: `'average'`, `'min'`, `'max'`, `'ordinal'` and `'dense'`.  Default: `'average'`.
-   **missing**: `string` specifying how missing values are handled. Must be either `'last'`, `'first'` or `'remove'`. Default: `'last'`.
-   **encoding**: `array` holding all values which will be regarded as missing values. Default: `[ NaN, null]`.

When all elements of the `array` are different, the ranks are uniquely determined. When there are equal elements (called _ties_), the `method` option determines how they are handled. The default, `'average'`, replace the ranks of the ties by their mean. Other possible options are `'min'` and `'max'`, which replace the ranks of the ties by their minimum and maximum, respectively. `'dense'` works like `'min'`, with the difference that the next highest element after a tie is assigned the next smallest integer. Finally, `ordinal` gives each element in `arr` a distinct rank, according to the position they appear in.

```javascript
var data = [ 2, 2, 1, 4, 3 ];

// Max method:
var out = ranks( data, {
    'method': 'max'
});
// returns [ 3, 3, 1, 5, 4 ]

// Min method:
out = ranks( data, {
    'method': 'min'
});
// returns [ 2, 2, 1, 5, 4 ]

// Ordinal method
out = ranks( data, {
    'method': 'ordinal'
});
// returns [ 2, 3, 1, 5, 4 ]

// Dense method:
out = [ 2, 2, 1, 4, 3 ];
out = ranks( data, {
    'method': 'dense'
});
// returns [ 2, 2, 1, 4, 3 ]
```

The `missing` option is used to specify how to handle missing data. By default, `NaN` or `null` are treated as missing values. `'last'`specifies that missing values are placed last, `'first'` that the are assigned the lowest ranks and `'remove'` means that they are removed from the array before the ranks are calculated.

```javascript
var data = [ NaN, 2, 2, 1, 4, 3, null, null ];

var out = ranks( data, {
    'missing': 'first'
});
// returns [ 1, 5.5, 5.5, 4, 8, 7, 2, 3 ]

out = ranks( data, {
    'missing': 'last'
});
// returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]

out = ranks( data, {
    'missing': 'remove'
});
// returns [ 2.5, 2.5, 1, 5, 4 ]
```

Custom encoding for missing values is supported via the `encoding` option, which allows to supply the function with an `array` of values which should be treated as missing.

```javascript
var Int32Array = require( '@stdlib/array-int32' );

var data = new Int32Array( [ 2, 1, -999, 3, 4 ] );

var out = ranks( data, {
    'encoding': [ -999 ]
});
// returns [ 2, 1, 5, 3, 4 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-ranks@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

var data;
var out;
var i;

// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = round( randu()*10.0 );
}

out = ranks( data );
// returns <array>

// Typed arrays...
data = new Int32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = randu() * 10.0;
}

out = ranks( data );
// returns <array>

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-ranks.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-ranks

[test-image]: https://github.com/stdlib-js/stats-ranks/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-ranks/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-ranks/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-ranks?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-ranks.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-ranks/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-ranks/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-ranks/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-ranks/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-ranks/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
