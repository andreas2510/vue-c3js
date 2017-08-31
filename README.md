# vue-c3js

vue-c3js is a set of Vue components for creating charts easily, powered by [c3js](https://github.com/c3js/c3).

For the time being, many features of c3js are not supported. Feature requests are welcome.

## Installation
```bash
npm install --save https://github.com/andreas2510/vue-c3js.git
```

## Quick Start
Include in your main script.
````
import VueC3Js from 'vue-c3js'
Vue.use(VueC3Js)
````

## Documentation

c3js has many options, not all of them are supported yet.

### Chart options

Size (`width` and `height`)
````vue
<c3-bar-chart id="mychart" :rows="rows" width="480" height="320">
````

Padding (top, right, bottom, left)
````vue
<c3-bar-chart id="mychart" :rows="rows" padding-top="50" padding-right="50" padding-bottom="50" padding-left="50">
````

Color pattern (`Array`)
````vue
<c3-bar-chart id="mychart" :rows="rows" :color-pattern="['#1f77b4', '#aec7e8']">
````

Transition duration (`Number`)
````vue
<c3-bar-chart id="mychart" :rows="rows" transition-duration="1500">
````

### Axis options
...

### Grid options
...

### Legend options
...

### Tooltip options
...

### Subchart options
...

### Zoom options
...

### Point options
...

### Line options
...

### Bar options
...

### Gauge options
...

### Pie options
...

### Donut options
...

## Todos
- Support padding for x, y, y2 axes
- Support tick for y, y2 axes
- Support default for x, y, y2 axes
- Support labels for x, y, y2 axes

## Limitations
- Load data from url [ref](http://c3js.org/reference.html#data-url)
