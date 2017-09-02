import VueC3Base from './../mixins/VueC3Base.vue'
import VueC3Line from './combination/VueC3Line'
import VueC3Spline from './combination/VueC3Spline'
import VueC3Bar from './combination/VueC3Bar'
import VueC3Area from './combination/VueC3Area'
import VueC3AreaSpline from './combination/VueC3AreaSpline'
import VueC3Scatter from './combination/VueC3Scatter'
import VueC3Step from './combination/VueC3Step'
import VueC3Pie from './combination/VueC3Pie'
import VueC3Donut from './combination/VueC3Donut'
import VueC3Gauge from './combination/VueC3Gauge'

export default {
  mixins: [VueC3Base],
  components: { VueC3Line, VueC3Spline, VueC3Bar, VueC3Area, VueC3AreaSpline, VueC3Scatter, VueC3Step, VueC3Pie, VueC3Donut, VueC3Gauge },
  name: "c3-combination-chart",

  props: {

    // chartData: {
    //     type: Array,
    //     required: true
    // },

    // Axis
    axisXCategories: {
      type: Array
    },
    axisRotated: {
      type: Boolean,
      default: null
    },
    axisXShow: {
      type: Boolean,
      default: null,
    },
    axisXLabel: {
      type: String
    },
    axisXLabelPosition: {
      type: String
    },
    axisYShow: {
      type: Boolean,
      default: null,
    },
    axisYLabel: {
      type: String
    },
    axisYLabelPosition: {
      type: String
    },
    axisYMin: {
      type: Number
    },
    axisYMax: {
      type: Number
    },



    axisXTickCentered: {
      type: Boolean,
      default: null
    },
    axisXTickCount: {
      type: Number
    },
    axisXTickValues: {
      type: Array
    },
    axisXTickCulling: {
      type: Number
    },
    axisXTickFit: {
      type: Boolean,
      default: null
    },
    axisXTickRotate: {
      type: Number
    },
    axisXTickOuter: {
      type: Boolean,
      default: null
    },
    axisXTickMax: {
      type: Number
    },
    axisXTickMin: {
      type: Number
    },

    tooltipFormattedTitle: {
      type: String,
    },
    tooltipFormattedName: {
      type: String,
    },
    tooltipFormattedValue: {
      type: String,
    },
    tooltipPositionTop: {
      type: Number,
    },
    tooltipPositionLeft: {
      type: Number,
    },


    zoomExtent: {
      type: Array
    },


  },

  data: function data() {
    return {

      data: {
        // url: "",
        // json: [],
        // keys: [],
        // mimeType: '', // json

        // rows: [],
        columns: [],

        names: {},
        classes: {},
        groups: {},
        // axes: {},
        //label: "",
        type: "",
        types: {},
        labels: false,
        // order: false,
        // regions: {},
        colors: {},
      },

    };
  },

  created() {
    //this.bindTo = this.id

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

      if (options.hasOwnProperty('groups') && undefined !== options.groups) {
        if (!this.data.groups.hasOwnProperty(options.groups)) {
          this.data.groups[options.groups] = []
        }
        this.data.groups[options.groups].push(prop)
      }
    })
  },

  mounted() {
    // var chart = c3.generate(this.options)
    // this.setChartObject(chart)
    // this.isReady = true
  },

  methods: {

    /**
     * [refresh description]
     * @return {[type]} [description]
     */
    // refresh: function() {
    //     //this.chart.unload()
    //     var _loadOptions = this.dataOptions //_loadOptions.columns = this.drawableColumns
    //     this.chart.load(_loadOptions)
    //     // this.chart.flush()
    // },
  },

  computed: {

    // Data

    drawableColumns: function() {
      var _types = Object.keys(this.data.types)
      if (this.propExists(this.columns)) {
        return this.columns.filter(function (col) {
          if (_types.includes(col[0])) {
            return col
          }
        })
      } else {
        return []
      }
    },

    drawableRows: function() {
      if (this.propExists(this.rows)) {
        var _types = Object.keys(this.data.types)
        var _rows = this.rows
        var _elements = _rows[0]
        var _indeces = []
        _elements.forEach(function (element, index) {
          if (_types.includes(element)) {
            _indeces.push(index)
          }
        })
        _rows = _rows.filter(function (row) {
          return row.filter((item, index) => _indeces.includes(index))
        })
        return _rows
      } else {
        return []
      }
    },

    drawableJson: function() {
      return this.json
    },

    // Options

    // chartOptions: function() {
    //     var _chartOptions = {}
    //     _chartOptions.size = {}
    //     _chartOptions.padding = {}
    //     _chartOptions.color = {}
    //     _chartOptions.interaction = {}
    //     _chartOptions.transition = {}

    //     if (this.propExists(this.width)) {
    //         _chartOptions.size.width = this.width
    //     }
    //     if (this.propExists(this.height)) {
    //         _chartOptions.size.height = this.height
    //     }
    //     if (this.propExists(this.paddingTop)) {
    //         _chartOptions.padding.top = this.paddingTop
    //     }
    //     if (this.propExists(this.paddingRight)) {
    //         _chartOptions.padding.right = this.paddingRight
    //     }
    //     if (this.propExists(this.paddingBottom)) {
    //         _chartOptions.padding.bottom = this.paddingBottom
    //     }
    //     if (this.propExists(this.paddingLeft)) {
    //         _chartOptions.padding.left = this.paddingLeft
    //     }
    //     if (this.propExists(this.colorPattern)) {
    //         _chartOptions.color.pattern = this.colorPattern
    //     }
    //     if (this.propExists(this.interactionEnabled)) {
    //         _chartOptions.interaction.enabled = this.interactionEnabled
    //     }
    //     if (this.propExists(this.transitionDuration)) {
    //         _chartOptions.transition.duration = this.transitionDuration
    //     }

    //     return this.removeEmptyKeys(_chartOptions)
    // },

    // dataOptions: function() {
    //     var _dataOptions = {}

    //     if (this.propExists(this.labels)) {
    //         _dataOptions.labels = this.labels
    //     }
    //     if (this.propExists(this.type)) {
    //         _dataOptions.type = this.type
    //     }

    //     // dont mess with the actual data
    //     var _tempData = {}
    //     //_tempData.columns = this.chartData
    //     //_tempData.columns = this.columns

    //     if (this.propExists(this.labels)) {
    //         _tempData.labels = this.labels
    //     }
    //     if (this.propExists(this.columns)) {
    //         _tempData.columns = this.drawableColumns
    //     }

    //     if (this.propExists(this.rows)) {
    //         _tempData.rows = this.drawableRows
    //     }

    //     if (this.propExists(this.json)) {
    //         _tempData.json = this.drawableJson
    //     }

    //     _tempData.groups = Object.values(this.data.groups)

    //     //_tempData.rows = this.rows
    //     //_tempData.json = this.json

    //     _tempData.types = this.data.types
    //     _tempData.names = this.data.names
    //     _tempData.colors = this.data.colors
    //     _tempData.classes = this.data.classes
    //     this.mergeObjects(this.removeEmptyKeys(_dataOptions), _tempData)

    //     return _tempData
    // },

    // axisOptions: function() {
    //     var _axisOptions = {}
    //     _axisOptions.x = {}
    //     _axisOptions.x.tick = {}
    //     _axisOptions.x.type = ''
    //     _axisOptions.x.label = {}
    //     _axisOptions.y = {}
    //     _axisOptions.y.tick = {}
    //     _axisOptions.y.label = {}
    //     _axisOptions.y.padding = {}

    //     if (this.propExists(this.axisXCategories)) {
    //         _axisOptions.x.type = 'category'
    //         _axisOptions.x.categories = this.axisXCategories
    //     }
    //     if (this.propExists(this.axisRotated)) {
    //         _axisOptions.rotated = this.axisRotated
    //     }
    //     if (this.propExists(this.axisXShow)) {
    //         _axisOptions.x.show = this.axisXShow
    //     }
    //     if (this.propExists(this.axisXLabel)) {
    //         _axisOptions.x.label.text = this.axisXLabel
    //     }
    //     if (this.propExists(this.axisXLabelPosition)) {
    //         _axisOptions.x.label.position = this.axisXLabelPosition
    //     }
    //     if (this.propExists(this.axisYShow)) {
    //         _axisOptions.y.show = this.axisYShow
    //     }
    //     if (this.propExists(this.axisYMin)) {
    //         _axisOptions.y.min = this.axisYMin
    //     }
    //     if (this.propExists(this.axisYMax)) {
    //         _axisOptions.y.max = this.axisYMax
    //     }
    //     if (this.propExists(this.axisYLabel)) {
    //         _axisOptions.y.label.text = this.axisYLabel
    //     }
    //     if (this.propExists(this.axisYLabelPosition)) {
    //         _axisOptions.y.label.position = this.axisYLabelPosition
    //     }




    //     // ???
    //     if (this.propExists(this.axisXTickCentered)) {
    //         _axisOptions.x.tick.centered = this.axisXTickCentered
    //     }
    //     if (this.propExists(this.axisXTickCount)) {
    //         _axisOptions.x.tick.count = this.axisXTickCount
    //     }
    //     if (this.propExists(this.axisXTickValues)) {
    //         _axisOptions.x.tick.values = this.axisXTickValues
    //     }
    //     if (this.propExists(this.axisXTickCulling)) {
    //         _axisOptions.x.tick.culling = {}
    //         _axisOptions.x.tick.culling.max = this.axisXTickCulling
    //     }
    //     // ???

    //     if (this.propExists(this.showYAxis)) {
    //         _axisOptions.y.show = this.showYAxis
    //     }

    //     //console.log(_axisOptions)
    //     return this.removeEmptyKeys(_axisOptions)
    // },

    // gridOptions: function() {
    //     var _gridOptions = {}
    //     _gridOptions.x = {}
    //     _gridOptions.y = {}

    //     if (this.propExists(this.showGridX)) {
    //         _gridOptions.x.show = this.showGridX
    //     }
    //     if (this.propExists(this.showGridY)) {
    //         _gridOptions.y.show = this.showGridY
    //     }

    //     return _gridOptions
    // },

    // legendOptions: function() {
    //     var _legendOptions = {}

    //     if (this.propExists(this.showLegend)) {
    //         _legendOptions.show = this.showLegend
    //     }
    //     if (this.propExists(this.legendPosition)) {
    //         _legendOptions.position = this.legendPosition
    //     }

    //     return this.removeEmptyKeys(_legendOptions)
    // },

    // tooltipOptions: function() {
    //     var _tooltipOptions = {}
    //     _tooltipOptions.format = {}

    //     if (this.propExists(this.showTooltip)) {
    //         _tooltipOptions.show = this.showTooltip
    //     }
    //     if (this.propExists(this.tooltipGrouped)) {
    //         _tooltipOptions.grouped = this.tooltipGrouped
    //     }

    //     var that = this

    //     if (this.propExists(this.tooltipPositionTop) || this.propExists(this.tooltipPositionLeft)) {
    //         _tooltipOptions.position = {}
    //         _tooltipOptions.position = function (data, width, height, element) {
    //             var obj = {}
    //             if (that.propExists(that.tooltipPositionTop)) {
    //                 obj.top = that.tooltipPositionTop
    //             }
    //             if (that.propExists(that.tooltipPositionLeft)) {
    //                 obj.left = that.tooltipPositionLeft
    //             }
    //             return obj
    //         }
    //     }

    //     _tooltipOptions.format = {
    //         title: function (x) {
    //             that.$emit('tooltip-format-title', x)
    //             if (that.propExists(that.tooltipFormattedTitle)) {
    //                 return that.tooltipFormattedTitle
    //             } else {
    //                 return x
    //             }
    //         },
    //         name: function (name, ratio, id, index) {
    //             that.$emit('tooltip-format-name', name, ratio, id, index)
    //             if (that.propExists(that.tooltipFormattedName)) {
    //                 return that.tooltipFormattedName
    //             } else {
    //                 return name
    //             }
    //         },
    //         value: function (value, ratio, id, index) {
    //             that.$emit('tooltip-format-value', value, ratio, id, index)
    //             if (that.propExists(that.tooltipFormattedValue)) {
    //                 return that.tooltipFormattedValue
    //             } else {
    //                 return value
    //             }
    //         },
    //     }

    //     return _tooltipOptions
    //     return this.removeEmptyKeys(_tooltipOptions)
    // },

    // subchartOptions: function() {
    //     var _subchartOptions = {}
    //     _subchartOptions.size = {}

    //     if (this.propExists(this.showSubchart)) {
    //         _subchartOptions.show = this.showSubchart
    //     }
    //     if (this.propExists(this.subchartHeight)) {
    //         _subchartOptions.size.height = this.subchartHeight
    //     }

    //     return this.removeEmptyKeys(_subchartOptions)
    // },

    // zoomOptions: function() {
    //     var _zoomOptions = {}

    //     if (this.propExists(this.zoomEnabled)) {
    //         _zoomOptions.enabled = this.zoomEnabled
    //     }
    //     if (this.propExists(this.zoomRescale)) {
    //         _zoomOptions.rescale = this.zoomRescale
    //     }
    //     if (this.propExists(this.zoomExtent)) {
    //         _zoomOptions.extent = this.zoomExtent
    //     }

    //     return this.removeEmptyKeys(_zoomOptions)
    // },

    // pointOptions: function() {
    //     var _pointOptions = {}
    //     _pointOptions.focus = {}
    //     _pointOptions.focus.expand = {}
    //     _pointOptions.select = {}

    //     if (this.propExists(this.showPoint)) {
    //         _pointOptions.show = this.showPoint
    //     }
    //     if (this.propExists(this.pointRadius)) {
    //         _pointOptions.r = this.pointRadius
    //     }
    //     if (this.propExists(this.pointFocusExpandEnabled)) {
    //         _pointOptions.focus.expand.enabled = this.pointFocusExpandEnabled
    //     }
    //     if (this.propExists(this.pointFocusExpandRadius)) {
    //         _pointOptions.focus.expand.r = this.pointFocusExpandRadius
    //     }
    //     if (this.propExists(this.pointFocusSelectRadius)) {
    //         _pointOptions.select.r = this.pointFocusSelectRadius
    //     }

    //     return this.removeEmptyKeys(_pointOptions)
    // },

    // chartCallbacks: function() {
    //     var that = this
    //     return {
    //         oninit: function () {
    //             that.$emit('oninit')
    //         },
    //         onrendered: function () {
    //             that.$emit('onrendered')
    //         },
    //         onmouseover: function () {
    //             that.$emit('onmouseover')
    //         },
    //         onmouseout: function () {
    //             that.$emit('onmouseout')
    //         },
    //         onresize: function () {
    //             that.$emit('onresize')
    //         },
    //         onresized: function () {
    //             that.$emit('onresized')
    //         },
    //     }
    // },

    // dataCallbacks: function() {
    //     var that = this
    //     return {
    //         onclick: function (d, element) {
    //             that.$emit('data-onclick', d)
    //             // console.log(d)
    //             // console.log(element)
    //         },
    //         onmouseover: function (d) {
    //             that.$emit('data-onmouseover', d)
    //         },
    //         onmouseout: function (d) {
    //             that.$emit('data-onmouseout', d)
    //         },
    //     }
    // },

    // options: function() {
    //     var _options = {}
    //     _options.bindto = '#' + this.bindTo
    //     _options.data = this.dataOptions
    //     this.mergeObjects(_options, this.chartOptions)
    //     //this.mergeObjects(_options, this.chartCallbacks)
    //     //this.mergeObjects(_options.data, this.dataCallbacks)

    //     // _options.axis = this.axisOptions
    //     // _options.grid = this.gridOptions
    //     // _options.legend = this.legendOptions
    //     // _options.tooltip = this.tooltipOptions
    //     // _options.point = this.pointOptions
    //     // _options.subchart = this.subchartOptions
    //     // _options.zoom = this.zoomOptions

    //     return _options
    // },
  },

  watch: {
    // columns: function(newVal, oldVal) {
    //     if (this.isReady) {
    //         this.refresh()
    //     }
    // },
    // rows: function(newVal, oldVal) {
    //     if (this.isReady) {
    //         this.refresh()
    //     }
    // },
  },
}

