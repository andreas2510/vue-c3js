
import VueC3CombinationElement from './../../mixins/VueC3CombinationElement'

export default {

    mixins: [VueC3CombinationElement],

    name: "c3-line",

    props: {
        connectNull: {},
        stepType: {},
    },

    data: function data() {
        return {
            type: 'line'
        };
    },

    mounted() {

    },

    methods: {

    },

    computed: {

    },

    filters: {

    },

    watch: {

    },
}
