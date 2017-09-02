!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("c3")):"function"==typeof define&&define.amd?define("VueC3Js",["c3"],e):"object"==typeof exports?exports.VueC3Js=e(require("c3")):t.VueC3Js=e(t.c3)}(this,function(t){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=28)}([function(t,e,i){function n(t){i(36)}var s=i(34)(i(27),i(35),n,null,null);t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,props:{id:{type:String},prop:{type:String},color:{type:String},name:{type:String},customClass:{type:String},groups:{type:String}},data:function(){return{type:""}},mounted:function(){this.$parent.$emit("c3-chart-element-mounted",this.type,this.prop,this.options)},methods:{optionExists:function(t){return void 0!==t&&null!==t&&""!==t}},computed:{options:function(){var t={};return this.optionExists(this.color)&&(t.color=this.color),this.optionExists(this.name)&&(t.name=this.name),this.optionExists(this.customClass)&&(t.customClass=this.customClass),this.optionExists(this.groups)&&(t.groups=this.groups),t}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{hideLabel:{type:Boolean},disableExpand:{type:Boolean},labelThreshold:{type:Number}},data:function(){return{}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-area",data:function(){return{type:"area"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-area-spline",data:function(){return{type:"area-spline"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-bar",data:function(){return{type:"bar"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-donut",data:function(){return{type:"donut"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-gauge",data:function(){return{type:"gauge"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-line",data:function(){return{type:"line"}},props:{connectNull:{},stepType:{}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-pie",data:function(){return{type:"pie"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-scatter",data:function(){return{type:"scatter"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-spline",data:function(){return{type:"spline"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-step",data:function(){return{type:"step"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{notZeroBased:{type:Boolean}},data:function(){return{}}},t.exports=e.default},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(n[a]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=n(s),r=i(13),o=n(r);e.default={mixins:[a.default,o.default],name:"c3-area-chart",props:{},data:function(){return{chartType:"area"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-area-spline-chart",props:{},data:function(){return{chartType:"area-spline"}}},t.exports=e.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=n(s),r=i(13),o=n(r);e.default={mixins:[a.default,o.default],name:"c3-bar-chart",props:{barWidth:{type:Number},barWidthRatio:{type:Number}},data:function(){return{chartType:"bar"}}},t.exports=e.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=n(s),r=i(8),o=n(r),u=i(11),l=n(u),d=i(5),p=n(d),c=i(3),f=n(c),h=i(4),g=n(h),y=i(10),m=n(y),b=i(12),x=n(b),v=i(9),O=n(v),_=i(6),C=n(_),w=i(7),N=n(w);e.default={mixins:[a.default],components:{VueC3Line:o.default,VueC3Spline:l.default,VueC3Bar:p.default,VueC3Area:f.default,VueC3AreaSpline:g.default,VueC3Scatter:m.default,VueC3Step:x.default,VueC3Pie:O.default,VueC3Donut:C.default,VueC3Gauge:N.default},name:"c3-combination-chart",props:{axisXCategories:{type:Array},axisRotated:{type:Boolean,default:null},axisXShow:{type:Boolean,default:null},axisXLabel:{type:String},axisXLabelPosition:{type:String},axisYShow:{type:Boolean,default:null},axisYLabel:{type:String},axisYLabelPosition:{type:String},axisYMin:{type:Number},axisYMax:{type:Number},axisXTickCentered:{type:Boolean,default:null},axisXTickCount:{type:Number},axisXTickValues:{type:Array},axisXTickCulling:{type:Number},axisXTickFit:{type:Boolean,default:null},axisXTickRotate:{type:Number},axisXTickOuter:{type:Boolean,default:null},axisXTickMax:{type:Number},axisXTickMin:{type:Number},tooltipFormattedTitle:{type:String},tooltipFormattedName:{type:String},tooltipFormattedValue:{type:String},tooltipPositionTop:{type:Number},tooltipPositionLeft:{type:Number},zoomExtent:{type:Array}},data:function(){return{data:{columns:[],names:{},classes:{},groups:{},type:"",types:{},labels:!1,colors:{}}}},created:function(){this.$on("c3-chart-element-mounted",function(t,e,i){this.data.types[e]=t,i.hasOwnProperty("color")&&void 0!==i.color&&(this.data.colors[e]=i.color),i.hasOwnProperty("name")&&void 0!==i.name&&(this.data.names[e]=i.name),i.hasOwnProperty("customClass")&&void 0!==i.customClass&&(this.data.classes[e]=i.customClass),i.hasOwnProperty("groups")&&void 0!==i.groups&&(this.data.groups.hasOwnProperty(i.groups)||(this.data.groups[i.groups]=[]),this.data.groups[i.groups].push(e))})},mounted:function(){},methods:{},computed:{drawableColumns:function(){var t=Object.keys(this.data.types);return this.propExists(this.columns)?this.columns.filter(function(e){if(t.includes(e[0]))return e}):[]},drawableRows:function(){if(this.propExists(this.rows)){var t=Object.keys(this.data.types),e=this.rows,i=e[0],n=[];return i.forEach(function(e,i){t.includes(e)&&n.push(i)}),e=e.filter(function(t){return t.filter(function(t,e){return n.includes(e)})})}return[]},drawableJson:function(){return this.json}},watch:{}},t.exports=e.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=n(s),r=i(2),o=n(r);e.default={mixins:[a.default,o.default],name:"c3-donut-chart",props:{donutWidth:{type:Number},donutTitle:{type:String}},data:function(){return{chartType:"donut"}}},t.exports=e.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=n(s),r=i(2),o=n(r);e.default={mixins:[a.default,o.default],name:"c3-gauge-chart",props:{gaugeMin:{type:Number},gaugeMax:{type:Number},gaugeUnits:{type:String},gaugeWidth:{type:String}},data:function(){return{chartType:"gauge"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-line-chart",props:{connectNull:{type:Boolean},lineStepType:{type:String}},data:function(){return{chartType:"line"}}},t.exports=e.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=n(s),r=i(2),o=n(r);e.default={mixins:[a.default,o.default],name:"c3-pie-chart",props:{},data:function(){return{chartType:"pie"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-scatter-chart",props:{},data:function(){return{chartType:"scatter"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-spline-chart",props:{},data:function(){return{chartType:"spline"}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[s.default],name:"c3-step-chart",props:{},data:function(){return{chartType:"step"}}},t.exports=e.default},function(t,e){t.exports={name:"vue-c3js",version:"0.0.2",description:"c3js wrapper for vuejs.",main:"./dist/vue-c3js.js",scripts:{test:"test","dev:hot":"cross-env NODE_ENV=development webpack-dev-server --open --hot",example:"webpack --progress --hide-modules --config  ./build/webpack.example.config.js",build:"cross-env NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.prod.config.js"},repository:{type:"git",url:"git+https://github.com/andreas2510/vue-c3js.git"},author:"Andreas Papadopoulos <andreaspapadopoulos1@gmail.com>",license:"MIT",bugs:{url:"https://github.com/andreas2510/vue-c3js/issues"},homepage:"https://github.com/andreas2510/vue-c3js#readme",peerDependencies:{c3:"^0.4.15",vue:"^2.0.0"},devDependencies:{"babel-core":"^6.0.0","babel-loader":"^6.0.0","babel-preset-env":"^1.5.1","cross-env":"^3.0.0","css-loader":"^0.25.0","file-loader":"^0.9.0","style-loader":"^0.18.2","vue-loader":"^12.1.0","vue-template-compiler":"^2.3.3",webpack:"^2.6.1","webpack-dev-server":"^2.4.5"}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(39);i(31);e.default={replace:!0,props:{bindto:{type:String,required:!0},width:{type:Number},height:{type:Number},paddingTop:{type:Number},paddingRight:{type:Number},paddingBottom:{type:Number},paddingLeft:{type:Number},colorPattern:{type:Array},disableInteraction:{type:Boolean},disableBrighten:{type:Boolean},transitionDuration:{type:Number},columns:{type:Array,default:null},rows:{type:Array,default:null},json:{type:Object,default:null},dataX:{type:String},dataXFormat:{type:String},showLabels:{type:Boolean},names:{type:Object},classes:{type:Object},axes:{type:Object},labels:{type:Boolean},order:{type:String},groups:{type:Array},colors:{type:Object},enableSelection:{type:Boolean},selectionGrouped:{type:Boolean},singleSelection:{type:Boolean},selectionDraggable:{type:Boolean},emptyLabelText:{type:String},axisRotated:{type:Boolean},hideXAxis:{type:Boolean},axisXType:{type:String},axisXCategories:{type:Array},axisXTickCentered:{type:Boolean},axisXTickCount:{type:Number},axisXTickFit:{type:Boolean},axisXTickValues:{type:Array},axisXTickRotate:{type:Number},axisXTickInner:{type:Boolean},axisXTickFormatted:{type:String},axisXMax:{type:Number},axisXMin:{type:Number},axisXHeight:{type:Number},hideYAxis:{type:Boolean},axisYInner:{type:Boolean},axisYInverted:{type:Boolean},axisYCenter:{type:Number},axisYMax:{type:Number},axisYMin:{type:Number},axisYHeight:{type:Number},showY2Axis:{type:Boolean},axisY2Inner:{type:Boolean},axisY2Inverted:{type:Boolean},axisY2Center:{type:Number},axisY2Max:{type:Number},axisY2Min:{type:Number},showGridX:{type:Boolean},xGrids:{type:Array},showGridY:{type:Boolean},yGrids:{type:Array},regions:{type:Array},hideLegend:{type:Boolean},legendPosition:{type:String},legendInset:{type:Object},hideTooltip:{type:Boolean},ungroupTooltip:{type:Boolean},showSubchart:{type:Boolean},subchartHeight:{type:Number},zoomEnabled:{type:Boolean},zoomRescale:{type:Boolean},hidePoint:{type:Boolean},pointRadius:{type:Number},disablePointFocusExpand:{type:Boolean},pointFocusExpandRadius:{type:Number},pointFocusSelectRadius:{type:Number}},data:function(){return{isReady:!1,isLoading:!1,bindTo:"",chartType:"line"}},created:function(){this.bindTo="vue-c3js-"+this.bindto},mounted:function(){this.generateChart(),this.isReady=!0},methods:{assignOption:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(void 0!==i&&NaN!==i){var s=e.split("."),a=s.pop(),r=s.reduce(function(t,e){return t[e]=t[e]||{}},t);n===Number?r[a]=parseFloat(i):r[a]=i}},propExists:function(t){return void 0!==t&&null!==t},setChartObject:function(t){document.getElementById(this.bindTo).chartdata=t},getChartObject:function(){return document.getElementById(this.bindTo).chartdata},generateChart:function(){var t=n.generate(this.options);this.propExists(this.xGrids)&&t.xgrids(this.xGrids),this.propExists(this.yGrids)&&t.ygrids(this.yGrids),this.propExists(this.regions)&&t.regions(this.regions),this.setChartObject(t)},refresh:function(){var t=this.options.data;this.chart.load(t)}},computed:{chart:function(){return this.getChartObject()},drawableColumns:function(){return this.propExists(this.columns)?this.columns:[]},drawableRows:function(){return this.propExists(this.rows)?this.rows:[]},drawableJson:function(){return this.propExists(this.json)?this.json:[]},options:function(){var t=this,e={};return this.assignOption(e,"bindto","#"+this.bindTo),this.assignOption(e,"data.type",this.chartType),this.assignOption(e,"data.columns",this.columns),this.assignOption(e,"data.rows",this.rows),this.assignOption(e,"data.json",this.json),this.assignOption(e,"size.width",this.width,Number),this.assignOption(e,"size.height",this.height,Number),this.assignOption(e,"padding.top",this.paddingTop,Number),this.assignOption(e,"padding.right",this.paddingRight,Number),this.assignOption(e,"padding.bottom",this.paddingBottom,Number),this.assignOption(e,"padding.left",this.paddingLeft,Number),this.assignOption(e,"color.pattern",this.colorPattern),this.assignOption(e,"transition.duration",this.transitionDuration,Number),this.assignOption(e,"data.x",this.dataX),this.assignOption(e,"data.xFormat",this.dataXFormat),this.assignOption(e,"data.names",this.names),this.assignOption(e,"data.classes",this.classes),this.assignOption(e,"data.groups",this.groups),this.assignOption(e,"data.axes",this.axes),this.assignOption(e,"data.labels",this.labels),this.assignOption(e,"data.order",this.order),this.assignOption(e,"data.colors",this.colors),this.assignOption(e,"data.empty.label.text",this.emptyLabelText),this.assignOption(e,"data.selection.enabled",this.enableSelection),this.assignOption(e,"data.selection.grouped",this.selectionGrouped),this.assignOption(e,"data.selection.multiple",!this.singleSelection),this.assignOption(e,"data.selection.draggable",this.selectionDraggable),this.assignOption(e,"axis.rotated",this.axisRotated),this.assignOption(e,"axis.x.show",!this.hideXAxis),this.assignOption(e,"axis.x.type",this.axisXType),this.assignOption(e,"axis.x.categories",this.axisXCategories),this.assignOption(e,"axis.x.tick.centered",this.axisXTickCentered),this.assignOption(e,"axis.x.tick.count",this.axisXTickCount,Number),this.assignOption(e,"axis.x.tick.values",this.axisXTickValues),this.assignOption(e,"axis.x.tick.rotate",this.axisXTickRotate,Number),this.assignOption(e,"axis.x.tick.outer",!this.axisXTickInner),this.assignOption(e,"axis.x.max",this.axisXMax,Number),this.assignOption(e,"axis.x.min",this.axisXMin,Number),this.assignOption(e,"axis.x.height",this.axisXHeight,Number),this.assignOption(e,"subchart.show",this.showSubchart),this.assignOption(e,"subchart.size.height",this.subchartHeight,Number),this.assignOption(e,"zoom.enabled",this.zoomEnabled),this.assignOption(e,"zoom.rescale",this.zoomRescale),this.assignOption(e,"grid.x.show",this.showGridX),this.assignOption(e,"grid.y.show",this.showGridY),this.assignOption(e,"legend.hide",this.hideLegend),this.assignOption(e,"legend.position",this.legendPosition),this.assignOption(e,"legend.inset",this.legendInset),this.assignOption(e,"tooltip.show",!this.hideTooltip),this.assignOption(e,"tooltip.grouped",!this.ungroupTooltip),this.assignOption(e,"point.show",!this.hidePoint),this.assignOption(e,"point.r",this.pointRadius),this.assignOption(e,"point.focus.expand.enabled",!this.disablePointFocusExpand),this.assignOption(e,"point.focus.expand.r",this.pointFocusExpandRadius),this.assignOption(e,"point.select.r",this.pointFocusSelectRadius),this.assignOption(e,"line.connectNull",this.connectNull),this.assignOption(e,"line.step.type",this.lineStepType),this.assignOption(e,"area.zerobased",!this.notZeroBased),this.assignOption(e,"bar.width",this.barWidth),this.assignOption(e,"bar.width.ratio",this.barWidthRatio),this.assignOption(e,"bar.zerobased",!this.notZeroBased),this.assignOption(e,"pie.label.show",!this.hideLabel),this.assignOption(e,"pie.label.threshold",this.labelThreshold,Number),this.assignOption(e,"pie.expand",!this.disableExpand),this.assignOption(e,"donut.label.show",!this.hideLabel),this.assignOption(e,"donut.label.threshold",this.labelThreshold,Number),this.assignOption(e,"donut.expand",!this.disableExpand),this.assignOption(e,"donut.width",this.donutWidth,Number),this.assignOption(e,"donut.title",this.donutTitle),this.assignOption(e,"gauge.label.show",!this.hideLabel),this.assignOption(e,"gauge.expand",!this.disableExpand),this.assignOption(e,"gauge.min",this.gaugeMin,Number),this.assignOption(e,"gauge.max",this.gaugeMax,Number),this.assignOption(e,"gauge.units",this.gaugeUnits),this.assignOption(e,"gauge.width",this.gaugeWidth,Number),e.oninit=function(){t.$emit("oninit")},e.data.onclick=function(e,i){t.$emit("data-onclick",e)},e}},watch:{columns:function(t,e){this.isReady&&this.refresh()},rows:function(t,e){this.isReady&&this.refresh()},json:function(t,e){this.isReady&&this.refresh()}},filters:{round:function(t){return parseFloat(t).toFixed(2)}},beforeDestroy:function(){this.getChartObject=this.getChartObject.destroy()}},t.exports=e.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(21),a=n(s),r=i(24),o=n(r),u=i(25),l=n(u),d=i(15),p=n(d),c=i(16),f=n(c),h=i(17),g=n(h),y=i(23),m=n(y),b=i(22),x=n(b),v=i(19),O=n(v),_=i(20),C=n(_),w=i(18),N=n(w),M=i(8),j=n(M),T=i(11),S=n(T),k=i(5),B=n(k),E=i(3),P=n(E),R=i(4),X=n(R),V=i(10),L=n(V),A=i(12),U=n(A),z=i(9),F=n(z),I=i(6),Y=n(I),G=i(7),D=n(G),$=i(26),W=n($),J=[N.default,j.default,S.default,B.default,P.default,X.default,L.default,U.default,F.default,Y.default,D.default,a.default,o.default,l.default,p.default,f.default,g.default,m.default,x.default,O.default,C.default],q=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];J.map(function(e){t.component(e.name,e)})},H={version:W.default.version,install:q,VueC3CombinationChart:N.default,VueC3Line:j.default,VueC3Spline:S.default,VueC3Bar:B.default,VueC3Area:P.default,VueC3AreaSpline:X.default,VueC3Scatter:L.default,VueC3Step:U.default,VueC3Pie:F.default,VueC3Donut:Y.default,VueC3Gauge:D.default,VueC3LineChart:a.default,VueC3SplineChart:o.default,VueC3StepChart:l.default,VueC3AreaChart:p.default,VueC3AreaSplineChart:f.default,VueC3BarChart:g.default,VueC3ScatterChart:m.default,VueC3PieChart:x.default,VueC3DonutChart:O.default,VueC3GaugeChart:C.default};e.default=H,t.exports=e.default},function(t,e,i){e=t.exports=i(14)(),e.push([t.i,".c3 svg{font:10px sans-serif;-webkit-tap-highlight-color:transparent}.c3 line,.c3 path{fill:none;stroke:#000}.c3 text{-webkit-user-select:none;-moz-user-select:none;user-select:none}.c3-bars path,.c3-event-rect,.c3-legend-item-tile,.c3-xgrid-focus,.c3-ygrid{shape-rendering:crispEdges}.c3-chart-arc path{stroke:#fff}.c3-chart-arc text{fill:#fff;font-size:13px}.c3-grid line{stroke:#aaa}.c3-grid text{fill:#aaa}.c3-xgrid,.c3-ygrid{stroke-dasharray:3 3}.c3-text.c3-empty{fill:grey;font-size:2em}.c3-line{stroke-width:1px}.c3-circle._expanded_{stroke-width:1px;stroke:#fff}.c3-selected-circle{fill:#fff;stroke-width:2px}.c3-bar{stroke-width:0}.c3-bar._expanded_{fill-opacity:1;fill-opacity:.75}.c3-target.c3-focused{opacity:1}.c3-target.c3-focused path.c3-line,.c3-target.c3-focused path.c3-step{stroke-width:2px}.c3-target.c3-defocused{opacity:.3!important}.c3-region{fill:#4682b4;fill-opacity:.1}.c3-brush .extent{fill-opacity:.1}.c3-legend-item{font-size:12px}.c3-legend-item-hidden{opacity:.15}.c3-legend-background{opacity:.75;fill:#fff;stroke:#d3d3d3;stroke-width:1}.c3-title{font:14px sans-serif}.c3-tooltip-container{z-index:10}.c3-tooltip{border-collapse:collapse;border-spacing:0;background-color:#fff;empty-cells:show;box-shadow:7px 7px 12px -9px #777;opacity:.9}.c3-tooltip tr{border:1px solid #ccc}.c3-tooltip th{background-color:#aaa;font-size:14px;padding:2px 5px;text-align:left;color:#fff}.c3-tooltip td{font-size:13px;padding:3px 6px;background-color:#fff;border-left:1px dotted #999}.c3-tooltip td>span{display:inline-block;width:10px;height:10px;margin-right:6px}.c3-tooltip td.value{text-align:right}.c3-area{stroke-width:0;opacity:.2}.c3-chart-arcs-title{dominant-baseline:middle;font-size:1.3em}.c3-chart-arcs .c3-chart-arcs-background{fill:#e0e0e0;stroke:none}.c3-chart-arcs .c3-chart-arcs-gauge-unit{fill:#000;font-size:16px}.c3-chart-arcs .c3-chart-arcs-gauge-max,.c3-chart-arcs .c3-chart-arcs-gauge-min{fill:#777}.c3-chart-arc .c3-gauge-value{fill:#000}.c3-chart-arc.c3-target.c3-focused g path,.c3-chart-arc.c3-target g path{opacity:1}",""])},function(t,e,i){e=t.exports=i(14)(),e.push([t.i,"",""])},function(t,e,i){var n=i(29);"string"==typeof n&&(n=[[t.i,n,""]]);var s={};s.transform=void 0;i(32)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=h[n.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(d(n.parts[a],e))}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(d(n.parts[a],e));h[n.id]={id:n.id,refs:1,parts:r}}}}function s(t,e){for(var i=[],n={},s=0;s<t.length;s++){var a=t[s],r=e.base?a[0]+e.base:a[0],o=a[1],u=a[2],l=a[3],d={css:o,media:u,sourceMap:l};n[r]?n[r].parts.push(d):i.push(n[r]={id:r,parts:[d]})}return i}function a(t,e){var i=y(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=x[x.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function r(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function o(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),a(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),a(t,e),e}function l(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function d(t,e){var i,n,s,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var l=b++;i=m||(m=o(e)),n=p.bind(null,i,l,!1),s=p.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=u(e),n=f.bind(null,i,e),s=function(){r(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=c.bind(null,i),s=function(){r(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}function p(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=O(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function c(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function f(t,e,i){var n=i.css,s=i.sourceMap,a=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||a)&&(n=v(n)),s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var h={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var e={};return function(i){return void 0===e[i]&&(e[i]=t.call(this,i)),e[i]}}(function(t){return document.querySelector(t)}),m=null,b=0,x=[],v=i(33);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=s(t,e);return n(i,e),function(t){for(var a=[],r=0;r<i.length;r++){var o=i[r],u=h[o.id];u.refs--,a.push(u)}if(t){n(s(t,e),e)}for(var r=0;r<a.length;r++){var u=a[r];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete h[u.id]}}}};var O=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(s))return t;var a;return a=0===s.indexOf("//")?s:0===s.indexOf("/")?i+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(t,e){t.exports=function(t,e,i,n,s){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var u="function"==typeof r?r.options:r;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,p=d?u.render:u.beforeCreate;d?u.render=function(t,e){return l.call(e),p(t,e)}:u.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:r,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[t._t("default")],2),t._v(" "),i("div",{attrs:{id:t.bindTo}})])},staticRenderFns:[]}},function(t,e,i){var n=i(30);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(37)("c0cb40a6",n,!0)},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=d[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(a(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(a(i.parts[s]));d[i.id]={id:i.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function a(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(y){var a=f++;n=c||(c=s()),e=r.bind(null,n,a,!1),i=r.bind(null,n,a,!0)}else n=s(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function o(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(38),d={},p=u&&(document.head||document.getElementsByTagName("head")[0]),c=null,f=0,h=!1,g=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){h=i;var s=l(t,e);return n(s),function(e){for(var i=[],a=0;a<s.length;a++){var r=s[a],o=d[r.id];o.refs--,i.push(o)}e?(s=l(t,e),n(s)):s=[];for(var a=0;a<i.length;a++){var o=i[a];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete d[o.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var a=e[s],r=a[0],o=a[1],u=a[2],l=a[3],d={id:t+":"+s,css:o,media:u,sourceMap:l};n[r]?n[r].parts.push(d):i.push(n[r]={id:r,parts:[d]})}return i}},function(e,i){e.exports=t}])});