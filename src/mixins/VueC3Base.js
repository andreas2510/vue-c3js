/*
 * Base mixin for the charts. The mixin deals with common things across the
 * line of components such as options, data etc.
 */

var c3 = require("c3")

export default {

    replace: true,

    props: {
        id: {
            type: String,
            required: true
        },

        // Chart options
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        // paddingTop: {
        //     type: Number
        // },
        // paddingRight: {
        //     type: Number
        // },
        // paddingBottom: {
        //     type: Number
        // },
        // paddingLeft: {
        //     type: Number
        // },
        colorPattern: {
            type: Array
        },
        disableInteraction: {
            type: Boolean
        },
        transitionDuration: {
            type: Number
        },

        // Data
        columns: {
            type: Array,
            default: null
        },
        rows: {
            type: Array,
            default: null
        },
        json: {
            type: Object,
            default: null
        },
        dataX: {
            type: String
        },
        dataXFormat: {
            type: String
        },
        showLabels: {
            type: Boolean
        },
        names: {
            type: Object
        },
        classes: {
            type: Object
        },
        axes: {
            type: Object
        },
        labels: {
            type: Boolean
        },
        order: {
            type: String
        },
        groups: {
            type: Array
        },
        colors: {
            type: Object
        },
        enableSelection: {
            type: Boolean
        },
        selectionGrouped: {
            type: Boolean
        },
        singleSelection: {
            type: Boolean
        },
        selectionDraggable: {
            type: Boolean
        },
        emptyLabelText: {
            type: String
        },

        // Axis
        axisRotated: {
            type: Boolean
        },
        hideXAxis: {
            type: Boolean
        },
        axisXType: {
            type: String // timeseries, category, indexed
        },
        axisXCategories: {
            type: Array
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
        axisXTickValues: {
            type: Array
        },
        axisXTickRotate: {
            type: Number
        },
        axisXTickInner: {
            type: Boolean
        },
        axisXTickFormatted: {
            type: String
        },
        hideYAxis: {
            type: Boolean
        },

        // Grid
        showGridX: {
            type: Boolean
        },
        showGridY: {
            type: Boolean
        },

        // Legend
        hideLegend: {
            type: Boolean
        },
        legendPosition: {
            type: String
        },

        // Tooltip
        hideTooltip: {
            type: Boolean
        },
        ungroupTooltip: {
            type: Boolean
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

        // Pint
        hidePoint: {
            type: Boolean
        },
        pointRadius: {
            type: Number
        },
        disablePointFocusExpand: {
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
            bindTo: '',
            chartType: 'line'
        };
    },

    created() {
        this.bindTo = 'vuec3-chart-' + this.id
    },

    mounted() {
        this.generateChart()
        this.isReady = true
    },

    methods: {

        // Set of utility functions used to check and format
        // props and data for c3js

        propExists: function(prop) {
            return (undefined !== prop && null !== prop) ? true : false
            return (undefined !== prop && null !== prop && '' !== prop) ? true : false
        },
        mergeObjects: function(obj, src) {
            Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
            return obj;
        },
        removeEmptyKeys: function(objct) {
            var that = this
            var obj = objct
            Object.keys(obj).forEach(key => {
                if (obj[key] && typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
                    that.removeEmptyKeys(obj[key])
                } else if (typeof obj[key] !== 'boolean' && typeof obj[key] !== 'number' && (null === obj[key] || undefined === obj[key] || Object.keys(obj[key]).length === 0)) {
                    delete obj[key]
                }
            });
            return obj;
        },

        // Chart Object
        // Stores the chart data to an accessible format to make available
        // across the Vue component.

        setChartObject: function(chart) {
            var el = document.getElementById(this.bindTo)
            el.chartdata = chart
        },
        getChartObject: function() {
            return document.getElementById(this.bindTo).chartdata
        },

        // c3js
        // Wrapper methods around c3js API.

        generateChart: function() {
            var chart = c3.generate(this.options)
            this.setChartObject(chart)
        },
        refresh: function() {
            //this.chart.unload()
            var _loadOptions = this.options.data // _loadOptions.columns = this.drawableColumns
            this.chart.load(_loadOptions)
            // this.chart.flush()
        },
    },

    computed: {

        // Chart Object

        chart: function() {
            return this.getChartObject()
        },

        // Data

        drawableColumns: function() {
            return this.propExists(this.columns) ? this.columns : []
        },
        drawableRows: function() {
            return this.propExists(this.rows) ? this.rows : []
        },
        drawableJson: function() {
            return this.propExists(this.json) ? this.json : []
        },

        // Options

        options: function() {
            var self = this
            var _options = {}
            _options.bindto = '#' + this.bindTo // document.getElementById('myContainer')

            // ----------------------------------------------------------------
            // Chart Options
            // ----------------------------------------------------------------

            if (this.propExists(this.width) || this.propExists(this.height)) {
                _options.size = {}
                if (this.propExists(this.width)) {
                    _options.size.width = this.width
                }
                if (this.propExists(this.height)) {
                    _options.size.height = this.height
                }
            }
            if (this.propExists(this.colorPattern)) {
                _options.color = {}
                _options.color.pattern = this.colorPattern
            }
            if (this.disableInteraction) {
                _options.interaction = {}
                _options.interaction.enabled = !this.disableInteraction
            }
            if (this.propExists(this.transitionDuration)) {
                _options.transition = {}
                _options.transition.duration = this.transitionDuration
            }

            _options.oninit = function () { self.$emit('oninit') }
            _options.onrendered = function () { self.$emit('onrendered') }
            _options.onmouseover = function () { self.$emit('onmouseover') }
            _options.onmouseout = function () { self.$emit('onmouseout') }
            _options.onresize = function () { self.$emit('onresize') }
            _options.onresized = function () { self.$emit('onresized') }

            // ----------------------------------------------------------------
            // Data Options
            // ----------------------------------------------------------------

            // var _dataOptions = {}

            // if (this.labels) {
            //     _dataOptions.labels = this.labels
            // }

            var _drawableData = {}

            if (this.propExists(this.chartType)) {
                _drawableData.type = this.chartType
            }

            if (this.propExists(this.columns)) {
                _drawableData.columns = this.drawableColumns
            }
            if (this.propExists(this.rows)) {
                _drawableData.rows = this.drawableRows
            }
            if (this.propExists(this.dataX)) {
                _drawableData.x = this.dataX
            }
            if (this.propExists(this.dataXFormat)) {
                _drawableData.xFormat = this.dataXFormat
            }

            if (this.propExists(this.names)) {
                _drawableData.names = this.names
            }
            if (this.propExists(this.classes)) {
                _drawableData.classes = this.classes
            }
            if (this.propExists(this.groups)) {
                _drawableData.groups = this.groups
            }
            if (this.propExists(this.axes)) {
                _drawableData.axes = this.axes
            }
            if (this.labels) {
                _drawableData.labels = this.labels
            }
            if (this.propExists(this.order)) {
                _drawableData.order = this.order
            }
            if (this.propExists(this.colors)) {
                _drawableData.colors = this.colors
            }

            if (this.enableSelection || this.selectionGrouped || this.singleSelection || this.selectionDraggable) {
                _drawableData.selection = {}
                if (this.enableSelection) {
                    _drawableData.selection.enabled = this.enableSelection
                }
                if (this.selectionGrouped) {
                    _drawableData.selection.grouped = this.selectionGrouped
                }
                if (this.singleSelection) {
                    _drawableData.selection.multiple = !this.singleSelection
                }
                if (this.selectionDraggable) {
                    _drawableData.selection.draggable = this.selectionDraggable
                }
            }

            if (this.propExists(this.emptyLabelText)) {
                _drawableData.empty = {}
                _drawableData.empty.label = {}
                _drawableData.empty.label.text = this.emptyLabelText
            }

            _drawableData.onclick = function (d, element) { self.$emit('data-onclick', d) }
            _drawableData.onmouseover = function (d, element) { self.$emit('data-onmouseover', d) }
            _drawableData.onmouseover = function (d, element) { self.$emit('data-onmouseout', d) }

            // ----------------------------------------------------------------
            // Axis Options
            // ----------------------------------------------------------------

            var _axisOptions = {}

            if (this.axisRotated) {
                _axisOptions.rotated = this.axisRotated
            }
            if (this.hideXAxis || this.propExists(this.axisXType) || this.xAxisLocaltime || this.propExists(this.axisXCategories) ||
                this.axisXTickInner || this.axisXTickFit || this.axisXTickCentered || this.propExists(this.axisXTickCount) || this.propExists(this.axisXTickRotate) || this.propExists(this.axisXTickValues)) {
                _axisOptions.x = {}
                if (this.hideXAxis) {
                    _axisOptions.x.show = !this.hideXAxis
                }
                if (this.propExists(this.axisXType)) {
                    _axisOptions.x.type = this.axisXType
                }
                if (this.xAxisLocaltime) {
                    _axisOptions.x.localtime = this.xAxisLocaltime
                }
                if (this.propExists(this.axisXCategories)) {
                    _axisOptions.x.categories = this.axisXCategories
                }

                if (this.axisXTickInner || this.axisXTickFit || this.axisXTickCentered || this.propExists(this.axisXTickCount) || this.propExists(this.axisXTickRotate) || this.propExists(this.axisXTickValues)) {
                    _axisOptions.x.tick = {}
                    if (this.axisXTickCentered) {
                        _axisOptions.x.tick.centered = this.axisXTickCentered
                    }
                    if (this.axisXTickFit) {
                        _axisOptions.x.tick.fit = this.axisXTickFit
                    }
                    if (this.axisXTickInner) {
                        _axisOptions.x.tick.outer = !this.axisXTickInner
                    }
                    if (this.propExists(this.axisXTickValues)) {
                        _axisOptions.x.tick.values = this.axisXTickValues
                    }
                    if (this.propExists(this.axisXTickRotate)) {
                        _axisOptions.x.tick.rotate = this.axisXTickRotate
                    }
                    if (this.propExists(this.axisXTickCount)) {
                        _axisOptions.x.tick.count = this.axisXTickCount
                    }
                    // _axisOptions.x.tick.format = function (x) {
                    //     self.$emit('axis-x-tick-format', x)
                    //     if (self.propExists(self.axisXTickFormatted)) {
                    //         return self.axisXTickFormatted
                    //     }
                    //     return x
                    // }
                }
            }
            if (this.hideYAxis) {
                _axisOptions.y = {}
                _axisOptions.y.show = !this.hideYAxis
            }

            // ----------------------------------------------------------------
            // Grid Options
            // ----------------------------------------------------------------

            var _gridOptions = {}

            if (this.showGridX) {
                _gridOptions.x = {}
                _gridOptions.x.show = this.showGridX
            }

            if (this.showGridY) {
                _gridOptions.y = {}
                _gridOptions.y.show = this.showGridY
            }

            // ----------------------------------------------------------------
            // Legend Options
            // ----------------------------------------------------------------

            var _legendOptions = {}

            if (this.hideLegend) {
                _legendOptions.hide = this.hideLegend
            }
            if (this.propExists(this.legendPosition)) {
                _legendOptions.position = this.legendPosition
            }

            _legendOptions.item = {}
            _legendOptions.item.onclick = function (id) { self.$emit('legend-onclick', id) }
            _legendOptions.item.onmouseover = function (id) { self.$emit('legend-onmouseover', id) }
            _legendOptions.item.onmouseover = function (id) { self.$emit('legend-onmouseout', id) }

            // ----------------------------------------------------------------
            // Tooltip Options
            // ----------------------------------------------------------------

            var _tooltipOptions = {}

            if (this.hideTooltip) {
                _tooltipOptions.show = !this.hideTooltip
            }
            if (this.ungroupTooltip) {
                _tooltipOptions.grouped = !this.ungroupTooltip
            }

            // ----------------------------------------------------------------
            // Subchart Options
            // ----------------------------------------------------------------

            var _subchartOptions = {}

            if (this.showSubchart) {
                _subchartOptions.show = this.showSubchart
            }
            if (this.propExists(this.subchartHeight)) {
                _subchartOptions.size = {}
                _subchartOptions.size.height = this.subchartHeight
            }

            // ----------------------------------------------------------------
            // Zoom Options
            // ----------------------------------------------------------------

            var _zoomOptions = {}

            if (this.propExists(this.zoomEnabled)) {
                _zoomOptions.enabled = this.zoomEnabled
            }
            if (this.propExists(this.zoomRescale)) {
                _zoomOptions.rescale = this.zoomRescale
            }

            _zoomOptions.onzoom = function (domain) { self.$emit('onzoom', domain) }
            _zoomOptions.onzoomstart = function (domain) { self.$emit('onzoomstart', domain) }
            _zoomOptions.onzoomend = function (domain) { self.$emit('onzoomend', domain) }

            // ----------------------------------------------------------------
            // Point Options
            // ----------------------------------------------------------------

            var _pointOptions = {}

            if (this.hidePoint) {
                _pointOptions.show = !this.hidePoint
            }
            if (this.propExists(this.pointRadius)) {
                _pointOptions.r = this.pointRadius
            }
            if (this.disablePointFocusExpand || this.propExists(this.pointFocusExpandRadius)) {
                _pointOptions.focus = {}
                _pointOptions.focus.expand = {}
                if (this.disablePointFocusExpand) {
                    _pointOptions.focus.expand.enabled = !this.disablePointFocusExpand
                }
                if (this.propExists(this.pointFocusExpandRadius)) {
                    _pointOptions.focus.expand.r = this.pointFocusExpandRadius
                }
            }
            if (this.propExists(this.pointFocusSelectRadius)) {
                _pointOptions.select = {}
                _pointOptions.select.r = this.pointFocusSelectRadius
            }

            // ----------------------------------------------------------------
            // Line Options
            // ----------------------------------------------------------------

            var _lineOptions = {}

            if (this.propExists(this.connectNull) && this.connectNull) {
                _lineOptions.connectNull = this.connectNull
            }

            // ----------------------------------------------------------------
            // Bar Options
            // ----------------------------------------------------------------

            var _barOptions = {}

            if (this.propExists(this.barWidth) && this.barWidth) {
                _barOptions.width = parseInt(this.barWidth)
            }
            if (this.propExists(this.barWidthRatio) && this.barWidthRatio) {
                _barOptions.width = {}
                _barOptions.width.ratio = this.barWidthRatio
            }
            if (this.notZeroBased) {
                _barOptions.zerobased = !this.notZeroBased
            }

            var _gaugeOptions = {}

            if (this.chartType == 'gauge' && this.hideLabel) {
                _gaugeOptions.label = {}
                _gaugeOptions.label.show = !this.hideLabel
            }

            if (this.chartType == 'gauge' && this.disableExpand) {
                _gaugeOptions.expand = !this.disableExpand
            }

            var _pieOptions = {}

            if (this.chartType == 'pie' && this.hideLabel) {
                _pieOptions.label = {}
                _pieOptions.label.show = !this.hideLabel
            }

            if (this.chartType == 'pie' && this.disableExpand) {
                _pieOptions.expand = !this.disableExpand
            }

            var _donutOptions = {}

            if (this.chartType == 'donut' && this.hideLabel) {
                _donutOptions.label = {}
                _donutOptions.label.show = !this.hideLabel
            }

            if (this.chartType == 'donut' && this.disableExpand) {
                _donutOptions.expand = !this.disableExpand
            }

            if (this.chartType == 'pie' || this.chartType == 'donut' || this.chartType == 'gauge') {

            }

            // ----------------------------------------------------------------
            // Consolidate Options
            // ----------------------------------------------------------------

            _options.data = _drawableData
            _options.axis = _axisOptions
            _options.grid = _gridOptions
            _options.legend = _legendOptions
            _options.tooltip = _tooltipOptions
            _options.subchart = _subchartOptions
            _options.zoom = _zoomOptions
            _options.point = _pointOptions

            if (this.chartType == 'line' && Object.keys(_lineOptions).length > 0 && _lineOptions.constructor === Object) {
                _options.line = _lineOptions
            }

            if (this.chartType == 'bar' && Object.keys(_barOptions).length > 0 && _barOptions.constructor === Object) {
                _options.bar = _barOptions
            }

            if (Object.keys(_gaugeOptions).length > 0 && _gaugeOptions.constructor === Object) {
                _options.gauge = _gaugeOptions
            }

            if (Object.keys(_pieOptions).length > 0 && _pieOptions.constructor === Object) {
                _options.pie = _pieOptions
            }

            if (Object.keys(_donutOptions).length > 0 && _donutOptions.constructor === Object) {
                _options.donut = _donutOptions
            }

            return _options
        },

        defaultOptions: function() {
            var _options = {
                bindto: '#' + this.bindTo, // document.getElementById('myContainer')
                size: {
                    width: this.width,
                    height: this.height
                },
                padding: {
                    top: undefined,
                    right: undefined,
                    bottom: undefined,
                    left: undefined,
                },
                color: {
                    pattern: undefined
                },
                interaction: {
                    enabled: true
                },
                transition: {
                    duration: this.transitionDuration // 350
                },
                oninit: function () {},
                onrendered: function () {},
                onmouseover: function () {},
                onmouseout: function () {},
                onresize: function () {},
                onresized: function () {},

                // -- Data
                data: {
                    rows: this.drawableRows,
                    columns: this.drawableColumns,

                    json: this.drawableJson,
                    keys: {},
                    x: undefined,
                    xs: {},

                    xFormat: "%Y-%m-%d",
                    names: {},
                    classes: {},
                    groups: [],
                    axes: {},
                    type: "line",
                    types: {},
                    labels: false,
                    order: 'desc', // desc, asc, function (data1, data2) {}, null
                    regions: {},
                    color: undefined,
                    colors: {},
                    hide: false, // ['data1', ...]
                    empty: {
                        label: {
                            text: ""
                        }
                    },
                    selection: {
                        enabled: false,
                        grouped: false,
                        multiple: true,
                        draggable: false,
                        isselectable: function () { return true }
                    },
                    onclick: function (d, element) {},
                    onmouseover: function (d, element) {},
                    onmouseout: function (d, element) {},
                },

                // -- Axis
                axis: {
                    rotated: false,
                    x: {
                        show: true,
                        type: 'indexed', // indexed, category, timeseries
                        localtime: true,
                        categories: [],
                        tick: {
                            centered: true,
                            count: undefined,
                            fit: true,
                            values: null,
                            rotate: 0,
                            outer: true,

                            format: function (x) { return x },
                            culling: false,
                        },
                        max: undefined,
                        min: undefined,
                        padding: {
                            top: undefined,
                            right: undefined,
                            bottom: undefined,
                            left: undefined,
                        },
                        height: undefined,
                        extent: undefined,
                        label: undefined,
                    },
                    y: {
                        show: true,
                        inner: true,
                        max: undefined,
                        min: undefined,
                        inverted: true,
                        center: undefined,
                        label: undefined,
                        tick: {
                            outer: true,
                            count: undefined,
                            fit: true,
                            values: undefined,
                            rotate: 0,

                            format: function (x) { return x },
                            culling: false,
                        },
                        padding: {
                            top: undefined,
                            right: undefined,
                            bottom: undefined,
                            left: undefined,
                        },
                        default: undefined
                    },
                    y2: {
                        show: false,
                        inner: true,
                        max: undefined,
                        min: undefined,
                        inverted: true,
                        center: undefined,
                        label: undefined,
                        tick: {
                            outer: true,
                            count: undefined,
                            values: undefined,
                            format: function (x) { return x },
                        },
                        padding: {
                            top: undefined,
                            right: undefined,
                            bottom: undefined,
                            left: undefined,
                        },
                        default: undefined
                    },
                },

                grid: {
                    x: {
                        show: this.showGridX,
                        lines: [],
                    },
                    y: {
                        show: this.showGridY,
                        lines: [],
                    },
                },

                regions: [],

                legend: {
                    //show: true,
                    hide: this.hideLegend,
                    position: 'bottom', // bottom, right, inset
                    inset: {
                        anchor: 'top-left', // top-left, top-right, bottom-left, bottom-right
                        x: 10,
                        y: 0,
                        step: undefined
                    },
                    item: {
                        onclick: function (id) {},
                        onmouseover: function (id) {},
                        onmouseout: function (id) {},
                    }
                },

                tooltip: {
                    show: !this.hideTooltip,
                    grouped: true,
                    format: {
                        // title: function (x) { return 'Data ' + x },
                        // name: function (name, ratio, id, index) { return name },
                        // value: function (value, ratio, id, index) { return ratio }
                    },
                    // position: function (data, width, height, element) {
                    //     return {top: 0, left: 0};
                    // },
                    // contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                    //     return ... // formatted html as you want
                    // }
                },

                subchart: {
                    show: this.showSubchart,
                    size: {
                        height: this.subchartHeight
                    },
                    onbrush: function (domain) {}
                },

                zoom: {
                    enabled: this.zoomEnabled,
                    rescale: this.zoomRescale,
                    extent: [1, 100],
                    onzoom: function (domain) {},
                    onzoomstart: function (domain) {},
                    onzoomend: function (domain) {},
                },

                point: {
                    show: true,
                    r: 2.5,
                    focus: {
                        expand: {
                            enabled: true,
                            r: 4
                        }
                    },
                    select: {
                        r: 5
                    }
                }

            }

            return _options
        }
    },

    watch: {
        columns: function(newVal, oldVal) {
            if (this.isReady) {
                this.refresh()
            }
        },
        rows: function(newVal, oldVal) {
            if (this.isReady) {
                this.refresh()
            }
        },
        json: function(newVal, oldVal) {
            if (this.isReady) {
                this.refresh()
            }
        },
    },

    filters: {
        round: function (str) {
            return parseFloat(str).toFixed(2)
        },
    },
}
