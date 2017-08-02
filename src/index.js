
import VueC3Chart from './components/VueC3Chart.vue'
import VueC3Line from './components/VueC3Line'
import VueC3Spline from './components/VueC3Spline'
import VueC3Bar from './components/VueC3Bar'
import VueC3Area from './components/VueC3Area'
import VueC3AreaSpline from './components/VueC3AreaSpline'
import VueC3Scatter from './components/VueC3Scatter'
import VueC3Step from './components/VueC3Step'
import VueC3Pie from './components/VueC3Pie'
import VueC3Donut from './components/VueC3Donut'
import VueC3Gauge from './components/VueC3Gauge'
import npmCfg from './../package.json'

const components = [
    VueC3Chart,
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
    VueC3Chart,
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

export default VueC3Charts

module.exports = {
    version: npmCfg.version,
    install,
    VueC3Charts,
    VueC3Chart,
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
