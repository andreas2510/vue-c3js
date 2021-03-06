import Vue from 'vue'

Vue.config.devtools = true

// import VueC3Js from 'vue-c3js'
// import VueC3Js from './../src/index.js'
import VueC3Js from './../dist/vue-c3js.js'
Vue.use(VueC3Js)

var app = new Vue({
  el: "#app",
  data: {
    message: "You loaded this page on " + new Date(),
    tooltipTitle: '',
    tooltipName: '',
    tooltipValue: '',
    axisXTickValue: '',
    columns: [
      ['data1', 30, 20, 50, 40, 60, 50],
      ['data2', 200, 130, 90, 240, 130, 220],
      ['data3', 300, 200, 160, 400, 250, 250],
      ['data4', 200, 130, 90, 240, 130, 220],
      ['data5', 130, 120, 150, 140, 160, 150],
      ['data6', 90, 70, 20, 50, 60, 120],
    ],
    rows: [
      ['data1', 'data2', 'data3'],
      [90, 120, 300],
      [40, 160, 240],
      [50, 200, 290],
      [120, 160, 230],
      [80, 130, 300],
      [90, 220, 320],
    ],
    json: {
      data1: [130, 120, 150, 140, 160, 150],
      data2: [200, 130, 90, 240, 130, 220],
      data3: [300, 200, 160, 400, 250, 250]
    },

    // Examples
    rotatedExampleColumns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    scatterColumns: [
      ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
      ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
      ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
      ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
    ],
    pieColumns: [
      ['data1', 30],
      ['data2', 120],
    ],
    gaugeColumns: [
      ['data', 91.4]
    ],
    legendInset: {
      anchor: 'top-left',
      x: 10,
      y: 0,
      step: undefined
    },
    tooltipPosition: {
      top: 0,
      left: 0
    },

    // API
    xGridLines: [
      {value: 1, text: 'Lable 1'},
      {value: 3, text: 'Lable 3', position: 'middle'},
      {value: 4.5, text: 'Lable 4.5', position: 'start'}
    ],
    yGridLines: [
      {value: 50, text: 'Lable 50 for y'},
      {value: 1300, text: 'Lable 1300 for y2', axis: 'y2', position: 'start'},
      {value: 350, text: 'Lable 350 for y', position: 'middle'}
    ],
    regions: [
      {axis: 'x', start: 2, end: 4, class: 'regionX'},
      {axis: 'y', end: 150, class: 'regionY'}
    ],
  },
  mounted() {
    var that = this
    setTimeout(function () {
      that.columns = [
        ['data1', 130, 120, 150, 140, 160, 150],
        ['data2', 200, 130, 90, 240, 130, 220],
      ]
      that.rows = [
        ['data1', 'data2', 'data3'],
        [50, 280, 210],
        [30, 110, 220],
        [60, 200, 100],
        [20, 140, 130],
        [50, 130, 210],
        [30, 200, 160],
      ]
    }, 5000)
  },
  methods: {
    chartInit: function() {
      console.log('chartInit')
    },
    dataCallbackTest: function(d) {
      console.log('dataCallbackTest')
      console.log(d)
    },
    formatTooltipTitle: function(x) {
      this.tooltipTitle = 'Your tooltip title with data: ' + x
    },
    formatTooltipName: function(name, ratio, id, index) {
      this.tooltipName = 'Custom ' + name
    },
    formatTooltipValue: function(value, ratio, id, index) {
      this.tooltipValue = '€' + value
    },
    axisXTickFormatted: function(x) {
      console.log(x)
      this.axisXTickValue = '€' + x
    },
  }
})
