# vue-c3js

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

vue-c3js is a set of Vue components for creating charts easily, powered by [c3js](https://github.com/c3js/c3).

For the time being, many features of c3js are not supported. Feature requests are welcome.

## Installation
```bash
npm install --save https://github.com/andreas2510/vue-c3js.git
```

## Quick Start
Import the module in your main script.
```javascript
import VueC3Js from 'vue-c3js'
Vue.use(VueC3Js)
```

Then use it within your HTML or vue template. At the very least, you need to specify the `id` of the component and also provide the chart data through **one of the following props**: `columns`, `rows` or `json`.
```javascript
// In you script/vue template.
var columns = [
  ['data1', 30, 20, 50, 40, 60, 50],
  ['data2', 200, 130, 90, 240, 130, 220],
  ['data3', 300, 200, 160, 400, 250, 250],
  ['data4', 200, 130, 90, 240, 130, 220],
  ['data5', 130, 120, 150, 140, 160, 150],
  ['data6', 90, 70, 20, 50, 60, 120],
]
```
```vue
<!-- In your HTML/Vue template -->
<c3-bar-chart id="mychart" :columns="columns">
```

## Example

### Vue template
````vue
<template>
  <div id="app">
    <p>Welcome to your Vue.js app!</p>
    <c3-bar-chart id="mychart" :columns="columns">
  </div>
</template>

<script>
  export default {
    name: 'MainApp',
    data: {
      columns = [
        ['data1', 30, 20, 50, 40, 60, 50],
        ['data2', 200, 130, 90, 240, 130, 220],
        ['data3', 300, 200, 160, 400, 250, 250],
        ['data4', 200, 130, 90, 240, 130, 220],
        ['data5', 130, 120, 150, 140, 160, 150],
        ['data6', 90, 70, 20, 50, 60, 120],
      ]
    }
  }
</script>
````

### HTML inline-template

## Props
The idea is to pass configuration options to c3js through props. c3js has many options, not all of them are supported yet.

### Chart options
| Prop Name | Type | Description | c3js docs |
|-----------|------|-------------|-----------|
| id | `String` **Required** | A string by which to identify the component. | [bindto](http://c3js.org/reference.html#bindto) |
| width | `Number` | The widht od the chart. | [size.width](http://c3js.org/reference.html#size-width) |
| height | `Number` | The widht od the chart. | [size.height](http://c3js.org/reference.html#size-height) |
| paddingTop | `Number` | paddingTop. | [padding.top](http://c3js.org/reference.html#padding-top) |
| paddingRight | `Number` | paddingRight. | [padding.right](http://c3js.org/reference.html#padding-right) |
| paddingBottom | `Number` | paddingBottom. | [padding.bottom](http://c3js.org/reference.html#padding-bottom) |
| paddingLeft | `Number` | paddingLeft. | [padding.left](http://c3js.org/reference.html#padding-left) |
| colorPattern | `Array` | colorPattern. | [color.pattern](http://c3js.org/reference.html#color-pattern) |
| disableInteraction | `Boolean` | disableInteraction. | [interaction.enabled](http://c3js.org/reference.html#interaction-enabled) |
| transitionDuration | `Number` | transitionDuration. | [transition.duration](http://c3js.org/reference.html#transition-duration) |

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
