<style>
    @import url("./../../node_modules/c3/c3.min.css");
</style>

<template>
    <div>
        <div><slot></slot></div>
        <div v-bind:id="bindTo"></div>
    </div>
</template>

<script>
    import VueC3Base from './../mixins/VueC3Base'
    // import VueC3Chart from './VueC3Chart.vue'
    // import VueC3Line from './combination/VueC3Line'

    var c3 = require("c3")

    export default {

        mixins: [VueC3Base],

        //components: { VueC3Chart, VueC3Line },

        name: "c3-line-chart",

        props: {
            connectNull: {
                type: Boolean
            }
        },

        data: function data() {
            return {
                chartType: 'line'
            };
        },

        created() {

        },

        mounted() {
            // console.log('VueC3LineChart attributes: ')
            // console.log(this.$el)
            // console.log(this.$el.attributes)

            // console.log('VueC3LineChart number props: ')
            // console.log(this.width)
            // console.log(this.height)

            // console.log('VueC3LineChart bool props: ')
            // console.log(this.labels)

            // var chart = c3.generate(this.defaultOptions)
            // this.setChartObject(chart)
            // this.isReady = true
        },

        methods: {


        },

        computed: {

        },

        watch: {

        },
    }
</script>
