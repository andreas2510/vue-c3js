
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
        chartData: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
        ]
    },
    mounted() {
        var that = this
        setTimeout(function () {
            that.chartData = [
                ['data1', 130, 120, 150, 140, 160, 150],
                ['data2', 200, 130, 90, 240, 130, 220],
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
            this.tooltipTitle = 'Your data is ' + x
        }
    },
    computed: {

    }
})
