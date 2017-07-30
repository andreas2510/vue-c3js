
import VueC3Element from './../mixins/VueC3Element'

export default {

    mixins: [VueC3Element],

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
