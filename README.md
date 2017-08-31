# vue-c3js

vue-c3js is a set of Vue components for creating charts easily, powered by [c3js](https://github.com/c3js/c3).

For the time being, many features of c3js are not supported. Feature requests are welcome.

## Installation
```bash
npm install --save https://github.com/andreas2510/vue-c3js.git
```

## Quick Start
Include in your main script.
```bash
import VueC3Js from './../dist/vue-c3js.js'
Vue.use(VueC3Js)
```

## Documentation

c3js has many options, not all of them are supported yet.

### Chart options
- size (width and height)
- padding (top, right, bottom, left)
- color pattern
- transition duration

### Limitations
- Load data from url [ref](http://c3js.org/reference.html#data-url)

### Todo
- Support padding for x, y, y2 axes
- Support tick for y, y2 axes
- Support default for x, y, y2 axes
- Support labels for x, y, y2 axes
