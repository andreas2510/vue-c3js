# vue-c3js

vue-c3js is a set of Vue components for creating charts easily, powered by [c3js](https://github.com/c3js/c3).

For the time being, many features of c3js are not supported. Feature requests are welcome.

## Installation
```bash
npm install --save https://github.com/andreas2510/vue-c3js.git
```

## Quick Start
Import the module in your main script.
````
import VueC3Js from 'vue-c3js'
Vue.use(VueC3Js)
````

Then use it within your HTML or vue template.
````vue
<c3-bar-chart id="mychart" :columns="columns">
````

At the very least, you need to specify the `id` of the component and also provide the chart data through **one of the following props**: `columns`, `rows` or `json`.

## Props
The idea is to pass configuration options to c3js through props. c3js has many options, not all of them are supported yet.

### Chart options
Id (`String` - **Required**)
````vue
<c3-bar-chart id="mychart">
````

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

#### Transition duration (`Number`)
Set duration of transition (in milliseconds) for chart animation.
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
