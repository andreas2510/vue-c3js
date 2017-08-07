// Base

// Types
import VueC3LineChart from './components/VueC3LineChart.vue'

// Combination
import VueC3CombinationChart from './components/VueC3CombinationChart.vue'
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
]

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    })
}

// if (typeof window !== 'undefined' && window.Vue) {
//     console.log('ELEMENT')
//     install(window.Vue);
// };

const VueC3Charts = {
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
}

export default VueC3Charts

module.exports = {
    version: npmCfg.version,
    install,
    VueC3Charts,
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
}
