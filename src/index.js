
import VueC3Chart from './components/VueC3Chart.vue'
import VueC3Line from './components/VueC3Line'
import VueC3Spline from './components/VueC3Spline'
import npmCfg from './../package.json'

const components = [
    VueC3Chart,
    VueC3Line,
    VueC3Spline
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
    VueC3Spline
}

export default VueC3Charts

module.exports = {
    version: npmCfg.version,
    install,
    VueC3Charts,
    VueC3Chart,
    VueC3Line,
    VueC3Spline
}
