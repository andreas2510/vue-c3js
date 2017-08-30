
import VueC3CombinationElement from './../../mixins/VueC3CombinationElement'

export default {

    mixins: [VueC3CombinationElement],

    name: "c3-scatter",

    data: function data() {
        return {
            type: 'scatter'
        }
    }
}

