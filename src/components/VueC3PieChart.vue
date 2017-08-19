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
    import VueC3PieDonutGaugeBase from './../mixins/VueC3PieDonutGaugeBase'

    var c3 = require("c3")

    export default {

        mixins: [VueC3Base, VueC3PieDonutGaugeBase],

        name: "c3-pie-chart",

        props: {

        },

        data: function data() {
            return {
                chartType: 'pie'
            };
        },

        created() {
        },

        mounted() {
        },

        methods: {
        },

        computed: {
        },

        watch: {
        },
    }
</script>
