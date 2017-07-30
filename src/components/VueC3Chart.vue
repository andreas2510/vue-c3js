<style>
    @import url("./../../node_modules/c3/c3.min.css");
</style>

<template>
    <div>
        <div><slot></slot></div>
        <div v-bind:id="bindTo"></div>
    </div>
</template>

<script>

    import VueC3Line from './VueC3Line'
    import VueC3Spline from './VueC3Spline'

    var c3 = require("c3")

    export default {

        components: { VueC3Line, VueC3Spline },

        name: "c3-chart",

        props: {
            id: {
                type: String,
                required: true
            },
            chartData: {
                type: Array,
                required: true
            },

            // Chart options
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            paddingTop: {
                type: Number
            },
            paddingRight: {
                type: Number
            },
            paddingBottom: {
                type: Number
            },
            paddingLeft: {
                type: Number
            },
            colorPattern: {
                type: Array
            },
            interactionEnabled: {
                type: Boolean
            },
            transitionDuration: {
                type: Number
            },

            // Data
            labels: {
                type: Boolean
            },
            type: {
                type: String
            },

            // Axis
            axisRotated: {
                type: Boolean
            },
            showXAxis: {
                type: Boolean
            },
            showYAxis: {
                type: Boolean
            },
            axisXTickCentered: {
                type: Boolean
            },
            axisXTickCount: {
                type: Number
            },
            axisXTickFit: {
                type: Boolean
            },
            axisXTickRotate: {
                type: Number
            },
            axisXTickOuter: {
                type: Boolean
            },
            axisXTickMax: {
                type: Number
            },
            axisXTickMin: {
                type: Number
            },

            // Grid
            showGridX: {
                type: Boolean
            },
            showGridY: {
                type: Boolean
            },

            // Legend
            showLegend: {
                type: Boolean
            },
            legendPosition: {
                type: String
            },

            // Tooltip
            showTooltip: {
                type: Boolean
            },
            tooltipGrouped: {
                type: Boolean
            },
            tooltipFormattedTitle: {
                type: String,
            },

            // Subchart
            showSubchart: {
                type: Boolean
            },
            subchartHeight: {
                type: Number
            },

            // Zoom
            zoomEnabled: {
                type: Boolean
            },
            zoomRescale: {
                type: Boolean
            },
            zoomExtent: {
                type: Array
            },

            // Point
            showPoint: {
                type: Boolean
            },
            pointRadius: {
                type: Number
            },
            pointFocusExpandEnabled: {
                type: Boolean
            },
            pointFocusExpandRadius: {
                type: Number
            },
            pointFocusSelectRadius: {
                type: Number
            },
        },

        data: function data() {
            return {
                isReady: false,
                isLoading: false,

                // Options
                bindTo: '',

                data: {
                    // url: "",
                    // json: [],
                    // keys: [],
                    // mimeType: '', // json

                    // rows: [],
                    columns: [],

                    names: {},
                    classes: {},
                    // groups: {},
                    // axes: {},
                    label: "",
                    type: "",
                    types: {},
                    // labels: false,
                    // order: false,
                    // regions: {},
                    colors: {},
                },

            };
        },

        created() {
            this.bindTo = this.id

            this.$on('c3-chart-element-mounted', function(type, prop, options) {

                this.data.types[prop] = type

                if (options.hasOwnProperty('color') && undefined !== options.color) {
                    this.data.colors[prop] = options.color
                }

                if (options.hasOwnProperty('name') && undefined !== options.name) {
                    this.data.names[prop] = options.name
                }

                if (options.hasOwnProperty('customClass') && undefined !== options.customClass) {
                    this.data.classes[prop] = options.customClass
                }
            })
        },

        mounted() {
            this.data.columns = this.chartData

            var chart = c3.generate(this.options)

            var el = document.getElementById(this.bindTo)
            el.chartdata = chart

            this.isReady = true
        },

        methods: {
            /**
             * [propExists description]
             * @param  {[type]} prop [description]
             * @return {[type]}      [description]
             */
            propExists: function(prop) {
                return (undefined !== prop && null !== prop && '' !== prop) ? true : false
            },

            /**
             * [mergeObjects description]
             * @param  {[type]} obj [description]
             * @param  {[type]} src [description]
             * @return {[type]}     [description]
             */
            mergeObjects: function(obj, src) {
                Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
                return obj;
            },

            /**
             * [refresh description]
             * @return {[type]} [description]
             */
            refresh: function() {
                var chart = document.getElementById(this.bindTo).chartdata
                chart.load({
                    columns: this.data.columns
                })
            }
        },

        computed: {

            chartOptions: function() {
                var _chartOptions = {}
                _chartOptions.size = {}
                _chartOptions.padding = {}
                _chartOptions.color = {}
                _chartOptions.interaction = {}
                _chartOptions.transition = {}

                if (this.propExists(this.width)) {
                    _chartOptions.size.width = this.width
                }
                if (this.propExists(this.height)) {
                    _chartOptions.size.height = this.height
                }
                if (this.propExists(this.paddingTop)) {
                    _chartOptions.padding.top = this.paddingTop
                }
                if (this.propExists(this.paddingRight)) {
                    _chartOptions.padding.right = this.paddingRight
                }
                if (this.propExists(this.paddingBottom)) {
                    _chartOptions.padding.bottom = this.paddingBottom
                }
                if (this.propExists(this.paddingLeft)) {
                    _chartOptions.padding.left = this.paddingLeft
                }
                if (this.propExists(this.colorPattern)) {
                    _chartOptions.color.pattern = this.colorPattern
                }
                if (this.propExists(this.interactionEnabled)) {
                    _chartOptions.interaction.enabled = this.interactionEnabled
                }
                if (this.propExists(this.transitionDuration)) {
                    _chartOptions.transition.duration = this.transitionDuration
                }

                return _chartOptions
            },

            dataOptions: function() {
                var _dataOptions = {}

                if (this.propExists(this.labels)) {
                    _dataOptions.labels = this.labels
                }
                if (this.propExists(this.type)) {
                    _dataOptions.type = this.type
                }

                return _dataOptions
            },

            axisOptions: function() {
                var _axisOptions = {}
                _axisOptions.x = {}
                _axisOptions.x.tick = {}
                _axisOptions.y = {}

                if (this.propExists(this.axisRotated)) {
                    _axisOptions.rotated = this.axisRotated
                }
                if (this.propExists(this.showXAxis)) {
                    _axisOptions.x.show = this.showXAxis
                }
                if (this.propExists(this.axisXTickCentered)) {
                    _axisOptions.x.tick.centered = this.axisXTickCentered
                }
                if (this.propExists(this.showYAxis)) {
                    _axisOptions.y.show = this.showYAxis
                }

                return _axisOptions
            },

            gridOptions: function() {
                var _gridOptions = {}
                _gridOptions.x = {}
                _gridOptions.y = {}

                if (this.propExists(this.showGridX)) {
                    _gridOptions.x.show = this.showGridX
                }
                if (this.propExists(this.showGridY)) {
                    _gridOptions.y.show = this.showGridY
                }

                return _gridOptions
            },

            legendOptions: function() {
                var _legendOptions = {}

                if (this.propExists(this.showLegend)) {
                    _legendOptions.show = this.showLegend
                }
                if (this.propExists(this.legendPosition)) {
                    _legendOptions.position = this.legendPosition
                }

                return _legendOptions
            },

            tooltipOptions: function() {
                var _tooltipOptions = {}
                _tooltipOptions.format = {}

                if (this.propExists(this.showTooltip)) {
                    _tooltipOptions.show = this.showTooltip
                }
                if (this.propExists(this.tooltipGrouped)) {
                    _tooltipOptions.grouped = this.tooltipGrouped
                }

                var that = this

                _tooltipOptions.format = {
                    title: function (x) {
                        // that.$emit('tooltip-format-title', x)
                        if (that.propExists(that.tooltipFormattedTitle)) {
                            return that.tooltipFormattedTitle
                        } else {
                            return x
                        }
                    }
                }

                return _tooltipOptions
            },

            subchartOptions: function() {
                var _subchartOptions = {}
                _subchartOptions.size = {}

                if (this.propExists(this.showSubchart)) {
                    _subchartOptions.show = this.showSubchart
                }
                if (this.propExists(this.subchartHeight)) {
                    _subchartOptions.size.height = this.subchartHeight
                }

                return _subchartOptions
            },

            zoomOptions: function() {
                var _zoomOptions = {}

                if (this.propExists(this.zoomEnabled)) {
                    _zoomOptions.enabled = this.zoomEnabled
                }
                if (this.propExists(this.zoomRescale)) {
                    _zoomOptions.rescale = this.zoomRescale
                }
                if (this.propExists(this.zoomExtent)) {
                    _zoomOptions.extent = this.zoomExtent
                }

                return _zoomOptions
            },

            pointOptions: function() {
                var _pointOptions = {}
                _pointOptions.focus = {}
                _pointOptions.focus.expand = {}
                _pointOptions.select = {}

                if (this.propExists(this.showPoint)) {
                    _pointOptions.show = this.showPoint
                }
                if (this.propExists(this.pointRadius)) {
                    _pointOptions.r = this.pointRadius
                }
                if (this.propExists(this.pointFocusExpandEnabled)) {
                    _pointOptions.focus.expand.enabled = this.pointFocusExpandEnabled
                }
                if (this.propExists(this.pointFocusExpandRadius)) {
                    _pointOptions.focus.expand.r = this.pointFocusExpandRadius
                }
                if (this.propExists(this.pointFocusSelectRadius)) {
                    _pointOptions.select.r = this.pointFocusSelectRadius
                }

                return _pointOptions
            },

            chartCallbacks: function() {
                var that = this
                return {
                    oninit: function () {
                        that.$emit('oninit')
                    },
                    onrendered: function () {
                        that.$emit('onrendered')
                    },
                    onmouseover: function () {
                        that.$emit('onmouseover')
                    },
                    onmouseout: function () {
                        that.$emit('onmouseout')
                    },
                    onresize: function () {
                        that.$emit('onresize')
                    },
                    onresized: function () {
                        that.$emit('onresized')
                    },
                }
            },

            dataCallbacks: function() {
                var that = this
                return {
                    onclick: function (d, element) {
                        that.$emit('data-onclick', d)
                        // console.log(d)
                        // console.log(element)
                    },
                    onmouseover: function (d) {
                        that.$emit('data-onmouseover', d)
                    },
                    onmouseout: function (d) {
                        that.$emit('data-onmouseout', d)
                    },
                }
            },

            options: function() {
                var _options = {}
                _options.bindto = '#' + this.bindTo
                _options.data  = this.data
                _options.data.labels = this.labels
                _options.data.type = this.type
                this.mergeObjects(_options, this.chartOptions)
                //this.mergeObjects(_options, this.chartCallbacks)
                this.mergeObjects(_options.data, this.dataOptions)
                //this.mergeObjects(_options.data, this.dataCallbacks)

                _options.axis = this.axisOptions
                _options.grid = this.gridOptions
                _options.legend = this.legendOptions
                _options.tooltip = this.tooltipOptions
                _options.point = this.pointOptions
                _options.subchart = this.subchartOptions
                _options.zoom = this.zoomOptions

                return _options
            },

            /**
             * Serialized chart data.
             * @return {[type]} [description]
             */
            serializedChartData: function() {
                return JSON.stringify(this.chartData)
            }
        },

        filters: {
            /**
             * Round value to two decimal float.
             * @param  {[type]} str [description]
             * @return {[type]}     [description]
             */
            round: function (str) {
                return parseFloat(str).toFixed(2)
            },
        },

        watch: {

            'data.columns': function(newVal, oldVal) {
                if (this.isReady) {
                    this.refresh()
                }
            },

            chartData: function(newVal, oldVal) {
                this.data.columns = newVal
            },

            /**
             * [chartData description]
             * @param  {[type]} newVal [description]
             * @param  {[type]} oldVal [description]
             * @return {[type]}        [description]
             */
            columns: function(newVal, oldVal) {
                var that  = this
                var chart = $('#' + this.id).data('c3-chart')
                that.isLoading = true
                setTimeout(function () {
                    chart.load({
                        columns: newVal
                    })
                    that.isLoading = false
                }, 1000)

                // var chartLegendFocus = {}
                // newVal.forEach(function (key) {
                //     chartLegendFocus[key] = 0
                // })
                // this.chartLegendFocus = chartLegendFocus

                // this.chartLegendItems = []
                // for (var i = 0; i < newVal.length; i++) {
                //     var legend = newVal[i]
                //     this.chartLegendItems.push(legend[0])
                // }
            },
        },
    }
</script>
