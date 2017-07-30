
export default {

    replace: true,

    props: {
        id: {
            type: String
        },
        prop: {
            type: String
        },
        color: {
            type: String
        },
        name: {
            type: String
        },
        customClass: {
            type: String
        },
    },

    data: function data() {
        return {
            type: ''
        };
    },

    mounted() {
        this.$parent.$emit('c3-chart-element-mounted', this.type, this.prop, this.options)
    },

    methods: {

        optionExists: function(option) {
            return (undefined !== option && null !== option && '' !== option) ? true : false
        },
    },

    computed: {

        options: function() {
            var _options = {}

            if (this.optionExists(this.color)) {
                _options.color = this.color
            }

            if (this.optionExists(this.name)) {
                _options.name = this.name
            }

            if (this.optionExists(this.customClass)) {
                _options.customClass = this.customClass
            }

            return _options
        }
    },

    watch: {

    },
}
