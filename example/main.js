
import Vue from 'vue'

Vue.config.devtools = true

// Vue.component('c3-chart', require('./components/VueC3Chart.vue'))
// Vue.component('c3-line', require('./components/VueC3Line'))
// Vue.component('c3-spline', require('./components/VueC3Spline'))

// import VueC3Chart from 'vue-c3js'
import VueC3Charts from './../src/index.js'
// import VueC3Charts from './../dist/vue-c3js.js'
Vue.use(VueC3Charts)

var app = new Vue({
    el: "#app",
    data: {
        message: "You loaded this page on " + new Date(),
        tooltipTitle: '',
        tooltipName: '',
        tooltipValue: '',
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
                [30, 210, 220],
                [60, 200, 200],
                [20, 240, 230],
                [50, 230, 210],
                [30, 200, 260],
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
    },
    computed: {

    }
})
