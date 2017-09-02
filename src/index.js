// Chart types
import VueC3LineChart from './components/VueC3LineChart'
import VueC3SplineChart from './components/VueC3SplineChart'
import VueC3StepChart from './components/VueC3StepChart'
import VueC3AreaChart from './components/VueC3AreaChart'
import VueC3AreaSplineChart from './components/VueC3AreaSplineChart'
import VueC3BarChart from './components/VueC3BarChart'
import VueC3ScatterChart from './components/VueC3ScatterChart'
import VueC3PieChart from './components/VueC3PieChart'
import VueC3DonutChart from './components/VueC3DonutChart'
import VueC3GaugeChart from './components/VueC3GaugeChart'

// Combination chart & elements
import VueC3CombinationChart from './components/VueC3CombinationChart'
import VueC3Line from './components/combination/VueC3Line'
import VueC3Spline from './components/combination/VueC3Spline'
import VueC3Bar from './components/combination/VueC3Bar'
import VueC3Area from './components/combination/VueC3Area'
import VueC3AreaSpline from './components/combination/VueC3AreaSpline'
import VueC3Scatter from './components/combination/VueC3Scatter'
import VueC3Step from './components/combination/VueC3Step'
import VueC3Pie from './components/combination/VueC3Pie'
import VueC3Donut from './components/combination/VueC3Donut'
import VueC3Gauge from './components/combination/VueC3Gauge'

// Config
import npmCfg from './../package.json'

const components = [
  VueC3CombinationChart,
  VueC3Line,
  VueC3Spline,
  VueC3Bar,
  VueC3Area,
  VueC3AreaSpline,
  VueC3Scatter,
  VueC3Step,
  VueC3Pie,
  VueC3Donut,
  VueC3Gauge,
  VueC3LineChart,
  VueC3SplineChart,
  VueC3StepChart,
  VueC3AreaChart,
  VueC3AreaSplineChart,
  VueC3BarChart,
  VueC3ScatterChart,
  VueC3PieChart,
  VueC3DonutChart,
  VueC3GaugeChart,
]

const install = function(Vue, opts = {}) {
  // if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  })
}

// if (typeof window !== 'undefined' && window.Vue) {
//     console.log('VueC3Js')
//     install(window.Vue)
// }

const VueC3Js = {
  version: npmCfg.version,
  install,
  VueC3CombinationChart,
  VueC3Line,
  VueC3Spline,
  VueC3Bar,
  VueC3Area,
  VueC3AreaSpline,
  VueC3Scatter,
  VueC3Step,
  VueC3Pie,
  VueC3Donut,
  VueC3Gauge,
  VueC3LineChart,
  VueC3SplineChart,
  VueC3StepChart,
  VueC3AreaChart,
  VueC3AreaSplineChart,
  VueC3BarChart,
  VueC3ScatterChart,
  VueC3PieChart,
  VueC3DonutChart,
  VueC3GaugeChart,
}

export default VueC3Js
